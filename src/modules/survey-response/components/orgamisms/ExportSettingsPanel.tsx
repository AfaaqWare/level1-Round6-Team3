"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Icon from "@/shared/components/atoms/Icon";
import Checkbox from "@/shared/components/atoms/Checkbox";
import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";
import { Settings, Info, FileSpreadsheet, Lock } from "@/assets/icons/icons";
import { exportSettingsOptions } from "../../utils/data";
import { cn } from "@/lib/cn";

interface ExportSettingsPanelProps {
  defaultFileName: string;
  onExport?: (selectedOptions: Record<string, boolean>, fileName: string) => void;
}

export default function ExportSettingsPanel({
  defaultFileName,
  onExport,
}: ExportSettingsPanelProps) {
  const t = useTranslations("dashboard.surveysExport.exportSettings");

  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(exportSettingsOptions.map(option => [option.id, true]))
  );
  const [fileName, setFileName] = useState(defaultFileName);

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="ds-bg-card ds-rounded-lg h-full p-4 sm:p-6">
      <div className="flex items-center gap-2">
        <Icon IconComponent={Settings} size="sm" variant="primary" />
        <Title size="md">{t("title")}</Title>
      </div>
      <Text size="xs" variant="secondary" className="!mt-3">
        {t("subtitle")}
      </Text>

      <div className="mt-6 flex flex-col gap-5">
        {exportSettingsOptions.map(option => (
          <Checkbox
            key={option.id}
            checked={selectedOptions[option.id]}
            onChange={() => toggleOption(option.id)}
            label={t(`options.${option.labelKey}`)}
            className={cn("!ds-text-xs !mr-3")}
          />
        ))}
      </div>

      <div className="mt-8 border-t border-t-[var(--border-color-card)] pt-4">
        <Input
          size="sm"
          className="!ds-text-xs !mt-2 !rounded-sm !border-[var(--border-color-card)] !py-2 !text-[var(--color-text-dash)]"
          label={t("fileNameLabel")}
          value={fileName}
          onChange={e => setFileName(e.target.value)}
        />
      </div>

      <div className="ds-rounded-md my-6 flex items-center gap-2 bg-[#f6faff] px-4 py-4 dark:bg-[#5C656B]">
        <Icon IconComponent={Info} size="sm" variant="teal" className="shrink-0" />
        <Text size="xs" variant="secondary">
          {t("infoBanner")}
        </Text>
      </div>

      <Button
        variant="primaryWhite"
        isFullWidth
        onClick={() => onExport?.(selectedOptions, fileName)}
      >
        <Icon IconComponent={FileSpreadsheet} size="sm" className="text-inherit" />
        {t("exportButton")}
      </Button>

      <div className="mt-5 flex items-center justify-center gap-1.5">
        <Icon IconComponent={Lock} size="xs" variant="secondary" />
        <Text size="xs" variant="secondary">
          {t("secureNote")}
        </Text>
      </div>
    </section>
  );
}
