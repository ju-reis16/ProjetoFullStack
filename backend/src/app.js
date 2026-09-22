import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import profileRouter from './routes/profileRoute.js'
import authRouter from './routes/auth.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(express.json())

app.use('/api/profile', profileRouter)
app.use('/api/auth', authRouter)

app.use((error, _request, response, _next) => {
  console.error('Erro na API:', error.message)

  response
    .status(error.statusCode || 500)
    .json({
      error:
        error.statusCode === 404
          ? error.message
          : 'Não foi possível acessar o banco de dados.'
    })
})

const distPath = path.join(__dirname, '..', 'dist')

app.use(express.static(distPath))

app.use((_request, response) =>
  response.sendFile(path.join(distPath, 'index.html'))
)

export default app