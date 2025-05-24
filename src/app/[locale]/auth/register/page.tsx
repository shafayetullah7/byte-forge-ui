'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const RegisterPage = () => {
  const t = useTranslations('user.auth.registration');
  const text = {
    header: {
      title: t('title'),
      subtitle: t('subtitle'),
    },
    form: {
      labels: {
        firstName: t('firstName'),
        lastName: t('lastName'),
        username: t('username'),
        email: t('email'),
        password: t('password'),
      },
      placeholders: {
        firstName: t('placeholders.firstName'),
        lastName: t('placeholders.lastName'),
        username: t('placeholders.username'),
        email: t('placeholders.email'),
        password: t('placeholders.password'),
      },
      passwordRequirements: {
        title: t('passwordRequirementsTitle'),
        items: [
          t('passwordRequirements.uppercase'),
          t('passwordRequirements.lowercase'),
          t('passwordRequirements.number'),
          t('passwordRequirements.specialChar'),
        ],
      },
      terms: {
        termsAgreement: t('termsAgreement'),
        termsAndConditions: t('termsAndConditions'),
      },
      buttons: {
        register: t('register'),
        creatingAccount: t('creatingAccount'),
      },
    },
    errors: {
      firstName: {
        required: t('errors.firstName.required'),
        maxLength: t('errors.firstName.maxLength'),
        lettersOnly: t('errors.firstName.lettersOnly'),
      },
      lastName: {
        required: t('errors.lastName.required'),
        maxLength: t('errors.lastName.maxLength'),
        lettersOnly: t('errors.lastName.lettersOnly'),
      },
      userName: {
        minLength: t('errors.userName.minLength'),
        maxLength: t('errors.userName.maxLength'),
        invalidCharacters: t('errors.userName.invalidCharacters'),
      },
      email: {
        invalid: t('errors.email.invalid'),
        maxLength: t('errors.email.maxLength'),
      },
      password: {
        minLength: t('errors.password.minLength'),
        maxLength: t('errors.password.maxLength'),
        uppercase: t('errors.password.uppercase'),
        lowercase: t('errors.password.lowercase'),
        number: t('errors.password.number'),
        specialChar: t('errors.password.specialChar'),
      },
    },
  };

  const registerSchema = z.object({
    firstName: z
      .string()
      .min(1, text.errors.firstName.required)
      .max(50, text.errors.firstName.maxLength)
      .regex(/^[a-zA-Z]+$/, text.errors.firstName.lettersOnly),
    lastName: z
      .string()
      .min(1, text.errors.lastName.required)
      .max(50, text.errors.lastName.maxLength)
      .regex(/^[a-zA-Z]+$/, text.errors.lastName.lettersOnly),
    userName: z
      .string()
      .min(3, text.errors.userName.minLength)
      .max(50, text.errors.userName.maxLength)
      .regex(/^[a-z0-9_]+$/, text.errors.userName.invalidCharacters),
    email: z
      .string()
      .email(text.errors.email.invalid)
      .max(255, text.errors.email.maxLength),
    password: z
      .string()
      .min(8, text.errors.password.minLength)
      .max(255, text.errors.password.maxLength)
      .regex(/[A-Z]/, text.errors.password.uppercase)
      .regex(/[a-z]/, text.errors.password.lowercase)
      .regex(/[0-9]/, text.errors.password.number)
      .regex(/[^A-Za-z0-9]/, text.errors.password.specialChar),
  });

  type RegisterFormValues = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('✅ Valid data:', data);
    // Perform registration logic here
  };

  const labelClass = 'block text-sm font-medium primary-text-3 mb-1';

  return (
    <div className="w-full space-y-8 p-8 rounded-xl">
      <div className="text-center">
        {/* <h2 className="mt-6 text-3xl font-bold">Create your account</h2> */}
        <h2 className="mt-6 text-3xl font-bold">{text.header.title}</h2>
        {/* <p className="mt-2 text-sm primary-text-3">
          Join our community today
        </p> */}
        <p className="mt-2 text-sm primary-text-3">{text.header.subtitle}</p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                {text.form.labels.firstName}
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName')}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  errors.firstName ? 'border-red-300' : 'border-gray-300'
                } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
                placeholder={text.form.placeholders.firstName}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className={labelClass}>
                {text.form.labels.lastName}
              </label>
              <input
                id="lastName"
                type="text"
                {...register('lastName')}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  errors.lastName ? 'border-red-300' : 'border-gray-300'
                } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
                placeholder={text.form.placeholders.lastName}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="userName" className={labelClass}>
              {text.form.labels.username}
            </label>
            <input
              id="userName"
              type="text"
              {...register('userName')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.userName ? 'border-red-300' : 'border-gray-300'
              } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
              placeholder={text.form.placeholders.username}
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              {text.form.labels.email}
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
              placeholder={text.form.placeholders.email}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>
              {text.form.labels.password}
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
              placeholder={text.form.placeholders.password}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
            <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              <p>{text.form.passwordRequirements.title}</p>
              <ul className="list-disc list-inside">
                {text.form.passwordRequirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm primary-text-3">
            {text.form.terms.termsAgreement}
            <a
              href="#"
              className="font-medium text-[var(--link)] hover:text-[var(--link-hover)]"
            >
              {text.form.terms.termsAndConditions}
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
              isSubmitting
                ? 'bg-[var(--primary-light)]'
                : 'bg-[var(--primary)] hover:bg-[var(--primary-deep)] '
            } focus:outline-none transition-colors`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                {text.form.buttons.creatingAccount}
              </>
            ) : (
              text.form.buttons.register
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
