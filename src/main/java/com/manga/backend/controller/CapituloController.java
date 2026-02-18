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

import com.manga.backend.dto.CapituloDto;
import com.manga.backend.model.Capitulo;
import com.manga.backend.service.CapituloService;

@RestController
@RequestMapping("/capitulos")
public class CapituloController {

    private final CapituloService capituloService;
    public CapituloController(CapituloService capituloService){
        this.capituloService=capituloService;
    }
    @GetMapping
    public Page <CapituloDto>obtenerTodos(Pageable pageable){
        return capituloService.obtenerTodos(pageable)
        .map(this::toDto);
    }
    @GetMapping("/{id}")
    public ResponseEntity <CapituloDto> obtenerPorId(@PathVariable Long id){
        return capituloService.obtenerPorId(id)
        .map(capitulo->ResponseEntity.ok(toDto(capitulo)))
        .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity <CapituloDto> crearCapitulo(@RequestBody CapituloDto request){
        Capitulo capitulo=capituloService.crearCapitulo(request);
        return ResponseEntity.status(201).body(toDto(capitulo));
    }
    @PutMapping("/{id}")
    public ResponseEntity <CapituloDto> actualizarCapitulo(@PathVariable Long id, @RequestBody CapituloDto request){
        return capituloService.actualizarCapitulo(id, request)
        .map(capitulo->ResponseEntity.ok(toDto(capitulo)))
        .orElse(ResponseEntity.notFound().build());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity <Void> borrarCapitulo(@PathVariable Long id){
        boolean borrado=capituloService.borrarCapitulo(id);
        if(!borrado){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
    private CapituloDto toDto(Capitulo capitulo){
         Long mangaId=null;
         if(capitulo.getManga() !=null){
            mangaId=capitulo.getManga().getId();
         }
    return new CapituloDto(
        capitulo.getId(),
        capitulo.getNumeroCapitulo(),
        capitulo.getTitulo(),
        capitulo.getFechaPublicacion(),
        mangaId);        
    }
}
