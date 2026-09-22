import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import database from '../config/database.js'

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET || 'chave-local-de-desenvolvimento'

function criarToken(usuario) {
  return jwt.sign(
    {
      sub: usuario.id_usuario,
      nome: usuario.nome_completo,
      email: usuario.email,
      tipo: usuario.tipo_usuario
    },
    JWT_SECRET,
    {
      expiresIn: '1h'
    }
  )
}

function usuarioPublico(usuario) {
  return {
    id: usuario.id_usuario,
    nome: usuario.nome_completo,
    email: usuario.email,
    tipo: usuario.tipo_usuario,
    ativo: usuario.ativo
  }
}

router.post('/cadastro', async (req, res, next) => {
  try {
    const { nome, email, senha } = req.body

    const nomeNormalizado = String(nome || '').trim()
    const emailNormalizado = String(email || '').trim().toLowerCase()

    if (!nomeNormalizado || !emailNormalizado || !senha) {
      return res.status(400).json({
        error: 'Nome, e-mail e senha são obrigatórios.'
      })
    }

    if (senha.length < 6) {
      return res.status(400).json({
        error: 'A senha deve ter no mínimo 6 caracteres.'
      })
    }

    const existente = await database.query(
      'SELECT id_usuario FROM usuarios WHERE email = $1',
      [emailNormalizado]
    )

    if (existente.rows.length > 0) {
      return res.status(409).json({
        error: 'Este e-mail já está cadastrado.'
      })
    }

    const senhaHash = await bcrypt.hash(senha, 12)

    const resultado = await database.query(
      `INSERT INTO usuarios
        (nome_completo, email, senha, tipo_usuario)
       VALUES ($1, $2, $3, 'usuario')
       RETURNING id_usuario, nome_completo, email, tipo_usuario, ativo`,
      [
        nomeNormalizado,
        emailNormalizado,
        senhaHash
      ]
    )

    const usuario = resultado.rows[0]

    res.status(201).json({
      token: criarToken(usuario),
      usuario: usuarioPublico(usuario)
    })
  } catch (error) {
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const { email, senha } = req.body

    const emailNormalizado = String(email || '').trim().toLowerCase()

    const resultado = await database.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [emailNormalizado]
    )

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        error: 'Esta conta não existe. Cadastre-se para continuar.'
      })
    }

    const usuario = resultado.rows[0]

    if (!usuario.ativo) {
      return res.status(403).json({
        error: 'Esta conta está desativada.'
      })
    }

    const senhaValida = await bcrypt.compare(
      senha || '',
      usuario.senha
    )

    if (!senhaValida) {
      return res.status(401).json({
        error: 'Senha incorreta. Tente novamente.'
      })
    }

    res.json({
      token: criarToken(usuario),
      usuario: usuarioPublico(usuario)
    })
  } catch (error) {
    next(error)
  }
})

router.get('/me', async (req, res, next) => {
  try {
    const cabecalho = req.headers.authorization || ''
    const [tipo, token] = cabecalho.split(' ')

    if (tipo !== 'Bearer' || !token) {
      return res.status(401).json({
        error: 'Token ausente.'
      })
    }

    const dadosToken = jwt.verify(token, JWT_SECRET)

    const resultado = await database.query(
      `SELECT
        id_usuario,
        nome_completo,
        email,
        tipo_usuario,
        ativo
       FROM usuarios
       WHERE id_usuario = $1`,
      [dadosToken.sub]
    )

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        error: 'Usuário não encontrado.'
      })
    }

    res.json({
      usuario: usuarioPublico(resultado.rows[0])
    })
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    ) {
      return res.status(401).json({
        error: 'Token inválido ou expirado.'
      })
    }

    next(error)
  }
})

export default router