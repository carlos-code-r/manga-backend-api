package com.manga.backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manga.backend.dto.AutorDto;
import com.manga.backend.model.Autor;
import com.manga.backend.service.AutorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/autores")
public class AutorController {

    private final AutorService autorService;

    public AutorController(AutorService autorService) {

        this.autorService = autorService;
    }

    @GetMapping
    public Page<AutorDto> obtenerTodos(Pageable pageable) {

        return autorService.obtenerTodos(pageable)
                .map(this::toDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutorDto> obtenerPorId(@PathVariable Long id) {

        return autorService.obtenerPorId(id)
                .map(autor -> ResponseEntity.ok(toDto(autor)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<AutorDto> crearAutor(@Valid @RequestBody AutorDto request) {

        Autor autor = autorService.crearAutor(request);
        return ResponseEntity.status(201).body(toDto(autor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AutorDto> actualizarAutor(@PathVariable Long id,@Valid @RequestBody AutorDto dto) {

        return autorService.actualizarAutor(id, dto)
                .map(autor -> ResponseEntity.ok(toDto(autor)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarAutor(@PathVariable Long id) {

        boolean borrado = autorService.borrarAutor(id);
        if (!borrado) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

    private AutorDto toDto(Autor autor) {
        
        return new AutorDto(
                autor.getId(),
                autor.getNombre(),
                autor.getNacionalidad(),
                autor.getFechaNacimiento(),
                autor.getAutobiografia());
    }
}
