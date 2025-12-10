import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para la base de datos
export type Contact = {
    id: string
    created_at: string
    name: string
    email: string
    phone: string | null
    services: string
    message: string | null
    status: 'unread' | 'read' | 'replied'
    language: 'es' | 'en' | 'fr'
}

export type ContactInsert = Omit<Contact, 'id' | 'created_at' | 'status'>