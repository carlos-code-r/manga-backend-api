package com.manga.backend.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.manga.backend.dto.MangaDto;
import com.manga.backend.model.Manga;
import com.manga.backend.repository.MangaRepository;

@Service
public class MangaService {

    private final MangaRepository mangaRepository;

    public MangaService(MangaRepository mangaRepository) {
        this.mangaRepository = mangaRepository;
    }

    public Page<Manga> obtenerTodos(Pageable pageable) {
        return mangaRepository.findAll(pageable);
    }

    public Optional<Manga> obtenerPorId(Long id) {
        return mangaRepository.findById(id);
    }

    public Manga crearManga(MangaDto dto) {
        Manga manga = new Manga();
        manga.setAutor(dto.getAutor());
        manga.setTitulo(dto.getTitulo());
        manga.setDescripcion(dto.getDescripcion());
        manga.setEstado(dto.getEstado());
        manga.setFechaPublicacion(dto.getFechaPublicacion());
        return mangaRepository.save(manga);
    }

    public Optional<Manga> actualizarManga(Long id, MangaDto dto) {
        return mangaRepository.findById(id).map(manga -> {
            manga.setAutor(dto.getAutor());
            manga.setTitulo(dto.getTitulo());
            manga.setDescripcion(dto.getDescripcion());
            manga.setEstado(dto.getEstado());
            manga.setFechaPublicacion(dto.getFechaPublicacion()   );
            return mangaRepository.save(manga);
        });
    }

    public boolean borrarManga(Long id) {
        if (!mangaRepository.existsById(id)) {
            return false;
        }
        mangaRepository.deleteById(id);
        return true;
    }
}
