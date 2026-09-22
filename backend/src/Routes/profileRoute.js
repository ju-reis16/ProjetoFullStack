import { Router } from 'express'
import { getProfile, removeProfile, saveProfile } from '../Controllers/profileController.js'

const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.put('/', saveProfile)
profileRouter.delete('/', removeProfile)

export default profileRouter