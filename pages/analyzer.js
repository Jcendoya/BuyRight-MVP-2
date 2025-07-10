import { useState } from 'react'
import jsPDF from 'jspdf'

export default function Analyzer() {
  const [revenue, setRevenue] = useState('')
  const [profit, setProfit] = useState('')
  const [price, setPrice] = useState('')
  const [salary, setSalary] = useState('')
  const [result, setResult] = useState(null)

  const evaluate = () => {
    const r = parseFloat(revenue)
    const p = parseFloat(profit)
    const pr = parseFloat(price)
    const s = parseFloat(salary)
    const sde = p + s
    const roi = sde / pr
    const payback = pr / sde
    let rec = 'Wait'
    if (roi > 0.4) rec = 'Strong Buy'
    else if (roi > 0.25) rec = 'Buy'
    else if (roi < 0.15) rec = 'Run'
    setResult({ roi, payback, rec, sde })
  }

  const download = () => {
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Business Deal Summary', 20, 20)
    doc.setFontSize(12)
    doc.text(`ROI: ${(result.roi * 100).toFixed(1)}%`, 20, 35)
    doc.text(`Payback: ${result.payback.toFixed(1)} years`, 20, 45)
    doc.text(`SDE: $${result.sde.toLocaleString()}`, 20, 55)
    doc.text(`Recommendation: ${result.rec}`, 20, 65)
    doc.save("deal-summary.pdf")
  }

  return (
    <div className="p-10 max-w-xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold text-center">Business Deal Analyzer</h2>
      <p className="text-gray-600 text-center">Quickly assess ROI, payback period, and more.</p>

      <input className="border p-2 w-full rounded" placeholder="Revenue ($)" onChange={e => setRevenue(e.target.value)} />
      <input className="border p-2 w-full rounded" placeholder="Profit ($)" onChange={e => setProfit(e.target.value)} />
      <input className="border p-2 w-full rounded" placeholder="Asking Price ($)" onChange={e => setPrice(e.target.value)} />
      <input className="border p-2 w-full rounded" placeholder="Owner Salary ($)" onChange={e => setSalary(e.target.value)} />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full" onClick={evaluate}>
        Analyze Deal
      </button>

      {result && (
        <div className="bg-green-50 p-4 rounded mt-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Your Results</h3>
          <p><strong>ROI:</strong> {(result.roi * 100).toFixed(1)}%</p>
          <p><strong>Payback Period:</strong> {result.payback.toFixed(1)} years</p>
          <p><strong>SDE:</strong> ${result.sde.toLocaleString()}</p>
          <p><strong>Recommendation:</strong> {result.rec}</p>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" onClick={download}>
            Download Summary (PDF)
          </button>
        </div>
      )}
    </div>
  )
}
