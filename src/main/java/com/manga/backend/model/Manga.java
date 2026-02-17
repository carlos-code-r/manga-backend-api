package com.manga.backend.model;

import java.time.LocalDate;
import java.util.List;

import com.manga.backend.enums.EstadoManga;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Manga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String titulo;
    private String descripcion;

    @Enumerated(EnumType.STRING)

    private EstadoManga estado;
    private LocalDate fechaPublicacion;

    @OneToMany(mappedBy = "manga")
    private List<Capitulo> capitulos;
}
