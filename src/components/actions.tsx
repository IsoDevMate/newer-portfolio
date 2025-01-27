'use server'

import axios from 'axios';
import { contactFormSchema } from './schema';
import { z } from 'zod';

export type ActionResponse = {
  success?: boolean;
  error?: string;
  fieldErrors?: { [key: string]: string[] };
};

export async function sendContactForm(formData: FormData): Promise<ActionResponse> {
  // Extract data from FormData
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  try {
    // Validate with Zod
    const validatedData = contactFormSchema.parse(data);

    // Make API call
    const response = await axios.post('https://losh-site.onrender.com/support-email', validatedData);

    if (response.data.success) {
      return { success: true };
    }

    return { error: 'Failed to send message' };

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors: { [key: string]: string[] } = {};

      error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(err.message);
      });

      return { fieldErrors };
    }

    // Handle other errors
    return { error: 'An error occurred while sending the message' };
  }
}
