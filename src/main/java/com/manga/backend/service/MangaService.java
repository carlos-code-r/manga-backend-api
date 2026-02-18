package com.manga.backend.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.manga.backend.dto.MangaDto;
import com.manga.backend.model.Autor;
import com.manga.backend.model.Manga;
import com.manga.backend.repository.AutorRepository;
import com.manga.backend.repository.MangaRepository;

@Service
public class MangaService {

    private final MangaRepository mangaRepository;
    private final AutorRepository autorRepository;

    public MangaService(MangaRepository mangaRepository, AutorRepository autorRepository) {
        this.mangaRepository = mangaRepository;
        this.autorRepository=autorRepository;
    }

    public Page<Manga> obtenerTodos(Pageable pageable) {
        return mangaRepository.findAll(pageable);
    }

    public Optional<Manga> obtenerPorId(Long id) {
        return mangaRepository.findById(id);
    }

    public Manga crearManga(MangaDto dto) {

        Autor autor=autorRepository.findById(dto.getAutorId())
        .orElseThrow(()-> new RuntimeException("Autor no encotrado"));
        
        Manga manga = new Manga();
        manga.setTitulo(dto.getTitulo());
        manga.setDescripcion(dto.getDescripcion());
        manga.setEstado(dto.getEstado());
        manga.setFechaPublicacion(dto.getFechaPublicacion());
        manga.setAutor(autor);
        return mangaRepository.save(manga);
    }

    public Optional<Manga> actualizarManga(Long id, MangaDto dto) {
        return mangaRepository.findById(id).map(manga -> {
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
