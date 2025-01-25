import Image from 'next/image';

interface IconLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const IconLogo = ({ src, alt, width = 40, height = 40, className = '' }: IconLogoProps) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-contain ${className}`}
        priority
      />
    </div>
  );
};
