import Image from 'next/image';

export interface Image3DEffectProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  decorativeElements?: boolean;
  aspectRatio?: string;
}

export const Image3DEffect = ({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 90vw, 45vw',
  decorativeElements = true,
  aspectRatio = 'aspect-square'
}: Image3DEffectProps) => {
  return (
    <div className={`image-3d-container relative ${aspectRatio} w-full`}>
      {decorativeElements && (
        <>
          <div className="from-secondary-300/40 to-primary-200/30 dark:from-secondary-700/30 dark:to-primary-800/20 animate-float-slow absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br blur-lg"></div>
          <div className="from-primary-300/30 dark:from-primary-700/30 animate-float absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-gradient-to-tr to-violet-200/20 blur-lg dark:to-violet-800/20"></div>
        </>
      )}

      <div
        className={`image-3d relative ${aspectRatio} w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]`}
      >
        <div className="from-primary-200/30 to-secondary-200/30 dark:from-primary-800/30 dark:to-secondary-800/30 image-3d-layer image-3d-overlay absolute inset-0 z-10 rounded-2xl bg-gradient-to-br via-transparent dark:via-transparent"></div>
        <div className="image-3d-layer image-3d-shadow absolute -inset-1 -z-10 rounded-2xl bg-black/5 blur-md"></div>
        <Image
          alt={alt}
          src={src}
          fill
          priority={priority}
          sizes={sizes}
          className="image-3d-layer image-3d-content object-cover object-center"
        />
      </div>
    </div>
  );
};
