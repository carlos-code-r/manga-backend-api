package com.manga.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.manga.backend.model.Manga;

public interface MangaRepository extends JpaRepository <Manga,Long>{

    Page <Manga> findByTituloContainingIgnoreCase(String titulo, Pageable pageable);
    Page <Manga> findByTituloContainingIgnoreCaseAndAutorNombreContainingIgnoreCase(String titulo, String autor, Pageable pageable);
}
