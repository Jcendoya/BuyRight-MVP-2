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
    doc.text('Business Summary', 20, 20)
    doc.text(`ROI: ${(result.roi * 100).toFixed(1)}%`, 20, 30)
    doc.text(`Payback: ${result.payback.toFixed(1)} years`, 20, 40)
    doc.text(`SDE: $${result.sde.toFixed(0)}`, 20, 50)
    doc.text(`Recommendation: ${result.rec}`, 20, 60)
    doc.save("deal.pdf")
  }

  return (
    <div className="p-10 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Business Deal Analyzer</h2>
      <input className="border p-2 w-full" placeholder="Revenue" onChange={e => setRevenue(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Profit" onChange={e => setProfit(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Asking Price" onChange={e => setPrice(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Owner Salary" onChange={e => setSalary(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={evaluate}>Analyze</button>

      {result && (
        <div className="bg-gray-100 p-4 rounded mt-4 space-y-2">
          <p><strong>ROI:</strong> {(result.roi * 100).toFixed(1)}%</p>
          <p><strong>Payback:</strong> {result.payback.toFixed(1)} years</p>
          <p><strong>SDE:</strong> ${result.sde.toFixed(0)}</p>
          <p><strong>Recommendation:</strong> {result.rec}</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2" onClick={download}>Download PDF</button>
        </div>
      )}
    </div>
  )
}