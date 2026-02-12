package com.manga.backend.dto;

import java.time.LocalDate;

import com.manga.backend.enums.EstadoManga;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MangaDto {

    private Long id;
    private String titulo;
    private String autor;
    private String descripcion;
    private EstadoManga estado;
    private LocalDate fechaPublicacion;
}
