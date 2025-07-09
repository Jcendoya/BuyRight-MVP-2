export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <img
        src="/logo.png"
        alt="BuyRight Logo"
        className="h-[200px] w-auto mb-10"
      />
      <h1 className="text-2xl md:text-3xl font-semibold text-black mb-6">
        Confidently buy your next business — the smart way.
      </h1>
      <a
        href="/analyzer"
        className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-8 rounded transition duration-200"
      >
        Get Started
      </a>
    </div>
  )
}
