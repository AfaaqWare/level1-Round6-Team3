import React from "react";
import Button from "@/shared/components/atoms/Button";
import { Send } from "lucide-react";
import Icon from "@/shared/components/atoms/Icon";
interface ContactButtonProps {
  label?: string;
}
const ContactButton = ({ label = "Send Message" }: ContactButtonProps) => {
  return (
    <Button type="submit" variant="primary" isRounded={true} size="md" fullWidth={true}>
      <Icon color="white" IconComponent={Send} size={32} /> {label}
    </Button>
  );
};

export default ContactButton;
