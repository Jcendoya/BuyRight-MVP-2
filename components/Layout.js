export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="bg-[#1E293B] text-white p-4 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="BuyRight" className="h-10" />
          <span className="text-xl font-semibold">BuyRight</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {children}
      </main>

      <footer className="bg-[#1E293B] text-white text-center p-4 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} BuyRight. All rights reserved.</p>
      </footer>
    </div>
  )
}
