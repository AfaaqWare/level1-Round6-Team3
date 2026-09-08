import { X } from "lucide-react";
import NavLogo from "@/shared/components/atoms/navbar/NavLogo";
import NavIconButton from "@/shared/components/atoms/navbar/NavIconButton";

export default function MobileNavHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <NavLogo size="lg" />
      <NavIconButton onClick={onClose}>
        <X size={45} />
      </NavIconButton>
    </div>
  );
}
