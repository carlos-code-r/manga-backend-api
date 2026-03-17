package com.manga.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.manga.backend.model.Capitulo;

public interface CapituloRepository extends JpaRepository <Capitulo,Long>{

    Page<Capitulo> findByMangaId(Long mangaId, Pageable pageable);
}
