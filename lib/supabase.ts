
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yorozktupxmhrhueagjy.supabase.co'
const supabaseAnonKey = 'sb_publishable_NTF_-9abRdn2z9s2TlpJmA_ISfMUf_-'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
