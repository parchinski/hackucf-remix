import type { ActionFunctionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ActionData {
  errors?: Record<string, string>;
  success?: boolean;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const errors: Record<string, string> = {};
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const message = formData.get('message') as string;

  if (typeof email !== 'string' || !email.includes('@')) {
    errors.email = 'Invalid email address';
  }
  if (typeof message !== 'string' || message.length < 9) {
    errors.message = 'Message should contain more content';
  }
  if (typeof firstName !== 'string' || firstName.trim().length < 1) {
    errors.firstName = 'Enter a valid first name';
  }
  if (typeof lastName !== 'string' || lastName.trim().length < 1) {
    errors.lastName = 'Enter a valid last name';
  }
  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  try {
    const response = await fetch('https://bpmail.bryantpdev.workers.dev/', {
      method: 'POST',
      body: new URLSearchParams({
        email,
        firstName,
        lastName,
        message,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    // biome-ignore lint/suspicious/noExplicitAny: only type that really works in this case
    let data: any;
    if (response.headers.get('content-type')?.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      return json<ActionData>(
        { errors: { form: data?.error || 'Failed to submit form' } },
        { status: response.status },
      );
    }
    return json<ActionData>({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error submitting form:', error);
    return json<ActionData>(
      { errors: { form: 'Failed to submit form. Please try again.' } },
      { status: 500 },
    );
  }
};

export default function ContactUs() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'loading';
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (actionData?.success) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [actionData]);

  const validateField = (name: string, value: string) => {
    if (
      name === 'email' &&
      (typeof value !== 'string' || !value.includes('@'))
    ) {
      return 'Invalid email address';
    }
    if (name === 'message' && (typeof value !== 'string' || value.length < 8)) {
      return 'Message should contain more content';
    }
    if (
      (name === 'firstName' || name === 'lastName') &&
      (typeof value !== 'string' || value.trim().length < 1)
    ) {
      return `Enter a valid ${name === 'firstName' ? 'first' : 'last'} name`;
    }
    return '';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <main className="bg-background text-white min-h-screen mt-20 px-8">
      <div className="container mx-auto max-w-6xl py-16">
        <h1 className="text-5xl font-bold mb-16 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8">
              Need to reach us? No problem. Send us an email or fill out a form,
              and someone from our team will get back to you as soon as
              possible.
            </p>

            <div className="space-y-4">
              <ContactInfo label="General Inquiries" email="ops@hackucf.org" />
              <ContactInfo
                label="Sponsorship"
                email="sponsorship@hackucf.org"
              />
              <ContactInfo label="Disclosure" email="disclosure@hackucf.org" />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 text-brandGold">
                Mailing Address
              </h3>
              <address className="not-italic">
                Collegiate Cyber Defense Club @ UCF
                <br />
                c/o Dr. Thomas Nedorost
                <br />
                Department of Computer Science
                <br />
                University of Central Florida
                <br />
                4328 Scorpius Street, HEC 346
                <br />
                Orlando, FL 32816-2362
              </address>
            </div>
          </div>

          <Form method="post" className="space-y-6">
            {actionData?.errors?.form && (
              <div className="text-red-500 bg-red-100 border border-red-400 rounded p-2">
                {actionData.errors.form}
              </div>
            )}
            {showSuccessMessage && (
              <div className="text-green-500 bg-green-100 border border-green-400 rounded p-2">
                Your message has been sent successfully!
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name (required)
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="bg-white text-background"
                value={formData.firstName}
                onChange={handleInputChange}
                aria-invalid={errors.firstName ? true : undefined}
                aria-errormessage={
                  errors.firstName ? 'firstName-error' : undefined
                }
              />
              {errors.firstName && (
                <div id="firstName-error" className="text-red-500 text-sm">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name (required)
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="bg-white text-background"
                value={formData.lastName}
                onChange={handleInputChange}
                aria-invalid={errors.lastName ? true : undefined}
                aria-errormessage={
                  errors.lastName ? 'lastName-error' : undefined
                }
              />
              {errors.lastName && (
                <div id="lastName-error" className="text-red-500 text-sm">
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email (required)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="bg-white text-background"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={errors.email ? true : undefined}
                aria-errormessage={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div id="email-error" className="text-red-500 text-sm">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message (required)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="bg-white text-background"
                rows={2}
                value={formData.message}
                onChange={handleInputChange}
                aria-invalid={errors.message ? true : undefined}
                aria-errormessage={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <div id="message-error" className="text-red-500 text-sm">
                  {errors.message}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="bg-brandGold hover:bg-brandGold/90 text-background font-semibold py-2 px-4 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

function ContactInfo({
  label,
  email,
}: {
  label: string;
  email: string;
  link?: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1 text-brandGold">{label}</h3>
      <a href={`mailto:${email}`} className="text-brandGold hover:underline">
        {email}
      </a>
    </div>
  );
}
