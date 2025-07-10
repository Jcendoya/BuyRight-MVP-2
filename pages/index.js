import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 space-y-10">
      {/* Clean Title */}
      <h1 className="text-5xl font-extrabold text-center text-green-700 tracking-tight">
        BuyRight
      </h1>

      {/* Tagline */}
      <div className="text-center space-y-4 max-w-xl">
        <h2 className="text-3xl font-semibold">
          Know if it’s a good deal — in 60 seconds.
        </h2>
        <p className="text-lg text-gray-600">
          BuyRight helps you evaluate small business acquisitions instantly — no spreadsheets, no guesswork.
        </p>
        <Link
          href="/analyzer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Start Evaluating
        </Link>
      </div>

      {/* How It Works Section */}
      <div className="mt-12 max-w-xl text-left">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Enter revenue, profit, price, and owner salary.</li>
          <li>Get ROI, payback time, and our recommendation.</li>
          <li>Download a custom PDF summary with next steps.</li>
        </ol>
      </div>
    </div>
  );
}

