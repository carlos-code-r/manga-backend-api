-- AUTORES (Ajustados para que coincidan con tus 20 mangas)
INSERT INTO autor (nombre, nacionalidad, fecha_nacimiento, autobiografia) VALUES
('Eiichiro Oda', 'Japonesa', '1975-01-01', 'Creador de One Piece.'),
('Masashi Kishimoto', 'Japonesa', '1974-11-08', 'Creador de Naruto.'),
('Tite Kubo', 'Japonesa', '1977-06-26', 'Creador de Bleach.'),
('Hiro Mashima', 'Japonesa', '1977-06-26', 'Creador de Fairy Tail.'),
('Hajime Isayama', 'Japonesa', '1977-06-26', 'Creador de Attack on Titan.'),
('Gege Akutami', 'Japonesa', '1977-06-26', 'Creador de Jujutsu Kaisen.'),
('Kentaru Miura', 'Japonesa', '1977-06-26', 'Creador de Berserk.'),
('Yoshihiro Togashi', 'Japonesa', '1977-06-26', 'Creador de Hunter x Hunter.'),
('Hiromu Arakawa', 'Japonesa', '1977-06-26', 'Creador de Fullmetal Alchemist.'),
('Hisashi Sugiura', 'Japonesa', '1977-06-26', 'Creador de Death Note.'),
('Akira Toriyama', 'Japonesa', '1977-06-26', 'Creador de Dragon Ball.'),
('Makoto Yukimura', 'Japonesa', '1977-06-26', 'Creador de Vinland Saga.'),
('Naoki Urasawa', 'Japonesa', '1977-06-26', 'Creador de Monster.'),
('Sui Ishida', 'Japonesa', '1977-06-26', 'Creador de Tokyo Ghoul.'),
('Kohei Horikawa', 'Japonesa', '1977-06-26', 'Creador de Boku no Hero Academia.'),
('Hiro Mashima ', 'Japonesa', '1977-06-26', 'Creador de Edens Zero.'),
('Yuki Tabata', 'Japonesa', '1977-06-26', 'Creador de Black Clover.'),
('Jun Mochizuki', 'Japonesa', '1977-06-26', 'Creador de Pandora Hearts.'),
('Katsura Hoshino', 'Japonesa', '1977-06-26', 'Creador de DGray-man.'),
('Shinobu Ohtaka', 'Japonesa', '1977-06-26', 'Creador de Magi.');

