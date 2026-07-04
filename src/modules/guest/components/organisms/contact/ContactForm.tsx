"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Textarea from "@/shared/components/atoms/TextArea";
import Input from "@/shared/components/atoms/Input";
import Title from "@/shared/components/atoms/Title";
import ContactButton from "../../atoms/contact/ContactButton";

interface ContactFormProps {
  method?: "POST" | "GET";
  action?: string;
}
const ContactForm = ({ method = "POST", action = "" }: ContactFormProps) => {
  const t = useTranslations("publicPages.contact.form");
  return (
    <form
      action={action}
      method={method}
      className="ds-bg-alt ds-border-card ds-shadow-card flex w-full flex-col gap-4 rounded-3xl p-8 md:w-[52%]"
    >
      <Title size="md" className="mb-2">
        {t("title")}
      </Title>

      <Input
        id="fullName"
        name="fullName"
        label={t("fullName.label")}
        placeholder={t("fullName.placeholder")}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label={t("email.label")}
        placeholder={t("email.placeholder")}
      />
      <Input
        id="subject"
        name="subject"
        label={t("subject.label")}
        placeholder={t("subject.placeholder")}
      />
      <Textarea
        id="message"
        name="message"
        label={t("message.label")}
        placeholder={t("message.placeholder")}
        rows={4}
      />

      <ContactButton label={t("submit")} />
    </form>
  );
};

export default ContactForm;
