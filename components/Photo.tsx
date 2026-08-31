import Image from "next/image";

// Real-photo counterpart to PlaceholderImage.tsx — same footprint (ratio,
// border) so swapping one for the other is a one-line change.
type PhotoProps = {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
  className = "",
}: PhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-navy-soft shadow-[0_10px_32px_rgba(7,27,45,0.10)] ${ratio} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
