import { useEffect, useMemo, useState } from 'react'

import { Button } from '../../components/common/Button'

type Attendance = 'marriage' | 'reception' | 'both' | 'unable'

type FormState = {
  name: string
  message: string
}

type RsvpRecord = {
  id: string
  name: string
  attendance: Attendance
  marriageGuests: number
  receptionGuests: number
  message: string
  createdAt: string
}

const ADMIN_ACCESS_CODE = '1793912'
const API_URL = (import.meta.env.VITE_API_URL || '/api/wishes').replace(/\/$/, '')

const initialState: FormState = {
  name: '',
  message: '',
}

export function RsvpForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [records, setRecords] = useState<RsvpRecord[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const isAdminView = useMemo(() => {
    if (typeof window === 'undefined') return false

    const params = new URLSearchParams(window.location.search)
    return params.get('admin') === ADMIN_ACCESS_CODE
  }, [])

  const fetchRecords = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Unable to load wishes')
      }

      const data = (await response.json()) as RsvpRecord[]
      setRecords(Array.isArray(data) ? data : [])
      setErrorMessage('')
    } catch {
      setRecords([])
      setErrorMessage('Unable to load the wish list right now.')
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  const filteredRecords = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return records
    }

    return records.filter((record) => {
      const combinedText = `${record.name} ${record.message}`.toLowerCase()
      return combinedText.includes(query)
    })
  }, [records, searchTerm])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          message: form.message.trim(),
        }),
      })

      const payload = (await response.json()) as { error?: string; record?: RsvpRecord }

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to save your wish')
      }

      if (payload.record) {
        setRecords((current) => [payload.record as RsvpRecord, ...current])
      }

      setSubmitted(true)
      setForm(initialState)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong while sending your wish.')
    }
  }

  if (isAdminView) {
    return (
      <div className="min-h-screen bg-[#f6efe8] p-4 sm:p-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6b42]">Guest wishes</div>
            <div className="flex w-full items-center gap-3 sm:max-w-xl">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name or wish"
                className="w-full rounded-2xl border border-[#eadbc2] bg-white px-4 py-2.5 text-sm text-[#342d29] placeholder:text-[#867568] focus:border-[#b8924b] focus:outline-none"
              />
              <button
                type="button"
                onClick={fetchRecords}
                className="rounded-2xl border border-[#ccb183] bg-[#f4e2b7] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#422e1d] transition hover:bg-[#ebd39e]"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-[linear-gradient(135deg,#f5e9d6_0%,#fffaf6_100%)] shadow-[0_24px_60px_-38px_rgba(60,43,28,0.6)]">
            <div className="overflow-x-auto">
              <table className="min-w-[620px] w-full text-left text-xs text-[#2d241f] sm:text-sm">
                <thead className="bg-[#f8f1e8] text-[0.62rem] uppercase tracking-[0.22em] text-[#7d6258]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Wish</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="px-4 py-6 text-center text-[#6c5b52]">
                        No matching wish found.
                      </td>
                    </tr>
                  ) : (
                    filteredRecords.map((record) => (
                      <tr key={record.id} className="border-t border-[#e9dcc8]">
                        <td className="px-4 py-3 font-medium text-[#221c1a]">{record.name}</td>
                        <td className="px-4 py-3 text-[#4c413b]">{record.message || '—'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-5xl space-y-5 rounded-[2rem] border border-[#e7d9c2] bg-white/80 p-6 shadow-[0_24px_60px_-32px_rgba(55,41,30,0.45)] backdrop-blur-sm sm:p-8">
        <div className="space-y-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#b8924b]">Send a wish</p>
          <h3 className="font-display text-3xl text-[#2b221d]">Your blessings mean the world to us</h3>
        </div>

        <div className="space-y-5">
          <label className="block text-sm font-medium text-[#433930]">
            Your name
            <input
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="mt-2 w-full rounded-2xl border border-[#eadbc2] bg-[#f8f3ee] px-4 py-3 text-base text-[#342d29] placeholder:text-[#867568] focus:border-[#b8924b] focus:outline-none"
              placeholder="Your name"
              required
            />
          </label>

          <label className="block text-sm font-medium text-[#433930]">
            Your wish
            <textarea
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              rows={5}
              className="mt-2 w-full rounded-2xl border border-[#eadbc2] bg-[#f8f3ee] px-4 py-3 text-base text-[#342d29] placeholder:text-[#867568] focus:border-[#b8924b] focus:outline-none"
              placeholder="Write your wishes for the couple"
              required
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" variant="primary" className="!tracking-[0.18em]">
            Send wish
          </Button>
          <p className="text-xs uppercase tracking-[0.18em] text-[#7c685f]">
            Saved to our guest list
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-[#d3e3d2] bg-[#eef7ed] px-4 py-3 text-sm text-[#2c5933]">
            Thank you. Your wish has been saved successfully.
          </div>
        ) : null}

        {errorMessage ? (
          <div className="rounded-2xl border border-[#f0d1c4] bg-[#fff1ee] px-4 py-3 text-sm text-[#8a4735]">
            {errorMessage}
          </div>
        ) : null}
      </form>
    </div>
  )
}
