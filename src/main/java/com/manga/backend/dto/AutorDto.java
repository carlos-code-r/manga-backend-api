package com.manga.backend.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AutorDto {
    
    private Long id;
    @NotBlank(message = "El nombre es obligatorio")
    @Size(max=50)
    private String nombre;
    private String nacionalidad;
    private LocalDate fechaNacimiento;
    private String autobiografia;
}
