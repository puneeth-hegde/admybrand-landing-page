export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Sorry, the page you are looking for doesn't exist.</p>
      <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Go Back Home
      </a>
    </div>
  );
}
