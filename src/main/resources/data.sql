-- AUTORES
INSERT INTO autor (nombre) VALUES ('Eiichiro Oda');
INSERT INTO autor (nombre) VALUES ('Masashi Kishimoto');
INSERT INTO autor (nombre) VALUES ('Tite Kubo');

-- MANGAS
INSERT INTO manga (titulo, descripcion, estado, autor_id)
VALUES ('One Piece',
'Un joven pirata busca el legendario tesoro One Piece.',
'EN_PUBLICACION', 1);

INSERT INTO manga (titulo, descripcion, estado, autor_id)
VALUES ('Naruto',
'Un ninja sueña con convertirse en Hokage.',
'FINALIZADO', 2);

INSERT INTO manga (titulo, descripcion, estado, autor_id)
VALUES ('Bleach',
'Un adolescente obtiene poderes de shinigami.',
'FINALIZADO', 3);

--CAPITULOS

INSERT INTO capitulo (id, titulo, numero, manga_id)
VALUES (1, 'Capítulo 1: Uzumaki Naruto', 1, 1);

INSERT INTO capitulo (id, titulo, numero, manga_id)
VALUES (2, 'Capítulo 2: Konohamaru', 2, 1);

INSERT INTO capitulo (id, titulo, numero, manga_id)
VALUES (3, 'Capítulo 3: Sasuke Uchiha', 3, 1);