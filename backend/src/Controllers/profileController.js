import { deleteProfile, findProfile, updateProfile } from '../models/profileModel.js'

export async function getProfile(_request, response, next) {
  try {
    response.json(await findProfile())
  } catch (error) {
    next(error)
  }
}

export async function saveProfile(request, response, next) {
  const { name, email, institution, specialty, bio } = request.body
  if (![name, email].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ error: 'Preencha todos os campos obrigatórios.' })
  }

  try {
    response.json(await updateProfile(request.body))
  } catch (error) {
    next(error)
  }
}

export async function removeProfile(_request, response, next) {
  try {
    await deleteProfile()
    response.status(204).end()
  } catch (error) {
    error.statusCode = error.statusCode || 500
    next(error)
  }
}
