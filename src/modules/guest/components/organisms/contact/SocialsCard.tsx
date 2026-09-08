"use client";
import { socials } from "@/modules/guest/utils/data";
import SocialInfoBox from "../../molecules/contact/SocialInfoBox";
import React from "react";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import { FlyingPaperPlane } from "@/assets/images/images";
import Image from "@/shared/components/atoms/Image";

const SocialsCard = () => {
  const t = useTranslations("publicPages.contact.socials");
  const tContact = useTranslations("publicPages.contact");
  return (
    <div className="ds-bg-alt ds-border-card ds-shadow-card flex w-full flex-col gap-2.5 overflow-hidden rounded-3xl p-8 md:w-[45%]">
      <Title size="md" className="mb-1 ">
        {tContact("title")}
      </Title>

      <div className="flex flex-col gap-8">
        {socials.map(social => (
          <SocialInfoBox
            key={social.key}
            title={t(`${social.key}.title`)}
            text={t(`${social.key}.text`)}
            icon={social.icon}
          />
        ))}
      </div>

      <Image
        width={437}
        height={127}
        src={FlyingPaperPlane}
        alt=""
        aria-hidden
        className="pointer-events-none mt-auto w-full select-none "
      />
    </div>
  );
};

export default SocialsCard;