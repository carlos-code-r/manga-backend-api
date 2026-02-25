package com.manga.backend.service;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.manga.backend.dto.CapituloDto;
import com.manga.backend.model.Capitulo;
import com.manga.backend.model.Manga;
import com.manga.backend.repository.CapituloRepository;
import com.manga.backend.repository.MangaRepository;

@ExtendWith(MockitoExtension.class)
public class CapituloServiceTest {

    @Mock
    private CapituloRepository capituloRepository;
    @Mock
    private MangaRepository mangaRepository;
    @InjectMocks
    private CapituloService capituloService;

    @Test
    void testCrearCapitulo() {
        Manga manga = new   Manga();
        manga.setId(1L);
            CapituloDto dto=new CapituloDto();
            dto.setTitulo("Capitulo 1");
            dto.setNumeroCapitulo(1);
            dto.setMangaId(1L);

        when(mangaRepository.findById(1L)).thenReturn(Optional.of(manga));

        when(capituloRepository.save(any(Capitulo.class)))
        .thenAnswer(invocation ->invocation.getArgument(0));

        Capitulo resultado= capituloService.crearCapitulo(dto);
        assertNotNull(resultado);
    }
    @Test
    void testCrearCapitulo_MangaNoExiste(){
        CapituloDto dto= new CapituloDto();
        dto.setMangaId(1L);
        
        when(mangaRepository.findById(1L))
        .thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () ->
        capituloService.crearCapitulo(dto));
    }
    @Test
    void testBorrarCapitulo(){

        Long id=1L;

        when(capituloRepository.existsById(id)).thenReturn(true);
        boolean resultado=capituloService.borrarCapitulo(id);
        assertTrue(resultado);
    }
    @Test
    void testBorrarCapitulo_NoExiste(){
        Long id=1L;
        when(capituloRepository.existsById(id)).thenReturn(false);
        boolean resultado=capituloService.borrarCapitulo(id);
        assertFalse(resultado);
    }
}
