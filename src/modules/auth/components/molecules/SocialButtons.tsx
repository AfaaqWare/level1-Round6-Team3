import Button from "@/shared/components/atoms/Button";
import { socialButtons } from "@/modules/auth/utils/data";

interface SocialButtonsProps {
  onGoogleClick?: () => void;
  onGithubClick?: () => void;
}

export default function SocialButtons({ onGoogleClick, onGithubClick }: SocialButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-[var(--space-4xl)]">
      {socialButtons.map(button => (
        <Button
          key={button.id}
          variant="outline"
          onClick={button.id === "google" ? onGoogleClick : onGithubClick}
          className="ds-border-card h-16 w-16 bg-white p-0"
          isRounded
        >
          {button.icon}
        </Button>
      ))}
    </div>
  );
}
