package com.manga.backend.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
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
    @NotNull
    @Positive
    private Integer numeroCapitulo;
    @NotBlank(message = "El titulo es obligatorio")
    @Size( max=50)
    private String titulo;
    private LocalDate fechaPublicacion;
    @NotNull
    private Long mangaId;
}
