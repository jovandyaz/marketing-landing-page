import {
  BlobAnimation,
  FadeContainer,
  FadeDiv,
  FadeSpan,
  Image3DEffect,
  Typewriter
} from '@/components';

export const Hero = () => {
  return (
    <section
      aria-label="hero"
      className="relative flex min-h-[calc(100vh-var(--navbar-height))] w-full items-center justify-center overflow-hidden px-4 pt-6 md:px-8"
    >
      <FadeContainer className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <FadeDiv className="order-1 space-y-4 md:space-y-6">
          <h1 className="text-center text-3xl font-extrabold tracking-tight [text-wrap:balance] text-gray-900 md:text-left md:text-5xl dark:text-white">
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
            <FadeSpan className="text-primary-600 dark:text-primary-400 text-center text-2xl font-bold transition-transform duration-300 hover:scale-105 md:text-justify">
              ¿Lista para hacer brillar tu marca?
            </FadeSpan>
          </FadeDiv>
        </FadeDiv>

        <div className="relative order-2 flex w-full items-center justify-center">
          <FadeDiv className="relative mx-auto w-full max-w-md">
            <div className="hidden md:block">
              <BlobAnimation>
                <Image3DEffect
                  src="/images/photo_home.png"
                  alt="Mujer trabajando en su computadora"
                  priority={true}
                  decorativeElements={false}
                />
              </BlobAnimation>
            </div>
            <div className="block md:hidden">
              <Image3DEffect
                src="/images/photo_home.png"
                alt="Mujer trabajando en su computadora"
                priority={true}
                decorativeElements={false}
              />
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  );
};
