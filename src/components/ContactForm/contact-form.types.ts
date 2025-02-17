import { z } from "zod";
import { contactFormSchema } from "./contact-form.schema";

export type ContactFormData = z.infer<typeof contactFormSchema>;
