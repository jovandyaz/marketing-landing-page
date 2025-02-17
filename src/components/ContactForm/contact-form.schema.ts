import { SOURCE_OPTIONS } from './contact-form.constants';
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  }),

  email: z.string().email({
    message: 'Por favor ingresa un email válido'
  }),

  phone: z
    .string()
    .regex(/^[0-9+\-\s()]*$/, {
      message: 'Por favor ingresa un número de teléfono válido'
    })
    .min(10, {
      message: 'El número de teléfono debe tener al menos 10 dígitos'
    }),

  company: z.string().optional(),

  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres'
  }),

  source: z.enum(SOURCE_OPTIONS.map(option => option.value) as [string, ...string[]], {
    required_error: 'Por favor selecciona cómo nos conociste'
  })
});
