import { useTranslations } from "next-intl";
import React from "react";

function PricingHeader() {
  const t = useTranslations("publicPages.pricingPlans.title");
  return (
    <h1 className="my-10 text-center text-[40px]">
      {" "}
      {t("plans")}  <span className="ds-text-alt">{t("pricing")}</span>
    </h1>
  );
}

export default PricingHeader;
