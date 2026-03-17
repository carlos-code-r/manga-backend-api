-- AUTORES
INSERT INTO autor (nombre, nacionalidad, fecha_nacimiento, autobiografia) VALUES
('Eiichiro Oda', 'Japonesa', '1975-01-01', 'Creador de One Piece.'),
('Masashi Kishimoto', 'Japonesa', '1974-11-08', 'Creador de Naruto.'),
('Tite Kubo', 'Japonesa', '1977-06-26', 'Creador de Bleach.');

-- MANGAS
INSERT INTO manga (titulo, descripcion, estado, autor_id, imagen_url, fecha_publicacion)
VALUES 
('One Piece',
 'Un joven pirata busca el legendario tesoro One Piece.',
 'EN_PUBLICACION', 1,
 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
 '1997-07-22'),

('Naruto',
 'Un ninja sueña con convertirse en Hokage.',
 'FINALIZADO', 2,
 'https://cdn.myanimelist.net/images/manga/3/249658.jpg',
 '1999-09-21'),

('Bleach',
 'Un adolescente obtiene poderes de shinigami.',
 'FINALIZADO', 3,
 'https://cdn.myanimelist.net/images/manga/1/259070.jpg',
 '2001-08-07');

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