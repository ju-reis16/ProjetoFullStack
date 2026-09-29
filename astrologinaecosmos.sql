-- 1. USUÁRIOS


CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL DEFAULT 'usuario',
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_tipo_usuario
    CHECK (tipo_usuario IN ('usuario', 'admin'))
);

select * from usuarios
insert into usuarios (nome_completo, email, senha) values ('Comum', 'usuario@cosmosobservatory.com', '$2a$12$GhtGMDfeEsdqWuJamEY5YuUSEB6r.ufxNcgYcban3EILkFQ22yZUq')

ALTERAR_SENHA_NO_BACKEND
senha_admin

-- 2. TÓPICOS

CREATE TABLE topicos (
    id_topico SERIAL PRIMARY KEY,
    nome_topico VARCHAR(100) NOT NULL UNIQUE,
    ativo BOOLEAN DEFAULT TRUE
);


-- 3. CATEGORIAS

CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    id_topico INT NOT NULL,
    nome_categoria VARCHAR(100) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,

    CONSTRAINT fk_categoria_topico
    FOREIGN KEY (id_topico)
    REFERENCES topicos(id_topico)
    ON DELETE CASCADE,

    CONSTRAINT uq_categoria_topico
    UNIQUE (id_topico, nome_categoria)
);


-- 4. CARDS


CREATE TABLE cards (
    id_card SERIAL PRIMARY KEY,

    id_topico INT NOT NULL,

    id_categoria INT,

    titulo VARCHAR(150) NOT NULL,

    imagem_url TEXT NOT NULL,

    descricao TEXT NOT NULL,

    ativo BOOLEAN DEFAULT TRUE,

    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_card_topico
    FOREIGN KEY (id_topico)
    REFERENCES topicos(id_topico)
    ON DELETE CASCADE,

    CONSTRAINT fk_card_categoria
    FOREIGN KEY (id_categoria)
    REFERENCES categorias(id_categoria)
    ON DELETE SET NULL
);

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'topicos'
ORDER BY ordinal_position;


-- 5. TÓPICOS

INSERT INTO topicos (nome_topico)
VALUES
('Explorar'),
('Planetas'),
('Sistemas');

-- 6. CATEGORIAS - EXPLORAR


INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Exoplaneta'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Super-Terra'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Gigante Gasoso'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Gigante de Gelo'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Planeta Terrestre'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Galáxia'
FROM topicos
WHERE nome_topico = 'Explorar';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Nebulosa'
FROM topicos
WHERE nome_topico = 'Explorar';



-- 7. CATEGORIAS - PLANETAS

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Planeta Rochoso'
FROM topicos
WHERE nome_topico = 'Planetas';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Gigante Gasoso'
FROM topicos
WHERE nome_topico = 'Planetas';

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Gigante de Gelo'
FROM topicos
WHERE nome_topico = 'Planetas';


-- 8. CATEGORIA - SISTEMAS

INSERT INTO categorias (id_topico, nome_categoria)
SELECT id_topico, 'Sistema Estelar'
FROM topicos
WHERE nome_topico = 'Sistemas';


-- 9. USUÁRIO ADMINISTRADOR

INSERT INTO usuarios (
    nome_completo,
    email,
    senha,
    tipo_usuario
)
VALUES (
    'Administrador',
    'admin@cosmosobservatory.com',
    'ALTERAR_SENHA_NO_BACKEND',
    'admin'
);


-- 10. CARDS - EXPLORAR

-- 1. Kepler-452b

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Exoplaneta'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'Kepler-452b',

    'https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg',

    'Conhecido como o primo da Terra, Kepler-452b orbita uma estrela do tipo G2 na zona habitável.'
);


-- 2. HD 189733b

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Gigante Gasoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'HD 189733b',

    'https://upload.wikimedia.org/wikipedia/commons/8/80/Artist%E2%80%99s_impression_of_the_deep_blue_planet_HD_189733b.jpg',

    'Exoplaneta localizado fora do Sistema Solar e classificado como um gigante gasoso.'
);


-- 3. Proxima Centauri b

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Terrestre'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'Proxima Centauri b',

    'https://s2.glbimg.com/AwZbHRpIVjtalqmwR9_TksthVIw=/e.glbimg.com/og/ed/f/original/2016/09/12/proxima-b-habitable-zone-exoplanet-illustration-2x1-phl-upl.png',

    'Exoplaneta que orbita a estrela Proxima Centauri, localizada a cerca de 4,24 anos-luz da Terra.'
);


