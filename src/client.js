import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ndjmfbojnyrezfaxglrb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kam1mYm9qbnlyZXpmYXhnbHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyOTg0MTYsImV4cCI6MjAzNzg3NDQxNn0.QV0cVWkgNjLd5o1pdViMf9l65epWJwq9n3JXf2Te6Vw'
export const supabase = createClient(supabaseUrl, supabaseKey)