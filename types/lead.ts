// Database row type matching the Supabase table schema
export interface LeadFormData {
  id?: string
  created_at?: string
  name: string
  email: string
  phone?: string
  company: string
  message?: string
  industry?: string
  company_size?: string
  role?: string
  challenge?: string
  timeline?: string
  budget?: string
  business_type?: string
  team_size?: string
  admin_hours?: string
  form_type: 'original' | 'short' | 'multi-step' | 'super-quick'
  metadata?: Record<string, any>
}

// API response type
export interface LeadSubmissionResponse {
  success: boolean
  message: string
  data?: {
    id: string
  }
  error?: string
}
