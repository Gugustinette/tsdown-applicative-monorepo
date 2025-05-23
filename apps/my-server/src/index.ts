import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { generateRandomString } from '@mymonorepo/my-package'

const app = new Hono()
app.use('/api/*', cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/get-random-string', (c) => {
  return c.json({
    randomString: generateRandomString(10)
  })
})

serve({
  fetch: app.fetch,
  port: 9001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
