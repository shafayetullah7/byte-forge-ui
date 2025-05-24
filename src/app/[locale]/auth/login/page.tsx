'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const LoginPage = () => {
  const t = useTranslations('user.auth.login');

  const text = {
    header: {
      title: t('header.title'),
      subtitle: t('header.subtitle'),
    },
    form: {
      email: {
        label: t('form.email.label'),
        placeholder: t('form.email.placeholder'),
        errors: {
          maxLength: t('form.email.errors.maxLength'),
          invalid: t('form.email.errors.invalid'),
        },
      },
      password: {
        label: t('form.password.label'),
        placeholder: t('form.password.placeholder'),
        errors: {
          minLength: t('form.password.errors.minLength'),
          maxLength: t('form.password.errors.maxLength'),
        },
      },
      rememberMe: t('form.rememberMe'),
      forgotPassword: t('form.forgotPassword'),
    },
    buttons: {
      submit: t('buttons.submit'),
      submitting: t('buttons.submitting'),
    },
  };

  const loginSchema = z.object({
    email: z
      .string()
      .max(100, text.form.email.errors.maxLength)
      .email(text.form.email.errors.invalid),
    password: z
      .string()
      .min(8, text.form.password.errors.minLength)
      .max(50, text.form.password.errors.maxLength),
  });

  type LoginFormValues = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('✅ Valid data:', data);
    // Perform login logic here
  };

  return (
    <div className="w-full space-y-8 p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold ">{text.header.title}</h2>
        <p className="mt-2 text-sm primary-text-2">{text.header.subtitle}</p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium primary-text-3  mb-1"
            >
              {text.form.email.label}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } placeholder-gray-500 primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
              placeholder={text.form.email.placeholder}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium primary-text-3  mb-1"
            >
              {text.form.password.label}
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm`}
              placeholder={text.form.password.placeholder}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm primary-text-3"
            >
              {text.form.rememberMe}
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              {text.form.forgotPassword}
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  ${
              isSubmitting
                ? 'bg-[var(--primary-light)]'
                : 'bg-[var(--primary)] hover:bg-[var(--primary-deep)] '
            } focus:outline-none  transition-colors`}
          >
            {isSubmitting ? (
              <>
                {' '}
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                {text.buttons.submitting}
              </>
            ) : (
              text.buttons.submit
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
