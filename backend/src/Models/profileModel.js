import database, { profileId, profileIdColumn, profileTable } from '../Config/database.js'

function serialize(profile) {
  return {
    ...profile,
    systemAlerts: Boolean(profile.system_alerts),
    scienceUpdates: Boolean(profile.science_updates),
    unitSystem: profile.unit_system,
  }
}

export async function findProfile() {
  const result = await database.query(`
    SELECT id_usuario AS id, nome_completo AS name, email,
      '' AS institution, '' AS specialty, '' AS bio,
      false AS system_alerts, false AS science_updates, 'metric' AS unit_system
    FROM ${profileTable} WHERE ${profileIdColumn} = $1
  `, [profileId])
  if (!result.rows[0]) {
    const error = new Error(`Perfil não encontrado na tabela ${profileTable} para o id ${profileId}.`)
    error.statusCode = 404
    throw error
  }
  return serialize(result.rows[0])
}

export async function updateProfile(profile) {
  await database.query(`
    UPDATE ${profileTable} SET nome_completo = $1, email = $2
    WHERE ${profileIdColumn} = $3
  `, [
    profile.name.trim(),
    profile.email.trim(),
    profileId,
  ])

  return findProfile()
}

export async function deleteProfile() {
  const result = await database.query(
    `DELETE FROM ${profileTable} WHERE ${profileIdColumn} = $1 RETURNING *`,
    [profileId],
  )

  if (!result.rows[0]) {
    const error = new Error(`Registro não encontrado na tabela ${profileTable} para o id ${profileId}.`)
    error.statusCode = 404
    throw error
  }

  return result.rows[0]
}
