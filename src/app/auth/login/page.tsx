'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().max(100, 'Email is too long').email('Invalid email format'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password is too long'),
});
type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginFormValues) => {
    console.log('✅ Valid data:', data);
    // Perform login logic here
  };

  return (
    <div className="w-full space-y-8 p-8 rounded-xl shadow-lg">
      <div className="text-center">
        {/* <h2 className="mt-6 text-3xl font-bold ">Welcome back</h2>
        <p className="mt-2 text-sm primary-text-2">
          Sign in to your account
        </p> */}
        <h2 className="mt-6 text-3xl font-bold ">আবারও স্বাগতম!</h2>
        <p className="mt-2 text-sm primary-text-2">
          আপনার অ্যাকাউন্টে প্রবেশ করুন
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium primary-text-3  mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } placeholder-gray-500 primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm`}
              placeholder="you@example.com"
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
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
              className={`appearance-none relative block w-full px-3 py-2 border ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              } primary-text-1 placeholder:primary-text-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm`}
              placeholder="Enter password"
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
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
              isSubmitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors`}
          >
            {isSubmitting ? 'Signing in' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
