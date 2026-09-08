"use client";

import React, { useRef, useState, useCallback } from "react";
import { Upload } from "@/assets/icons/icons";

interface ImageDropZoneProps {
  onFileSelect: (file: File | null) => void;
  error?: string;
}

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_SIZE = 1 * 1024 * 1024; // 1MB

export default function ImageDropZone({ onFileSelect, error }: ImageDropZoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateAndSetFile = useCallback(
    (file: File) => {
      setFileError(null);

      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError("Only PNG, JPG, or WEBP files are allowed.");
        return;
      }

      if (file.size > MAX_SIZE) {
        setFileError("File size must be under 1MB.");
        return;
      }

      const url = URL.createObjectURL(file);
      setPreview(url);
      onFileSelect(file);
    },
    [onFileSelect]
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

  const handleRemove = () => {
    setPreview(null);
    setFileError(null);
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const displayError = fileError || error;

  return (
    <div className="flex flex-col gap-[var(--space-xs)]">
      <div
        className={`create-survey-dropzone ${isDragging ? "dragging" : ""} ${displayError ? "has-error" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {preview ? (
          <div className="create-survey-dropzone-preview">
            <img src={preview} alt="Survey cover preview" />
            <button
              type="button"
              className="create-survey-dropzone-remove"
              onClick={handleRemove}
              aria-label="Remove image"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="create-survey-dropzone-content">
            <Upload className="create-survey-dropzone-icon" />
            <p className="create-survey-dropzone-title">Drag and Drop an image here</p>
            <p className="create-survey-dropzone-or">Or</p>
            <button
              type="button"
              className="create-survey-dropzone-btn"
              onClick={() => inputRef.current?.click()}
            >
              choose file
            </button>
            <p className="create-survey-dropzone-hint">PNG , JPG or WEBP ( Max. 1MB )</p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept=".png,.jpg,.jpeg,.webp"
          className="hidden"
          onChange={handleInputChange}
          id="survey-cover-input"
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
