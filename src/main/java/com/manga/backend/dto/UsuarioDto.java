package com.manga.backend.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UsuarioDto {
    private Long id;
    @NotBlank(message = "El usuario es obligatorio")
    @Size(min=5, max=15)
    private String usuario;
    @NotBlank(message = "El email es obligatorio")
    @Email
    @Size( max=80)
    private String email;
    private LocalDate fechaAlta;
}
