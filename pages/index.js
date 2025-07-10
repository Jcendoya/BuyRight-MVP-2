import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10 max-w-3xl mx-auto text-center space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Know if it’s a good deal — in 60 seconds.</h1>
      <p className="text-lg text-gray-600">
        BuyRight helps you evaluate small business acquisitions instantly — no spreadsheets, no guesswork.
      </p>

      <Link href="/analyzer">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg">
          Start Evaluating
        </button>
      </Link>

      <div className="mt-12 text-left space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Enter revenue, profit, price, and owner salary.</li>
          <li>Get ROI, payback time, and our recommendation.</li>
          <li>Download a custom PDF summary with next steps.</li>
        </ol>
      </div>
    </div>
  )
}

