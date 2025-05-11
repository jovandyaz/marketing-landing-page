import Image from 'next/image';

interface IconLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

//TODO: Improve this component...
export const IconLogo = ({ src, alt, width = 40, height = 40, className = '' }: IconLogoProps) => {
  const isSvg = src.endsWith('.svg');

  if (isSvg) {
    return (
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} className={className} />
      </div>
    );
  }

  return (
    <div className="relative inline-block">
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
