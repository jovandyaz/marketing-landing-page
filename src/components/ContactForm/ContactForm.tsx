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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[320px] space-y-6 md:max-w-[480px] md:space-y-8 lg:max-w-[640px] lg:space-y-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
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
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            className="cursor-pointer"
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
