"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import Button from "@/shared/components/atoms/Button";
import Heading from "../../molecules/Home/Heading";
import SocialsCard from "./SocialsCard";
import Image from "@/shared/components/atoms/Image";
import { FlyingPaperPlane } from "@/assets/images/images";

const ContactSection = () => {
  const t = useTranslations("publicPages.contact.header");
  return (
    <div className="ds-container flex flex-col items-center gap-40 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <Heading highlightText={t("highlight")} title={t("title")} text={t("text") }></Heading>
        <Button size="md" variant="primaryWhite" >{t("button")}</Button>
      </div>

      <div className="relative flex w-full flex-col items-stretch justify-center gap-6 md:flex-row">
        {/* decorative arcing plane behind the cards */}
        <Image
          src={FlyingPaperPlane}
          alt=""
          aria-hidden
          width={600}
          height={300}
          className="pointer-events-none absolute top-0 right-12 -z-10 w-[90%] translate-y-[-20%] select-none sm:w-[75%] sm:translate-y-[-60%] md:w-[65%] lg:w-[55%] "
        />

        <SocialsCard />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
