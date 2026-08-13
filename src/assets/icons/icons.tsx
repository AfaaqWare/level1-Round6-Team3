import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";
import {
  Moon,
  Sun,
  ListMinus,
  X,
  Eye,
  EyeOff,
  ChevronDown,
  LogOut,
  User,
  Mail,
  LayoutDashboard,
  Check,
  CalendarDays,
  Clock3,
  FileText,
  Send,
  Lock,
  LoaderCircle,
  Bell
  
} from "lucide-react";

type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
const FaFacebookF = (props: IconProps) => <Icon icon="fa-brands:facebook-f" {...props} />;
const FaLinkedinIn = (props: IconProps) => <Icon icon="mdi:linkedin" {...props} />;
const FaWhatsapp = (props: IconProps) => <Icon icon="fa-brands:whatsapp" {...props} />;
const FaTwitter = (props: IconProps) => <Icon icon="fa-brands:twitter" {...props} />;
const FaGithub = (props: IconProps) => <Icon icon="logos:github-icon" {...props} />;
const FcGoogle = (props: IconProps) => <Icon icon="flat-color-icons:google" {...props} />;

// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";

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
  ChevronDown,
  LogOut,
  User,
  Mail,
  LayoutDashboard,
  Check,
  CalendarDays,
  Clock3,
  FileText,
  Send,
  FaGithub,
  FcGoogle,
  Lock,
  LoaderCircle,
 Bell
};
