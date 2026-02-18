package com.manga.backend.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.manga.backend.dto.CapituloDto;
import com.manga.backend.model.Capitulo;
import com.manga.backend.model.Manga;
import com.manga.backend.repository.CapituloRepository;
import com.manga.backend.repository.MangaRepository;
@Service
public class CapituloService {

    private final CapituloRepository capituloRepository;
    private final MangaRepository mangaRepository;
    
    public CapituloService(CapituloRepository capituloRepository, MangaRepository mangaRepository){
        this.capituloRepository=capituloRepository;
        this.mangaRepository=mangaRepository;
    }
    public Page <Capitulo> obtenerTodos(Pageable pageable){
        return capituloRepository.findAll(pageable);
    }
    public Optional <Capitulo> obtenerPorId(Long id){
        return capituloRepository.findById(id);
    }
    public Capitulo crearCapitulo(CapituloDto dto){

        Manga manga=mangaRepository.findById(dto.getMangaId())
        .orElseThrow(()-> new RuntimeException("Manga no encontrado"));
        
        Capitulo capitulo=new Capitulo();
        capitulo.setTitulo(dto.getTitulo());
        capitulo.setNumeroCapitulo(dto.getNumeroCapitulo());
        capitulo.setFechaPublicacion(dto.getFechaPublicacion());
        capitulo.setManga(manga);
        return capituloRepository.save(capitulo);
    }
    public Optional <Capitulo> actualizarCapitulo(Long id, CapituloDto dto){
        return capituloRepository.findById(id)
        .map(capitulo->{
             capitulo.setTitulo(dto.getTitulo());
        capitulo.setNumeroCapitulo(dto.getNumeroCapitulo());
        capitulo.setFechaPublicacion(dto.getFechaPublicacion());
        if(dto.getMangaId() !=null){
            Manga manga=mangaRepository.findById(dto.getMangaId())
            .orElseThrow(()->new RuntimeException("Manga no encontrado"));
            capitulo.setManga(manga);
        }
        return capituloRepository.save(capitulo);
        });
    }
    public boolean borrarCapitulo(Long id){
        if(!capituloRepository.existsById(id)){
            return false;
        }
        capituloRepository.deleteById(id);
        return true;
    }
}
