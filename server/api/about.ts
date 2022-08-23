import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const supabase = serverSupabaseClient(event)

  const data = await supabase.from('about').select().eq('id', 1)
  
  if (!data.body) {
    sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthenticated' }))
  }
  return data.data
})
