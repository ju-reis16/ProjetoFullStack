import pg from 'pg'

const { Pool } = pg

export const profileTable = 'usuarios'
export const profileId = 1
export const profileIdColumn = 'id_usuario'

if (!/^[a-z_][a-z0-9_]*$/i.test(profileTable)) {
  throw new Error('PROFILE_TABLE deve conter apenas letras, números e underscore.')
}

if (!/^[a-z_][a-z0-9_]*$/i.test(profileIdColumn)) {
  throw new Error('PROFILE_ID_COLUMN deve conter apenas letras, números e underscore.')
}

const database = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'astrologia',
  user: 'postgres',
  password: 'Senai'
})

database.on('error', (error) => {
  console.error('Erro inesperado na conexão com PostgreSQL:', error.message)
})

export default database