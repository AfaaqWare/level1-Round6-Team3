"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Upload, X } from "@/assets/icons/icons";

interface ImageDropZoneLabels {
  dragAndDrop?: string;
  or?: string;
  chooseFile?: string;
  hint?: string;
  remove?: string;
  alt?: string;
  errorType?: string;
  errorSize?: string;
}

interface ImageDropZoneProps {
  onFileSelect: (file: File | null) => void;
  error?: string;
  initialPreview?: string | null;
  variant?: "inline" | "card";
  label?: string;
  helper?: string;
  required?: boolean;
  id?: string;
  labels?: ImageDropZoneLabels;
}

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_SIZE = 1 * 1024 * 1024; // 1MB

export default function ImageDropZone({
  onFileSelect,
  error,
  initialPreview = null,
  variant = "inline",
  label,
  helper,
  required = false,
  id,
  labels = {},
}: ImageDropZoneProps) {
  const [preview, setPreview] = useState<string | null>(initialPreview);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userSelected = useRef(false);

  useEffect(() => {
    if (!userSelected.current) {
      setPreview(initialPreview);
    }
  }, [initialPreview]);

  const openPicker = () => inputRef.current?.click();

  const validateAndSetFile = useCallback(
    (file: File) => {
      setFileError(null);

      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError(labels.errorType ?? "Only PNG, JPG, or WEBP files are allowed.");
        return;
      }

      if (file.size > MAX_SIZE) {
        setFileError(labels.errorSize ?? "File size must be under 1MB.");
        return;
      }

      userSelected.current = true;
      const url = URL.createObjectURL(file);
      setPreview(url);
      onFileSelect(file);
    },
    [labels.errorSize, labels.errorType, onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) validateAndSetFile(file);
    },
    [validateAndSetFile]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const handleRemove = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    userSelected.current = false;
    setFileError(null);
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
    setPreview(initialPreview || null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPicker();
    }
  };

  const displayError = fileError || error;
  const isCard = variant === "card";

  return (
    <div className="flex flex-col gap-[var(--space-xs)]">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-[var(--color-text-primary)]"
        >
          {label}
          {required && (
            <span className="ms-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {helper && (
        <p className="text-xs leading-snug text-[var(--color-text-secondary)]">{helper}</p>
      )}

      <div
        role="button"
        tabIndex={0}
        aria-label={labels.dragAndDrop ?? "Upload survey cover image"}
        onClick={() => openPicker()}
        onKeyDown={handleKeyDown}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "create-survey-dropzone w-full",
          isDragging && "dragging",
          displayError && "has-error",
          isCard && "min-h-[220px]"
        )}
      >
        {preview ? (
          <div
            className={cn(
              isCard
                ? "relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)]"
                : "create-survey-dropzone-preview"
            )}
          >
            <img
              src={preview}
              alt={labels.alt ?? "Survey cover preview"}
              className={isCard ? "h-full w-full object-cover" : ""}
            />
            <button
              type="button"
              className="create-survey-dropzone-remove"
              onClick={handleRemove}
              aria-label={labels.remove ?? "Remove image"}
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <div className="create-survey-dropzone-content">
            <Upload className="create-survey-dropzone-icon" />
            <p className="create-survey-dropzone-title">
              {labels.dragAndDrop ?? "Drag and Drop an image here"}
            </p>
            <p className="create-survey-dropzone-or">{labels.or ?? "Or"}</p>
            <button
              type="button"
              className="create-survey-dropzone-btn"
              onClick={e => {
                e.stopPropagation();
                openPicker();
              }}
            >
              {labels.chooseFile ?? "Choose file"}
            </button>
            <p className="create-survey-dropzone-hint">
              {labels.hint ?? "PNG , JPG or WEBP ( Max. 1MB )"}
            </p>
          </div>
        )}

        <input
          ref={inputRef}
          id={id}
          type="file"
          accept=".png,.jpg,.jpeg,.webp"
          className="hidden"
          tabIndex={-1}
          onChange={handleInputChange}
        />
      </div>

      {displayError && (
        <p role="alert" className="text-xs leading-snug text-red-500">
          {displayError}
        </p>
      )}
    </div>
  );
}