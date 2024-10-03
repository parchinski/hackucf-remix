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
  let lastName = formData.get('lastName') as string;
  const message = formData.get('message') as string;
  const company = formData.get('company') as string;

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
  if (typeof lastName !== 'string' || lastName.trim().length < 1) {
    errors.lastName = 'Enter a valid last name';
  }
  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  // add company to the end of message like lastname at compny this uses url encoding
  lastName = `${lastName} at ${company}`;

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

export default function Sponsorship() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'loading';
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    company: '',
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
      name === 'company' &&
      (typeof value !== 'string' || value.trim().length < 1)
    ) {
      return 'Enter a valid company name';
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
        <h1 className="text-5xl font-bold mb-16 text-center">Sponsorship</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg">
              We are a community on campus at University of Central Florida.
              Each member supports each other through the sharing of knowledge
              and passion for computer security. We also reach out to educate
              our local community about computer security through public events
              and forums.
            </p>

            <p className="text-lg">
              We are looking for organizations willing to support our students
              and our mission while we strive to produce high-valued results.
              Our club is primarily funded through corporate sponsorships and
              private donations which help offset the costs associated with
              participating in competitions, team travel, training, and
              equipment. We also welcome in-kind donations—hardware, software,
              training subscriptions, peripheral devices, etc.—that support who
              we are and what we do.
            </p>

            <p className="text-lg">
              Every donation is greatly appreciated and recognized as a
              contribution to our continued success. Properly designated
              donations made to us (the Collegiate Cyber Defense Club) a
              501(c)(3) non-profit organization, may be tax deductible.
            </p>

            <p className="text-lg">
              Learn how to officially sponsor the UCF Collegiate Cyber Defense
              Competition Club by contacting us either with the following form
              or at{' '}
              <a
                href="mailto:sponsorship@hackucf.org"
                className="text-brandGold hover:underline"
              >
                sponsorship@hackucf.org
              </a>
              .
            </p>

            <p className="text-lg">
              For our nonprofit's incorporated bylaws, visit{' '}
              <a
                href="https://hackucf.org/bylaws"
                className="text-brandGold hover:underline"
              >
                hackucf.org/bylaws
              </a>
              .
            </p>
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
              <label htmlFor="lastName" className="block text-sm font-medium">
                Company Name (required)
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Company Name"
                className="bg-white text-background"
                value={formData.company}
                onChange={handleInputChange}
                aria-invalid={errors.company ? true : undefined}
                aria-errormessage={
                  errors.company ? 'companyName-error' : undefined
                }
              />
              {errors.lastName && (
                <div id="companyName-error" className="text-red-500 text-sm">
                  {errors.companyName}
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

        <div className="mt-16 text-sm text-center">
          <p className="mb-2">
            A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE
            OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE
            WITHIN THE STATE.
          </p>
          <p>
            REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION
            BY THE STATE. Call: 1-800-HELP-FLA (435-7352) or at FDACS.gov.
          </p>
        </div>
      </div>
    </main>
  );
}
