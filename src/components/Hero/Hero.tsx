import Image from 'next/image';
import { BlobAnimation, FadeContainer, FadeDiv, FadeSpan, Typewriter } from '../ui';

export const Hero = () => {
  return (
    <section aria-label="hero" className="flex w-full items-center justify-center px-4 md:px-8">
      <FadeContainer className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
        <FadeDiv className="order-2 space-y-4 md:order-1 md:space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            <FadeSpan className="block">El éxito llega cuando</FadeSpan>
            <FadeSpan className="block">
              <Typewriter
                text={['te atreves a soñar', 'das el primer paso', 'trabajamos junt@s!']}
                speed={70}
                className="text-yellow-400"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={'_'}
              />
            </FadeSpan>
          </h1>
          <p className="text-base text-gray-700 md:text-xl">
            <FadeSpan>
              Porque junt@s haremos que tus ideas florezcan y te lleven a donde siempre has deseado.
            </FadeSpan>
          </p>
        </FadeDiv>

        <div className="relative order-1 w-full md:order-2">
          <FadeDiv className="relative">
            <BlobAnimation>
              <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  alt="Farm with vehicles"
                  src="/images/photo_home.png"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
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
