-- AUTORES
INSERT INTO autor (nombre) VALUES ('Eiichiro Oda');
INSERT INTO autor (nombre) VALUES ('Masashi Kishimoto');
INSERT INTO autor (nombre) VALUES ('Tite Kubo');

-- MANGAS
INSERT INTO manga (titulo, descripcion, estado, autor_id, imagen_url)
VALUES 
('One Piece',
 'Un joven pirata busca el legendario tesoro One Piece.',
 'EN_PUBLICACION', 1,
 'https://cdn.myanimelist.net/images/manga/2/253146.jpg'),

('Naruto',
 'Un ninja sueña con convertirse en Hokage.',
 'FINALIZADO', 2,
 'https://cdn.myanimelist.net/images/manga/1/194207.jpg'),

('Bleach',
 'Un adolescente obtiene poderes de shinigami.',
 'FINALIZADO', 3,
 'https://cdn.myanimelist.net/images/manga/3/253147.jpg');

-- CAPITULOS

INSERT INTO capitulo (titulo, numero_capitulo, manga_id)
VALUES 
('Capítulo 1: Romance Dawn', 1, 1),
('Capítulo 2: El chico del sombrero de paja', 2, 1),
('Capítulo 3: Zoro el cazador de piratas', 3, 1);

INSERT INTO capitulo (titulo, numero_capitulo, manga_id)
VALUES 
('Capítulo 1: Uzumaki Naruto', 1, 2),
('Capítulo 2: Konohamaru', 2, 2),
('Capítulo 3: Sasuke Uchiha', 3, 2);

INSERT INTO capitulo (titulo, numero_capitulo, manga_id)
VALUES 
('Capítulo 1: Ichigo Kurosaki', 1, 3),
('Capítulo 2: Shinigami sustituto', 2, 3),
('Capítulo 3: Rukia Kuchiki', 3, 3);