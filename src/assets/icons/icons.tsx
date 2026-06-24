import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";
import {
  Moon,
  Sun,
  ListMinus,
  X,
  Eye,
  EyeOff,

} from "lucide-react";

type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
const FaFacebookF = (props: IconProps) => <Icon icon="fa-brands:facebook-f" {...props} />;
const FaLinkedinIn = (props: IconProps) => <Icon icon="mdi:linkedin" {...props} />;
const FaWhatsapp = (props: IconProps) => <Icon icon="fa-brands:whatsapp" {...props} />;
const FaTwitter = (props: IconProps) => <Icon icon="fa-brands:twitter" {...props} />;

export {
  Sun,
  Moon,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  ListMinus,
  X,
  Eye,
  EyeOff,

};
