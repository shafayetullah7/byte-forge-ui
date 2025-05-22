import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Welcome to the App</h1>
      <ThemeToggle />
    </div>
  );
}
