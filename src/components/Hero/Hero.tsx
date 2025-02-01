import Image from 'next/image';
import { BlobAnimation, FadeContainer, FadeDiv, FadeSpan, Typewriter } from '../ui';

export const Hero = () => {
  return (
    <section aria-label="hero" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <FadeContainer className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <FadeDiv className="space-y-6 md:col-start-1 md:row-start-1">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <FadeSpan className="block">El éxito llega</FadeSpan>
            <FadeSpan className="block">cuando das el</FadeSpan>
            <FadeSpan className="block">
              <Typewriter
                text={['primer paso.', 'segundo paso.', 'tercer paso.']}
                speed={70}
                className="text-yellow-400"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={'_'}
              />
            </FadeSpan>
          </h1>
          <p className="text-lg text-gray-700 sm:text-xl">
            <FadeSpan>
              Convierte tus ideas en proyectos reales que te harán llegar al éxito deseado.
            </FadeSpan>
          </p>
        </FadeDiv>

        <div className="relative h-full w-full md:col-start-2 md:row-start-1">
          <FadeDiv className="relative h-full">
            <BlobAnimation>
              <div className="relative aspect-square h-auto w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  alt="Farm with vehicles"
                  src="/images/photo_home.png"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </BlobAnimation>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  );
};
