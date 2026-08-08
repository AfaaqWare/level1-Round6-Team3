"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Textarea from "@/shared/components/atoms/TextArea";
import Input from "@/shared/components/atoms/Input";
import Title from "@/shared/components/atoms/Title";
import ContactButton from "../../atoms/contact/ContactButton";
import { contactSchema } from "@/modules/guest/schemas/contactSchema";

interface ContactFormProps {
  method?: "POST" | "GET";
  action?: string;
}
const ContactForm = ({ method = "POST", action = "" }: ContactFormProps) => {
  const [errors, setErrors] = useState({
  fullName: "",
  email: "",
  subject: "",
  message: "",
})
  const t = useTranslations("publicPages.contact.form");

const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{

const data = new FormData(e.currentTarget)
e.preventDefault()

const userData ={
fullName: data.get("fullName"),
email: data.get("email"),
subject: data.get('subject'),
message:data.get("message")
}

const result = contactSchema.safeParse(userData)

if(!result.success){
   const formErrors = result.error.issues;

  setErrors({
    fullName:
      formErrors.find((error) => error.path[0] === "fullName")?t("fullName.error") : "",

    email:
      formErrors.find((error) => error.path[0] === "email")?t("email.error") : "",

    subject:
      formErrors.find((error) => error.path[0] === "subject")?t("subject.error") : "",

    message:
      formErrors.find((error) => error.path[0] === "message")?t("message.error") : "",
  });
}
}

  return (
    <form
      onSubmit={handleSubmit}
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
        state = {errors.fullName? "error" :"default"}
      errorMessage={errors.fullName}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label={t("email.label")}
        placeholder={t("email.placeholder")}
          state = {errors.email? "error" :"default"}
      errorMessage={errors.email}
      />
      <Input
        id="subject"
        name="subject"
        label={t("subject.label")}
        placeholder={t("subject.placeholder")}
          state = {errors.subject? "error" :"default"}
      errorMessage={errors.subject}
      />
      <Textarea
        id="message"
        name="message"
        label={t("message.label")}
        placeholder={t("message.placeholder")}
        rows={4}
         state = {errors.message? "error" :"default"}
      errorMessage={errors.message}
      />

      <ContactButton label={t("submit")} />
    </form>
  );
};

export default ContactForm;
