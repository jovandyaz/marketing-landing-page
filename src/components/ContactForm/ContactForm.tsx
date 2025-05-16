'use client';

import { SOURCE_OPTIONS } from './contact-form.constants';
import { contactFormSchema } from './contact-form.schema';
import { ContactFormData } from './contact-form.types';
import {
  Badge,
  Button,
  CuteCard,
  CuteCardContent,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      source: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading('Enviando mensaje...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      toast.dismiss(loadingToast);

      if (!response.ok) {
        console.error('Error del servidor:', result);
        throw new Error(result.details || result.error || 'Error al enviar el mensaje');
      }

      toast.success('¡Mensaje enviado! Te contactaremos pronto.');
      form.reset();
    } catch (error) {
      toast.dismiss(loadingToast);

      toast.error(
        error instanceof Error
          ? error.message
          : 'No se pudo enviar el mensaje. Por favor intenta nuevamente.'
      );
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl">
      <CuteCard variant="primary">
        <CuteCardContent>
          <div className="relative mb-6 w-full sm:mb-8">
            <div className="absolute top-0 -left-4 h-full w-1 bg-yellow-400"></div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              Contáctame
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
              Completa el formulario y te responderé a la{' '}
              <span className="text-primary-600 dark:text-primary-400 font-medium">brevedad</span>
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-1 gap-4 sm:gap-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Nombre completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre"
                          {...field}
                          className="bg-white/90 dark:bg-gray-800/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Tu email"
                          {...field}
                          className="bg-white/90 dark:bg-gray-800/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="10 dígitos"
                          {...field}
                          className="bg-white/90 dark:bg-gray-800/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Empresa <span className="text-gray-400">(Opcional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre de tu empresa"
                          {...field}
                          className="bg-white/90 dark:bg-gray-800/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Cómo nos conociste?</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/90 dark:bg-gray-800/90">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        {SOURCE_OPTIONS.map(option => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="¿En qué podemos ayudarte?"
                        className="min-h-[80px] bg-white/90 dark:bg-gray-800/90"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-4">
                <Button
                  className="bg-primary-600 relative cursor-pointer overflow-hidden px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-fuchsia-500 hover:shadow-lg sm:px-8"
                  type="submit"
                  disabled={!form.formState.isValid || form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <Badge
                  variant="secondary"
                  className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-800 transition-colors hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                >
                  #TeAyudo
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-tertiary-100 text-tertiary-800 hover:bg-tertiary-200 dark:bg-tertiary-900 dark:text-tertiary-300 dark:hover:bg-tertiary-800 rounded-full px-4 py-2 text-sm transition-colors"
                >
                  #Contacto
                </Badge>
              </motion.div>
            </form>
          </Form>
        </CuteCardContent>
      </CuteCard>
    </section>
  );
};
