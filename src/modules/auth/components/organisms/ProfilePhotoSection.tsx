"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { User } from "@/assets/icons/icons";

interface ProfilePhotoSectionProps {
  currentImage: string;
  userName: string;
  onFileSelect: (file: File) => void;
  onRemovePhoto: () => void;
}

export default function ProfilePhotoSection({
  currentImage,
  userName,
  onFileSelect,
  onRemovePhoto,
}: ProfilePhotoSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
    // Reset input so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="profile-photo-section">
      <div className="profile-photo-avatar">
        {currentImage ? (
          <Image
            src={currentImage}
            alt={userName || "Profile"}
            width={80}
            height={80}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color-form)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <User size={32} style={{ color: "var(--color-text-disabled)" }} />
          </div>
        )}
      </div>

      <div className="profile-photo-actions">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          aria-label="Upload profile photo"
        />
        <button
          type="button"
          className="btn-upload-photo"
          onClick={handleUploadClick}
        >
          Upload New Photo
        </button>
        <button
          type="button"
          className="btn-remove-photo"
          onClick={onRemovePhoto}
        >
          Remove photo
        </button>
      </div>
    </div>
  );
}
