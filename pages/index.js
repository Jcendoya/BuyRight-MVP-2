import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10 text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to BuyRight</h1>
      <p className="text-gray-600">Quickly evaluate if a small business is worth buying.</p>
      <Link href="/analyzer" className="text-blue-500 underline">Start Deal Analyzer</Link>
    </div>
  )
}