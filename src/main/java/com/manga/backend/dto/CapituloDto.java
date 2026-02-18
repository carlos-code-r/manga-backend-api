package com.manga.backend.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CapituloDto {
    private Long id;
    private Integer numeroCapitulo;
    private String titulo;
    private LocalDate fechaPublicacion;
    private Long MangaId;
}
