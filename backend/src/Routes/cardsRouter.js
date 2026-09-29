import { Router } from 'express'

import {
  getPlanetas,
  getSistemas,
  getExplorar
} from '../controllers/cardsController.js'

const cardsRouter = Router()

cardsRouter.get('/planetas', getPlanetas)
cardsRouter.get('/sistemas', getSistemas)
cardsRouter.get('/explorar', getExplorar)

export default cardsRouter