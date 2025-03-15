'use client';

import { SOURCE_OPTIONS } from './contact-form.constants';
import { contactFormSchema } from './contact-form.schema';
import { ContactFormData } from './contact-form.types';
import { Button, Input, Textarea } from '@/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
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
    <div className="overflow-hidden rounded-lg bg-gradient-to-br from-white to-gray-50 p-6 shadow-md md:p-8">
      <div className="relative mb-8">
        <div className="absolute top-0 -left-4 h-full w-1 bg-yellow-400"></div>
        <h2 className="text-2xl font-bold text-gray-900">Contáctanos</h2>
        <p className="mt-2 text-gray-600">
          Completa el formulario y te responderemos a la{' '}
          <span className="font-medium text-pink-500">brevedad</span>
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[320px] space-y-6 md:max-w-[480px] md:space-y-8"
        >
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
                    className="transition-colors focus-within:border-yellow-400 hover:border-pink-200"
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
                  <Input type="email" placeholder="Tu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="10 dígitos" {...field} />
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
                  <Input placeholder="Nombre de tu empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cómo nos conociste?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {SOURCE_OPTIONS.map(option => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer hover:bg-gray-100"
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
                    className="min-h-[120px] transition-colors focus-within:border-yellow-400 hover:border-pink-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center pt-4">
            <Button
              className="relative cursor-pointer overflow-hidden bg-fuchsia-400 px-8 py-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-fuchsia-500 hover:shadow-lg"
              type="submit"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-800">
                #TeAyudamos
              </div>
              <div className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-800">
                #Contacto
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
