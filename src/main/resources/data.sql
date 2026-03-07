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