-- 4. TRAPPIST-1e

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Terrestre'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'TRAPPIST-1e',

    'https://upload.wikimedia.org/wikipedia/commons/5/5f/TRAPPIST-1e_Artist%27s_Impression.png',

    'Exoplaneta pertencente ao sistema TRAPPIST-1 e localizado a aproximadamente 39 anos-luz da Terra.'
);
-- 5. Nebulosa do Caranguejo

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Nebulosa'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'Nebulosa do Caranguejo',

    'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/960px-Crab_Nebula.jpg',

    'Nebulosa localizada na constelação de Touro, formada a partir dos restos de uma explosão estelar.'
);


-- 6. Galáxia de Andrômeda

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Galáxia'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'Galáxia de Andrômeda',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGT9ZXtsg9b8XoKD1WfNGx5xxXJHBXBQHzs1ewyZTNw&s=10',

    'A Galáxia de Andrômeda é uma galáxia espiral localizada próxima à Via Láctea.'
);


-- 7. 55 Cancri e

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Super-Terra'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    '55 Cancri e',

    'https://live-production.wcms.abc-cdn.net.au/517b569c883c94e18a8100c9136c337b?impolicy=wcms_crop_resize&cropH=438&cropW=659&xPos=7&yPos=0&width=862&height=575',

    'Exoplaneta classificado como uma super-Terra que orbita a estrela 55 Cancri.'
);


-- 8. GJ 1214b

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Explorar'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Super-Terra'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Explorar'
     )),

    'GJ 1214b',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1U22HINDUiy59EqSlo6CrKMLVBkANjmdaT0OB1dtcnSF777z-KovXg0&s=10',

    'Exoplaneta classificado como uma super-Terra e localizado a cerca de 48 anos-luz da Terra.'
);



-- 11. CARDS - PLANETAS

-- 1. Terra

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Rochoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Terra',

    ' https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg',

    'Terceiro planeta a partir do Sol e o único conhecido por possuir vida. Sua superfície possui grandes quantidades de água.'
);


-- 2. Marte

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Rochoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Marte',

    'https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS_Mars_true_color.jpg',

    'Conhecido como o Planeta Vermelho por causa do óxido de ferro presente em sua superfície. Possui montanhas, vales e antigas marcas de água.'
);


-- 3. Mercúrio

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Rochoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Mercúrio',

    'https://content.nationalgeographic.pt/medio/2024/02/27/el-planeta-mercurio-c7bafef8_00000000_241211114619_960x540.jpg
',

    'O menor planeta do Sistema Solar e o mais próximo do Sol. Possui uma superfície cheia de crateras.'
);

delete from cards
-- 4. Vênus

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Planeta Rochoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Vênus',

    'https://cdn.universoracionalista.org/wp-content/uploads/2021/06/nasa-venus.png',

    'Segundo planeta a partir do Sol e o planeta mais quente do Sistema Solar, com uma atmosfera extremamente densa.'
);


-- 5. Júpiter

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Gigante Gasoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Júpiter',

    'https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter_by_Cassini-Huygens.jpg',

    'É o maior planeta do Sistema Solar e possui uma atmosfera formada principalmente por hidrogênio e hélio.'
);


-- 6. Saturno

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Gigante Gasoso'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Saturno',

    'https://commons.wikimedia.org/wiki/Special:FilePath/Saturn_during_Equinox.jpg',

    'Segundo maior planeta do Sistema Solar, famoso por seu sistema de anéis formado principalmente por partículas de gelo e rocha.'
);


-- 7. Urano

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Gigante de Gelo'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Urano',

    'https://commons.wikimedia.org/wiki/Special:FilePath/Uranus2.jpg',

    'Gigante de gelo conhecido por sua rotação inclinada e sua coloração azul-esverdeada.'
);


-- 8. Netuno

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Planetas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Gigante de Gelo'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Planetas'
     )),

    'Netuno',

    'https://static.escolakids.uol.com.br/2026/02/planeta-netuno-um-dos-gigantes-gasosos-alem-do-planeta-mais-distante-do-sol.jpg',

    'É o planeta mais distante do Sol e possui uma atmosfera com ventos extremamente rápidos.'
);



-- 12. CARDS - SISTEMAS


