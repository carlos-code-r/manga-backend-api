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
public class AutorDto {
    
    private Long id;
    private String nombre;
    private String nacionalidad;
    private LocalDate fechaNacimiento;
    private String autobiografia;
}
