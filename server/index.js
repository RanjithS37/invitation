import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 4000)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFilePath = path.join(__dirname, 'data', 'wishes.json')
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

app.use(cors())
app.use(express.json({ limit: '1mb' }))

function normalizeRecord(record) {
  const source = record ?? {}
  return {
    id: source.id ?? crypto.randomUUID(),
    name: String(source.name ?? '').trim(),
    attendance: source.attendance ?? 'both',
    marriageGuests: Number(source.marriage_guests ?? source.marriageGuests ?? 1),
    receptionGuests: Number(source.reception_guests ?? source.receptionGuests ?? 1),
    message: String(source.message ?? '').trim(),
    createdAt: source.created_at ?? source.createdAt ?? new Date().toISOString(),
  }
}

async function readWishes() {
  if (supabase) {
    const { data, error } = await supabase.from('wishes').select('*').order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase read error:', error)
      return []
    }

    return (data ?? []).map(normalizeRecord)
  }

  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8')
    const parsed = JSON.parse(fileContents)
    return Array.isArray(parsed) ? parsed.map(normalizeRecord) : []
  } catch {
    return []
  }
}

async function writeWishes(wishes) {
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
  await fs.writeFile(dataFilePath, JSON.stringify(wishes, null, 2))
}

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', storage: supabase ? 'supabase' : 'json' })
})

app.get('/api/wishes', async (_request, response) => {
  try {
    const wishes = await readWishes()
    response.json(wishes)
  } catch (error) {
    console.error('GET /api/wishes error:', error)
    response.status(500).json({ error: 'Unable to load wishes.' })
  }
})

app.post('/api/wishes', async (request, response) => {
  const { name, message } = request.body ?? {}
  const safeName = typeof name === 'string' ? name.trim() : ''
  const safeMessage = typeof message === 'string' ? message.trim() : ''

  if (!safeName || !safeMessage) {
    response.status(400).json({ error: 'Name and wish are required.' })
    return
  }

  const record = {
    id: crypto.randomUUID(),
    name: safeName,
    attendance: 'both',
    marriageGuests: 1,
    receptionGuests: 1,
    message: safeMessage,
    createdAt: new Date().toISOString(),
  }

  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('wishes')
        .insert({
          id: record.id,
          name: safeName,
          attendance: 'both',
          marriage_guests: 1,
          reception_guests: 1,
          message: safeMessage,
          created_at: record.createdAt,
        })
        .select('*')
        .single()

      if (error) {
        throw error
      }

      response.status(201).json({ message: 'Wish saved successfully.', record: normalizeRecord(data) })
      return
    }

    const wishes = await readWishes()
    const nextWishes = [record, ...wishes]
    await writeWishes(nextWishes)

    response.status(201).json({ message: 'Wish saved successfully.', record })
  } catch (error) {
    console.error('POST /api/wishes error:', error)
    response.status(500).json({ error: 'Unable to save your wish right now.' })
  }
})

app.listen(port, () => {
  console.log(`Invitation backend running at http://localhost:${port}`)
})