-- MANGAS (CON TUS URLS DEL HTML)
INSERT INTO manga (titulo, descripcion, estado, autor_id, imagen_url, fecha_publicacion, total_capitulos)
VALUES 
('One Piece', 'Riqueza, fama y poder: el Rey de los Piratas lo dejó todo en un solo lugar. Acompaña a Luffy en un viaje frenético a través de mares imposibles para reclamar el trono..', 'EN_PUBLICACION', 1, 'https://cdn.myanimelist.net/images/manga/2/253146.jpg', '1997-07-22',1100),
('Naruto', 'narra la historia de Naruto Uzumaki, un ninja adolescente huérfano de la Aldea Oculta de la Hoja (Konoha) que alberga en su interior al temido Zorro de Nueve Colas. Despreciado inicialmente, sueña con convertirse en Hokage.', 'FINALIZADO', 2, 'https://cdn.myanimelist.net/images/manga/3/249658.jpg', '1999-09-21', 600),
('Bleach', 'Bleach sigue a Ichigo Kurosaki, un adolescente con la habilidad de ver fantasmas, quien se convierte en un "Shinigami Sustituto" tras absorber los poderes de Rukia Kuchiki. Ichigo debe proteger a los humanos de espíritus malignos llamados "Hollows" y guiar las almas al más allá.', 'FINALIZADO', 3, 'https://myanimelist.net/images/manga/1/161558.jpg', '2001-08-07', 400),
('Fairy Tail', 'Fairy Tail sigue la historia de Natsu Dragneel, un joven mago que pertenece a la guilda Fairy Tail. Juntos con sus compañeros, Natsu se enfrenta a diversos desafíos y enemigos mientras busca a su hermano adoptivo, Gray Fullbuster.', 'FINALIZADO', 4, 'https://www.salvat.com/34675-home_default/fairy-tail-n-22.jpg', '2006-08-07', 500),
('Attack on Titan', 'Attack on Titan sigue la historia de Eren Yeager, un joven que vive en un mundo donde la humanidad está al borde de la extinción debido a la existencia de gigantes. Eren y sus compañeros luchan para sobrevivir y descubrir la verdad sobre su mundo.', 'EN_PUBLICACION', 5, 'https://cdn.myanimelist.net/images/manga/2/37846.jpg', '2009-09-12', 800),
('Jujutsu Kaisen', 'Jujutsu Kaisen sigue la historia de Yuji Itadori, un estudiante de secundaria que se ve envuelto en el mundo de los hechizos después de tocar un talismán maldito.', 'EN_PUBLICACION', 6, 'https://myanimelist.net/images/manga/3/210341.jpg', '2018-09-12', 300),
('Berserk', 'Berserk sigue la historia de Guts, un guerrero que lucha contra fuerzas sobrenaturales y demonios en un mundo oscuro y brutal.', 'FINALIZADO', 7, 'https://myanimelist.net/images/manga/1/157897.jpg', '1989-08-07', 400),
('Hunter x Hunter', 'Hunter x Hunter sigue la historia de Gon Freecss, un joven que desea convertirse en un Hunter para encontrar a su padre perdido.', 'FINALIZADO', 8, 'https://myanimelist.net/images/manga/2/253119.jpg', '1998-01-07', 600),
('Fullmetal Alchemist', 'Fullmetal Alchemist sigue la historia de los hermanos Elric, quienes buscan encontrar la piedra filosofal para recuperar sus cuerpos después de un experimento fallido.', 'FINALIZADO', 9, 'https://myanimelist.net/images/manga/3/243675.jpg', '2001-08-07', 400),
('Death Note', 'Death Note sigue la historia de Light Yagami, un estudiante que encuentra un cuaderno misterioso que le permite matar a cualquier persona cuyo nombre escriba en él.', 'FINALIZADO', 10, 'https://myanimelist.net/images/manga/1/258245.jpg', '2003-08-07', 600),
('Dragon Ball', 'Dragon Ball sigue la historia de Goku, un joven guerrero que vive en un mundo donde las fuerzas sobrenaturales son comunes.', 'FINALIZADO', 11, 'https://myanimelist.net/images/manga/1/267793.jpg', '1984-08-07', 400),
('Vinland Saga', 'Vinland Saga sigue la historia de Thorfinn, un joven que busca vengar la muerte de su padre en un mundo de guerras y conflictos.', 'FINALIZADO', 12, 'https://myanimelist.net/images/manga/2/188925.jpg', '2008-08-07', 500),
('Monster', 'Monster sigue la historia de Juri Goto, un joven que se ve envuelto en un mundo de crímenes y secretos oscuros.', 'FINALIZADO', 13, 'https://myanimelist.net/images/manga/3/258224.jpg', '2004-08-07', 400),
('Tokyo Ghoul', 'Tokyo Ghoul sigue la historia de Kaneki, un joven que se convierte en un ghoul después de ser atacado por uno.', 'FINALIZADO', 14, 'https://myanimelist.net/images/manga/3/194456.jpg', '2011-08-07', 500),
('Boku no Hero Academia', 'Boku no Hero Academia sigue la historia de Izuku Midoriya, un joven que desea convertirse en un hero después de ser rechazado por su ídolo.', 'FINALIZADO', 15, 'https://myanimelist.net/images/manga/1/209370.jpg', '2014-08-07', 656),
('Edens Zero', 'Edens Zero sigue la historia de Shiki, un joven que vive en un mundo donde las fuerzas sobrenaturales son comunes.', 'EN_PUBLICACION', 16, 'https://myanimelist.net/images/manga/3/282487.jpg', '2018-08-07', 200),
('Black Clover', 'Black Clover sigue la historia de Asta, un joven que desea convertirse en un mago después de ser rechazado por su ídolo.', 'FINALIZADO', 17, 'https://myanimelist.net/images/manga/2/166254.jpg', '2015-08-07', 500),
('Pandora Hearts', 'Pandora Hearts sigue la historia de un joven que vive en un mundo donde las fuerzas sobrenaturales son comunes.', 'FINALIZADO', 18, 'https://myanimelist.net/images/manga/2/169004.jpg', '2006-08-07', 400),
('DGray-man', 'DGray-man sigue la historia de un joven que vive en un mundo donde las fuerzas sobrenaturales son comunes.', 'FINALIZADO', 19, 'https://myanimelist.net/images/manga/3/240470.jpg', '2004-08-07', 400),
('Magi', 'Magi sigue la historia de un joven que vive en un mundo donde las fuerzas sobrenaturales son comunes.', 'FINALIZADO', 20, 'https://myanimelist.net/images/manga/3/282487.jpg', '2010-08-07', 400);