-- 1. Alpha Centauri

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Sistemas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Sistema Estelar'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Sistemas'
     )),

    'Alpha Centauri',

    'https://img.odcdn.com.br/wp-content/uploads/2025/02/alfa-centauri-1920x1080.jpg',

    'Sistema estelar localizado próximo ao Sistema Solar e formado por estrelas ligadas gravitacionalmente.'
);


-- 2. Sistema Sirius

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Sistemas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Sistema Estelar'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Sistemas'
     )),

    'Sistema Sirius',

    'https://www.espacotempo.com.br/wp-content/uploads/2024/08/sirius-997x1280.jpg',

    'Sistema estelar conhecido principalmente pela estrela Sirius, uma das estrelas mais brilhantes observadas no céu noturno.'
);


-- 3. Sistema Procyon

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Sistemas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Sistema Estelar'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Sistemas'
     )),

    'Sistema Procyon',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoh7655OshAeuMuhhf2YAt4j3doaby7whpIviGUijDoHr39vWFzm7Z9Pq&s=10',

    'Sistema estelar localizado na constelação de Canis Minor e formado por duas estrelas que orbitam um centro de massa comum.'
);


-- 4. Epsilon Eridani

INSERT INTO cards (
    id_topico,
    id_categoria,
    titulo,
    imagem_url,
    descricao
)
VALUES (
    (SELECT id_topico FROM topicos WHERE nome_topico = 'Sistemas'),

    (SELECT id_categoria
     FROM categorias
     WHERE nome_categoria = 'Sistema Estelar'
     AND id_topico = (
         SELECT id_topico
         FROM topicos
         WHERE nome_topico = 'Sistemas'
     )),

    'Epsilon Eridani',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h08FLCLKDjTVNU6VHM7HCleMti77-59UWHl2VdLLjTb63mWAKdrfunk&s=10',

    'Sistema estelar relativamente próximo ao Sistema Solar, formado por uma estrela e um sistema planetário.'
);


-- 13. CONSULTAR TODOS OS CARDS

SELECT
    c.id_card,
    c.titulo,
    t.nome_topico AS topico,
    cat.nome_categoria AS categoria,
    c.imagem_url,
    c.descricao,
    c.ativo
FROM cards c
INNER JOIN topicos t
    ON c.id_topico = t.id_topico
LEFT JOIN categorias cat
    ON c.id_categoria = cat.id_categoria
ORDER BY
    t.id_topico,
    c.id_card;


-- 14. CONSULTAR CARDS DO EXPLORAR


SELECT
    c.id_card,
    c.titulo,
    cat.nome_categoria AS categoria,
    c.imagem_url,
    c.descricao
FROM cards c
INNER JOIN topicos t
    ON c.id_topico = t.id_topico
LEFT JOIN categorias cat
    ON c.id_categoria = cat.id_categoria
WHERE t.nome_topico = 'Explorar'
ORDER BY c.id_card;



-- 15. CONSULTAR CARDS DOS PLANETAS


SELECT
    c.id_card,
    c.titulo,
    cat.nome_categoria AS categoria,
    c.imagem_url,
    c.descricao
FROM cards c
INNER JOIN topicos t
    ON c.id_topico = t.id_topico
LEFT JOIN categorias cat
    ON c.id_categoria = cat.id_categoria
WHERE t.nome_topico = 'Planetas'
ORDER BY c.id_card;


-- 16. CONSULTAR CARDS DOS SISTEMAS

SELECT
    c.id_card,
    c.titulo,
    cat.nome_categoria AS categoria,
    c.imagem_url,
    c.descricao
FROM cards c
INNER JOIN topicos t
    ON c.id_topico = t.id_topico
LEFT JOIN categorias cat
    ON c.id_categoria = cat.id_categoria
WHERE t.nome_topico = 'Sistemas'
ORDER BY c.id_card;


-- 17. CONSULTAR CATEGORIAS POR TÓPICO

SELECT
    t.nome_topico AS topico,
    c.id_categoria,
    c.nome_categoria AS categoria
FROM categorias c
INNER JOIN topicos t
    ON c.id_topico = t.id_topico
ORDER BY
    t.id_topico,
    c.id_categoria;


-- 18. CONSULTAR USUÁRIOS

SELECT
    id_usuario,
    nome_completo,
    email,
    tipo_usuario,
    ativo,
    data_cadastro
FROM usuarios
ORDER BY id_usuario;