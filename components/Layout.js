export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="bg-[#1E293B] text-white p-6 shadow">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <img src="/logo.png" alt="BuyRight Logo" className="h-20 mb-2" />
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
