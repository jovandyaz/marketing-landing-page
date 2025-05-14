import Image from 'next/image';
import { BlobAnimation, FadeContainer, FadeDiv, FadeSpan, Typewriter } from '@/components';

export const Hero = () => {
  return (
    <section
      aria-label="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 md:px-8"
    >
      <FadeContainer className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
        <FadeDiv className="order-2 space-y-4 md:order-1 md:space-y-6">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-left md:text-5xl">
            <FadeSpan className="block">El éxito llega cuando</FadeSpan>
            <FadeSpan className="block">
              <Typewriter
                text={['te atreves a soñar', 'das el primer paso', 'trabajamos junt@s!']}
                speed={70}
                className="text-secondary-600 dark:text-secondary-400"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={'_'}
              />
            </FadeSpan>
          </h1>
          <FadeDiv className="flex flex-col gap-4 space-y-5">
            <FadeSpan className="text-justify text-base leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
              Porque junt@s transformaremos tus ideas en realidades poderosas, llevándote hasta las
              metas que siempre has anhelado.
            </FadeSpan>
            <FadeSpan className="text-primary-600 dark:text-primary-400 text-center text-2xl font-bold md:text-justify">
              ¿Lista para hacer brillar tu marca?
            </FadeSpan>
          </FadeDiv>
        </FadeDiv>

        <div className="relative order-1 flex w-full items-center justify-center md:order-2">
          <FadeDiv className="relative mx-auto w-full max-w-md">
            <BlobAnimation>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]">
                <div className="from-primary-200/30 dark:from-primary-900/20 absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr to-transparent dark:to-transparent"></div>
                <Image
                  alt="Mujer trabajando en su computadora"
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
