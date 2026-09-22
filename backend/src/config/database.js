import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

export const profileTable = process.env.PROFILE_TABLE || 'usuarios'
export const profileId = Number(process.env.PROFILE_ID || 1)
export const profileIdColumn = process.env.PROFILE_ID_COLUMN || 'id_usuario'

if (!/^[a-z_][a-z0-9_]*$/i.test(profileTable)) {
  throw new Error('PROFILE_TABLE deve conter apenas letras, números e underscore.')
}

if (!/^[a-z_][a-z0-9_]*$/i.test(profileIdColumn)) {
  throw new Error('PROFILE_ID_COLUMN deve conter apenas letras, números e underscore.')
}

const database = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'astrologia',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD
})

database.on('error', (error) => {
  console.error('Erro inesperado na conexão com PostgreSQL:', error.message)
})

export default database