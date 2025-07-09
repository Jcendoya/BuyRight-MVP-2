import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
      <img src="/logo.png" alt="BuyRight Logo" className="h-16 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to BuyRight</h1>
      <p className="text-lg text-gray-700 mb-6">
        Analyze small business deals quickly and confidently.
      </p>
      <Link href="/analyzer">
        <span className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 cursor-pointer">
          Start Deal Analyzer
        </span>
      </Link>
    </div>
  )
}
