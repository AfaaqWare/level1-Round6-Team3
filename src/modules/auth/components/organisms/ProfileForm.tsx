"use client";

import React, { useState, useEffect } from "react";
import Input from "@/shared/components/atoms/Input";
import PasswordInput from "@/shared/components/molecules/PasswordInput";
import Button from "@/shared/components/atoms/Button";
import { useUpdateProfile } from "@/modules/auth/hooks/useUpdateProfile";
import Swal from "sweetalert2";

interface ProfileFormProps {
  initialData?: {
    name: string;
    email: string;
  };
  selectedImageFile: File | null;
  onSaveSuccess: () => void;
}

const countries = [
  { value: "Netherlands Antilles", label: "Netherlands Antilles" },
  { value: "United States", label: "United States" },
  { value: "Egypt", label: "Egypt" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "United Kingdom", label: "United Kingdom" },
];

const languages = [
  { value: "English", label: "English" },
  { value: "Arabic", label: "Arabic" },
  { value: "Dutch", label: "Dutch" },
];

export default function ProfileForm({
  initialData,
  selectedImageFile,
  onSaveSuccess,
}: ProfileFormProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("520-631-1454"); // Static/UI Only
  const [country, setCountry] = useState("Netherlands Antilles"); // Static/UI Only
  const [language, setLanguage] = useState("English"); // Static/UI Only

  const { mutate: updateProfile, isPending } = useUpdateProfile();

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.name || "");
      setEmail(initialData.email || "");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userName);
    
    if (password) {
      formData.append("password", password);
    }
    
    if (selectedImageFile) {
      formData.append("image", selectedImageFile);
    }

    updateProfile(formData, {
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your account details have been successfully saved.",
          confirmButtonColor: "#00b7c1",
        });
        setPassword(""); // Clear password field after save
        onSaveSuccess();
      },
      onError: (err: any) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: err?.response?.data?.message || err?.message || "Could not update profile.",
          confirmButtonColor: "#ef4444",
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div className="profile-form-grid">
        {/* Left Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">User Name</label>
          <input
            type="text"
            className="profile-form-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Enter user name"
          />
        </div>

        {/* Right Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">Password</label>
          <div className="password-input-wrapper">
            <PasswordInput
              className="profile-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
        </div>

        {/* Left Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">E-mail</label>
          <input
            type="email"
            className="profile-form-input"
            value={email}
            disabled
            placeholder="Enter e-mail address"
          />
        </div>

        {/* Right Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">Country</label>
          <select
            className="profile-form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Left Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">Phone Number</label>
          <input
            type="text"
            className="profile-form-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        {/* Right Column */}
        <div className="profile-form-field">
          <label className="profile-form-label">Language</label>
          <select
            className="profile-form-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="profile-save-wrapper">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isPending}
          className="btn-save-changes"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
