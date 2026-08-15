"use client";

import React, { useState } from "react";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";
import ProfileForm from "@/modules/auth/components/organisms/ProfileForm";
import ProfilePhotoSection from "@/modules/auth/components/organisms/ProfilePhotoSection";
import Sidebar from "@/shared/components/organisms/Sidebar";
import "@/modules/auth/components/profile.css";

function Page() {
  const { data, refetch } = useGetProfile();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [localPreview, setLocalPreview] = useState<string | null>(null);

  // Derived: local preview (file selected or removed) takes priority over server image
  const previewUrl = localPreview ?? data?.image ?? "";

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setLocalPreview(URL.createObjectURL(file));
  };

  const handleRemovePhoto = () => {
    setSelectedFile(null);
    setLocalPreview("");
  };

  const handleSaveSuccess = () => {
    setSelectedFile(null);
    setLocalPreview(null); // reset to server image
    refetch();
  };

  return (
    <div className="profile-settings-wrapper">
      <Sidebar />
      <main className="profile-main-content">
        <div className="account-info-card">
          <h1 className="account-info-title">Account Information</h1>
          <p className="account-info-subtitle">
            Update your profile details and manage your account settings
          </p>

          <ProfilePhotoSection
            currentImage={previewUrl}
            userName={data?.name || ""}
            onFileSelect={handleFileSelect}
            onRemovePhoto={handleRemovePhoto}
          />

          <ProfileForm
            initialData={
              data
                ? {
                    name: data.name,
                    email: data.email,
                  }
                : undefined
            }
            selectedImageFile={selectedFile}
            onSaveSuccess={handleSaveSuccess}
          />
        </div>
      </main>
    </div>
  );
}

export default Page;
