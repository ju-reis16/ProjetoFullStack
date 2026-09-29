import database from '../config/database.js'

export async function getPlanetas(_request, response, next) {
  try {
    const result = await database.query(`
      SELECT
        c.id_card,
        c.titulo,
        c.imagem_url,
        c.descricao
      FROM cards c
      INNER JOIN topicos t
        ON c.id_topico = t.id_topico
      WHERE t.nome_topico = 'Planetas'
        AND c.ativo = TRUE
      ORDER BY c.id_card
    `)

    response.json(result.rows)
  } catch (error) {
    next(error)
  }
}

export async function getSistemas(_request, response, next) {
  try {
    const result = await database.query(`
      SELECT
        c.id_card,
        c.titulo,
        c.imagem_url,
        c.descricao
      FROM cards c
      INNER JOIN topicos t
        ON c.id_topico = t.id_topico
      WHERE t.nome_topico = 'Sistemas'
        AND c.ativo = TRUE
      ORDER BY c.id_card
    `)

    response.json(result.rows)
  } catch (error) {
    next(error)
  }
}

export async function getExplorar(_request, response, next) {
  try {
    const result = await database.query(`
      SELECT
        c.id_card,
        c.titulo,
        c.imagem_url,
        c.descricao,
        cat.nome_categoria AS categoria
      FROM cards c
      INNER JOIN topicos t
        ON c.id_topico = t.id_topico
      LEFT JOIN categorias cat
        ON c.id_categoria = cat.id_categoria
      WHERE t.nome_topico = 'Explorar'
        AND c.ativo = TRUE
      ORDER BY c.id_card
    `)

    response.json(result.rows)
  } catch (error) {
    next(error)
  }
}