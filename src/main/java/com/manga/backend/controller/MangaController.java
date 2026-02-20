package com.manga.backend.controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manga.backend.dto.MangaDto;
import com.manga.backend.model.Manga;
import com.manga.backend.service.MangaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/mangas")
public class MangaController {

  private final  MangaService mangaService;

    public MangaController(MangaService mangaService) {
        this.mangaService = mangaService;
    }

    @GetMapping
    public Page<MangaDto> obtenerTodos(Pageable pageable) {

        return mangaService.obtenerTodos(pageable)
                .map(this::toDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MangaDto> obtenerPorId(@PathVariable Long id) {
        return mangaService.obtenerPorId(id)
                .map(manga -> ResponseEntity.ok(toDto(manga)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MangaDto> crearManga(@Valid @RequestBody MangaDto request) {
        Manga manga = mangaService.crearManga(request);
        return ResponseEntity.status(201).body(toDto(manga));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MangaDto> actualizarManga(@PathVariable Long id,@Valid @RequestBody MangaDto request) {
        return mangaService.actualizarManga(id, request)
                .map(manga -> ResponseEntity.ok(toDto(manga)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarManga(@PathVariable Long id) {
        boolean borrado = mangaService.borrarManga(id);
        if (!borrado) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

    private MangaDto toDto(Manga manga) {
        Long autorId=null;
        if(manga.getAutor() !=null){
            autorId=manga.getAutor().getId();
        }
        return new MangaDto(
                manga.getId(),
                manga.getTitulo(),
                manga.getDescripcion(),
                manga.getEstado(),
                manga.getFechaPublicacion(),
                autorId);
    }
}