-- CAPITULOS (10 por cada manga)
INSERT INTO capitulo (titulo, numero_capitulo, manga_id) VALUES 
-- Manga 1: One Piece
('Capítulo 1: Romance Dawn', 1, 1), ('Capítulo 2: El chico del sombrero de paja', 2, 1), ('Capítulo 3: Zoro el cazador de piratas', 3, 1), ('Capítulo 4: El Capitán Morgan', 4, 1), ('Capítulo 5: El Rey de los Piratas', 5, 1), ('Capítulo 6: La primera tripulación', 6, 1), ('Capítulo 7: Buggy el payaso', 7, 1), ('Capítulo 8: La chica ladrona', 8, 1), ('Capítulo 9: El demonio del mar', 9, 1), ('Capítulo 10: La promesa', 10, 1),
-- Manga 2: Naruto
('Capítulo 1: Uzumaki Naruto', 1, 2), ('Capítulo 2: Konohamaru', 2, 2), ('Capítulo 3: Sasuke Uchiha', 3, 2), ('Capítulo 4: Kakashi Hatake', 4, 2), ('Capítulo 5: El examen Genin', 5, 2), ('Capítulo 6: El Equipo 7', 6, 2), ('Capítulo 7: La primera misión', 7, 2), ('Capítulo 8: Camino a la Ola', 8, 2), ('Capítulo 9: Encuentro con Zabuza', 9, 2), ('Capítulo 10: El poder del Sharingan', 10, 2),
-- Manga 3: Bleach
('Capítulo 1: Ichigo Kurosaki', 1, 3), ('Capítulo 2: Shinigami sustituto', 2, 3), ('Capítulo 3: Rukia Kuchiki', 3, 3), ('Capítulo 4: El Hollow devorador', 4, 3), ('Capítulo 5: La Soul Society', 5, 3), ('Capítulo 6: Chad y Orihime', 6, 3), ('Capítulo 7: Uryu Ishida', 7, 3), ('Capítulo 8: Quincy vs Shinigami', 8, 3), ('Capítulo 9: El despertar de Zangetsu', 9, 3), ('Capítulo 10: Batalla en la ciudad', 10, 3),
-- Manga 4: Fairy Tail
('Capítulo 1: El Mago del Fuego', 1, 4), ('Capítulo 2: Lucy Heartfilia', 2, 4), ('Capítulo 3: La llegada a Magnolia', 3, 4), ('Capítulo 4: Happy el Exceed', 4, 4), ('Capítulo 5: Misión de rango S', 5, 4), ('Capítulo 6: Erza Scarlet', 6, 4), ('Capítulo 7: Gray Fullbuster', 7, 4), ('Capítulo 8: El gremio oscuro', 8, 4), ('Capítulo 9: Magia prohibida', 9, 4), ('Capítulo 10: Lucha en la isla', 10, 4),
-- Manga 5: Attack on Titan
('Capítulo 1: La caída de Shiganshina', 1, 5), ('Capítulo 2: El Titán Colosal', 2, 5), ('Capítulo 3: Mikasa y Armin', 3, 5), ('Capítulo 4: El Cuerpo de Exploración', 4, 5), ('Capítulo 5: Entrenamiento militar', 5, 5), ('Capítulo 6: El regreso de los Gigantes', 6, 5), ('Capítulo 7: El misterio del sótano', 7, 5), ('Capítulo 8: Levi Ackerman', 8, 5), ('Capítulo 9: La muralla rota', 9, 5), ('Capítulo 10: El despertar de Eren', 10, 5),
-- Manga 6: Jujutsu Kaisen
('Capítulo 1: El dedo de Sukuna', 1, 6), ('Capítulo 2: Academia de Hechicería', 2, 6), ('Capítulo 3: Satoru Gojo', 3, 6), ('Capítulo 4: Megumi Fushiguro', 4, 6), ('Capítulo 5: Maldición de grado especial', 5, 6), ('Capítulo 6: Expansión de Dominio', 6, 6), ('Capítulo 7: Nobara Kugisaki', 7, 6), ('Capítulo 8: El ritual maldito', 8, 6), ('Capítulo 9: Entrenamiento físico', 9, 6), ('Capítulo 10: Encuentro con Mahito', 10, 6),
-- Manga 7: Berserk
('Capítulo 1: El Guerrero Negro', 1, 7), ('Capítulo 2: Guts y Griffith', 2, 7), ('Capítulo 3: La Banda del Halcón', 3, 7), ('Capítulo 4: La Edad de Oro', 4, 7), ('Capítulo 5: Casca la comandante', 5, 7), ('Capítulo 6: El Behelit', 6, 7), ('Capítulo 7: Zodd el Inmortal', 7, 7), ('Capítulo 8: Mercenarios en guerra', 8, 7), ('Capítulo 9: El eclipse se acerca', 9, 7), ('Capítulo 10: Sangre y acero', 10, 7),
-- Manga 8: Hunter x Hunter
('Capítulo 1: Gon y la Isla Ballena', 1, 8), ('Capítulo 2: El examen Hunter', 2, 8), ('Capítulo 3: Killua Zoldyck', 3, 8), ('Capítulo 4: Leorio y Kurapika', 4, 8), ('Capítulo 5: Hisoka el mago', 5, 8), ('Capítulo 6: La fase final', 6, 8), ('Capítulo 7: Entrenamiento de Nen', 7, 8), ('Capítulo 8: La Torre del Cielo', 8, 8), ('Capítulo 9: El Clan Kurta', 9, 8), ('Capítulo 10: La búsqueda de Ging', 10, 8),
-- Manga 9: Fullmetal Alchemist
('Capítulo 1: Los hermanos Elric', 1, 9), ('Capítulo 2: El pecado original', 2, 9), ('Capítulo 3: Roy Mustang', 3, 9), ('Capítulo 4: Alquimia estatal', 4, 9), ('Capítulo 5: La Piedra Filosofal', 5, 9), ('Capítulo 6: Scar el vengador', 6, 9), ('Capítulo 7: Los Homúnculos', 7, 9), ('Capítulo 8: Central City', 9, 9), ('Capítulo 9: El portal de la verdad', 9, 9), ('Capítulo 10: Equivalencia intercambio', 10, 9),
-- Manga 10: Death Note
('Capítulo 1: El cuaderno de la muerte', 1, 10), ('Capítulo 2: L vs Kira', 2, 10), ('Capítulo 3: Ryuk el Shinigami', 3, 10), ('Capítulo 4: El juego del gato y el ratón', 4, 10), ('Capítulo 5: Las reglas del Note', 5, 10), ('Capítulo 6: Vigilancia intensiva', 6, 10), ('Capítulo 7: Misa Amane', 7, 10), ('Capítulo 8: El segundo Kira', 8, 10), ('Capítulo 9: Jaque mate', 9, 10), ('Capítulo 10: Justicia divina', 10, 10),
-- Manga 11: Dragon Ball
('Capítulo 1: Goku y Bulma', 1, 11), ('Capítulo 2: Las esferas del dragón', 2, 11), ('Capítulo 3: Maestro Roshi', 3, 11), ('Capítulo 4: Entrenamiento Tortuga', 4, 11), ('Capítulo 5: El torneo de artes marciales', 5, 11), ('Capítulo 6: Krilin el rival', 6, 11), ('Capítulo 7: La Patrulla Roja', 7, 11), ('Capítulo 8: Torre del Maestro Karin', 8, 11), ('Capítulo 9: Piccolo Daimaku', 9, 11), ('Capítulo 10: El gran deseo', 10, 11),
-- Manga 12: Vinland Saga
('Capítulo 1: Thorfinn el hijo de Thors', 1, 12), ('Capítulo 2: El honor de un vikingo', 2, 12), ('Capítulo 3: Askeladd el astuto', 3, 12), ('Capítulo 4: La venganza fría', 4, 12), ('Capítulo 5: Guerras en Inglaterra', 5, 12), ('Capítulo 6: El Príncipe Canute', 6, 12), ('Capítulo 7: La batalla del puente', 7, 12), ('Capítulo 8: El sueño de Vinland', 8, 12), ('Capítulo 9: Invierno en el campamento', 9, 12), ('Capítulo 10: El fin de la tregua', 10, 12),
-- Manga 13: Monster
('Capítulo 1: El doctor Tenma', 1, 13), ('Capítulo 2: La vida humana', 2, 13), ('Capítulo 3: Johan el monstruo', 3, 13), ('Capítulo 4: Fugitivo en Alemania', 4, 13), ('Capítulo 5: El Kinderheim 511', 5, 13), ('Capítulo 6: Nina Fortner', 6, 13), ('Capítulo 7: El libro ilustrado', 7, 13), ('Capítulo 8: Crimen sin resolver', 8, 13), ('Capítulo 9: Sombras del pasado', 9, 13), ('Capítulo 10: La identidad real', 10, 13),
-- Manga 14: Tokyo Ghoul
('Capítulo 1: El accidente', 1, 14), ('Capítulo 2: Kaneki el híbrido', 2, 14), ('Capítulo 3: Café Anteiku', 3, 14), ('Capítulo 4: Touka Kirishima', 4, 14), ('Capítulo 5: El gourmet ghoul', 5, 14), ('Capítulo 6: Los inspectores palomas', 6, 14), ('Capítulo 7: Máscaras de batalla', 7, 14), ('Capítulo 8: Distrito 20', 8, 14), ('Capítulo 9: Tortura y cambio', 9, 14), ('Capítulo 10: El despertar del ciempiés', 10, 14),
-- Manga 15: Boku no Hero Academia
('Capítulo 1: Izuku el sin quirk', 1, 15), ('Capítulo 2: All Might el símbolo', 2, 15), ('Capítulo 3: Academia U.A.', 3, 15), ('Capítulo 4: Katsuki Bakugo', 4, 15), ('Capítulo 5: One For All', 5, 15), ('Capítulo 6: Examen de admisión', 6, 15), ('Capítulo 7: Shoto Todoroki', 7, 15), ('Capítulo 8: La liga de villanos', 8, 15), ('Capítulo 9: Plus Ultra', 9, 15), ('Capítulo 10: Entrenamiento de rescate', 10, 15),
-- Manga 16: Edens Zero
('Capítulo 1: Shiki y Rebecca', 1, 16), ('Capítulo 2: El robot Pino', 2, 16), ('Capítulo 3: Nave interestelar', 3, 16), ('Capítulo 4: Madre del cosmos', 4, 16), ('Capítulo 5: Poder Ether Gear', 5, 16), ('Capítulo 6: Planeta Granbell', 6, 16), ('Capítulo 7: Viaje espacial', 7, 16), ('Capítulo 8: El dragón mecánico', 8, 16), ('Capítulo 9: Estrellas brillantes', 9, 16), ('Capítulo 10: Destino cósmico', 10, 16),
-- Manga 17: Black Clover
('Capítulo 1: Asta el sin magia', 1, 17), ('Capítulo 2: Yuno el prodigio', 2, 17), ('Capítulo 3: El grimorio de trébol', 3, 17), ('Capítulo 4: Examen de Caballeros', 4, 17), ('Capítulo 5: Los Toros Negros', 5, 17), ('Capítulo 6: Yami Sukehiro', 6, 17), ('Capítulo 7: Primera misión real', 7, 17), ('Capítulo 8: Noelle Silva', 8, 17), ('Capítulo 9: El ojo del sol', 9, 17), ('Capítulo 10: Rey Mago', 10, 17),
-- Manga 18: Pandora Hearts
('Capítulo 1: Oz Vessalius', 1, 18), ('Capítulo 2: El abismo', 2, 18), ('Capítulo 3: Alice B-Rabbit', 3, 18), ('Capítulo 4: El reloj parado', 4, 18), ('Capítulo 5: Sharon Rainsworth', 5, 18), ('Capítulo 6: Cadenas rotas', 6, 18), ('Capítulo 7: Gil el sirviente', 7, 18), ('Capítulo 8: Recuerdos perdidos', 8, 18), ('Capítulo 9: El duque Nightray', 9, 18), ('Capítulo 10: Will of Abyss', 10, 18),
-- Manga 19: DGray-man
('Capítulo 1: Allen Walker', 1, 19), ('Capítulo 2: El ojo maldito', 2, 19), ('Capítulo 3: Akuma el arma', 3, 19), ('Capítulo 4: Orden Negra', 4, 19), ('Capítulo 5: Lenalee Lee', 5, 19), ('Capítulo 6: El Conde Milenario', 6, 19), ('Capítulo 7: Inocencia divina', 7, 19), ('Capítulo 8: Exorcistas en guerra', 8, 19), ('Capítulo 9: El arca de Noé', 9, 19), ('Capítulo 10: Buscando al maestro', 10, 19),
-- Manga 20: Magi
('Capítulo 1: Aladdin y Alibaba', 1, 20), ('Capítulo 2: El Laberinto de Amon', 2, 20), ('Capítulo 3: El Djinn del fuego', 3, 20), ('Capítulo 4: Morgiana la esclava', 4, 20), ('Capítulo 5: El Reino de Balbadd', 5, 20), ('Capítulo 6: Rukhs de luz', 6, 20), ('Capítulo 7: Judar el Magi oscuro', 7, 20), ('Capítulo 8: Los Siete Mares', 8, 20), ('Capítulo 9: Sinbad el Rey', 9, 20), ('Capítulo 10: La sabiduría de Solomon', 10, 20);