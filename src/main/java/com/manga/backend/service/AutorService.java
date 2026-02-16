package com.manga.backend.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.manga.backend.dto.AutorDto;
import com.manga.backend.model.Autor;
import com.manga.backend.repository.AutorRepository;

@Service
public class AutorService {

    private final AutorRepository autorRepository;

    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    public Page<Autor> obtenerTodos(Pageable pageable) {

        return autorRepository.findAll(pageable);
    }

    public Optional<Autor> obtenerPorId(Long id) {

        return autorRepository.findById(id);
    }

    public Autor crearAutor(AutorDto dto) {

        Autor autor = new Autor();
        autor.setNombre(dto.getNombre());
        autor.setNacionalidad(dto.getNacionalidad());
        autor.setFechaNacimiento(dto.getFechaNacimiento());
        autor.setAutobiografia(dto.getAutobiografia());
        return autorRepository.save(autor);
    }

    public Optional<Autor> actualizarAutor(Long id, AutorDto dto) {
        
        return autorRepository.findById(id).map(autor -> {
            autor.setNombre(dto.getNombre());
            autor.setNacionalidad(dto.getNacionalidad());
            autor.setFechaNacimiento(dto.getFechaNacimiento());
            autor.setAutobiografia(dto.getAutobiografia());
            return autorRepository.save(autor);
        });
    }

    public boolean borrarAutor(Long id) {
        if (!autorRepository.existsById(id)) {
            return false;
        }
        autorRepository.deleteById(id);
        return true;
    }
}
