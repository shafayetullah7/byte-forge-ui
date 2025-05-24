import AuthNav from './components/AuthNav';

export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="w-full h-screen flex justify-center items-center py-2">
      <div className="w-full max-h-full scroll-auto max-w-lg border border-[var(--primary)] rounded-xl overflow-hidden">
        <AuthNav locale={params.locale} />
        {children}
      </div>
    </div>
  );
}
