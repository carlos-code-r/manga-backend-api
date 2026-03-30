package com.manga.backend.model;

import java.time.LocalDate;

import com.manga.backend.enums.Rol;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private  Long id;
    private String usuario;
    private String email;
    private LocalDate fechaAlta;
    private String password;
    @Enumerated(EnumType.STRING)
    private Rol rol;
}
