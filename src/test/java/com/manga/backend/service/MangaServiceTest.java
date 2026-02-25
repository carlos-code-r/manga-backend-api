package com.manga.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.manga.backend.dto.MangaDto;
import com.manga.backend.model.Autor;
import com.manga.backend.model.Manga;
import com.manga.backend.repository.AutorRepository;
import com.manga.backend.repository.MangaRepository;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class MangaServiceTest {
    @Mock
    private MangaRepository mangaRepository;
    @Mock
    private AutorRepository autorRepository;
    @InjectMocks
    private MangaService mangaService;

    @Test
    void testCrearManga() {
        Autor autor = new Autor();
        autor.setId(1L);

        MangaDto dto = new MangaDto();
        dto.setTitulo("Naruto");
        dto.setDescripcion("Shinobi");
        dto.setAutorId(1L);
        when(autorRepository.findById(1L))
                .thenReturn(Optional.of(autor));
        when(mangaRepository.save(org.mockito.ArgumentMatchers.any(Manga.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        Manga resultado = mangaService.crearManga(dto);
        assertNotNull(resultado);
        assertEquals("Naruto", resultado.getTitulo());
        assertEquals(autor, resultado.getAutor());
    }
    @Test
    void testCrearManga_autorNoExiste(){
        MangaDto dto=new MangaDto();
        dto.setAutorId(1L);

        when(autorRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> mangaService.crearManga(dto));
    }
    @Test
    void testBorrarManga(){
        Long id= 1L;
        when(mangaRepository.existsById(id)).thenReturn(true);
        boolean resultado=mangaService.borrarManga(id);
        assertTrue(resultado);
    }
    @Test
    void testBorrarManga_NoExiste(){
        Long id= 1L;
        when(mangaRepository.existsById(id)).thenReturn(false);
        boolean resultado= mangaService.borrarManga(id);
        assertFalse(resultado);
    }
}
