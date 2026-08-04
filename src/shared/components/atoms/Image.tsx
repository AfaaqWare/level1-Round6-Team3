import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export default function AppImage({
  src,
  alt,
  className,
  width = 250,
  height = 250,
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "cover",
}: Props) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        quality={100}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", objectFit && `object-${objectFit}`)}
      />
    );
  }

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn(objectFit && `object-${objectFit}`, "!relative")}
      />
    </div>
  );
}
