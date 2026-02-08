package com.manga.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manga.backend.model.Manga;

public interface MangaRepository extends JpaRepository <Manga,Long>{

}
