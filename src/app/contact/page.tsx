import { ContactForm, ScrollReveal } from '@/components';

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:py-4">
      <ScrollReveal variant="fade-up" delay={0.3} duration={0.9}>
        <ContactForm />
      </ScrollReveal>
    </div>
  );
}
