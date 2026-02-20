package com.manga.backend.dto;

import java.time.LocalDate;

import com.manga.backend.enums.EstadoManga;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
    @NotBlank(message = "El titulo es obligatorio")
    @Size( max=100)
    private String titulo;
    @NotBlank(message= "La descripcion es obligatoria")
    @Size(min=10, max=500)
    private String descripcion;
    private EstadoManga estado;
    private LocalDate fechaPublicacion;
    @NotNull
    private Long autorId;
}
