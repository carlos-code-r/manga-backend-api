package com.manga.backend.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.manga.backend.dto.UsuarioDto;
import com.manga.backend.model.Usuario;
import com.manga.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {

    final private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    public Page <Usuario> obtenerTodos(Pageable pageable){
        return usuarioRepository.findAll(pageable);
    }
    public Optional <Usuario> obtenerPorId(Long id){
        return usuarioRepository.findById(id);
    }
    public Usuario crearUsuario(UsuarioDto dto){
        Usuario usuario=new Usuario();
        usuario.setUsuario(dto.getUsuario());
        usuario.setEmail(dto.getEmail());
        usuario.setFechaAlta(LocalDate.now());
        return usuarioRepository.save(usuario);
    }
    public Optional <Usuario> actualizarUsuario(Long id,UsuarioDto dto){
        return usuarioRepository.findById(id).map(usuario->{
            usuario.setUsuario(dto.getUsuario());
            usuario.setEmail(dto.getEmail());
            return usuarioRepository.save(usuario);
        });
    }
    public boolean borrarUsuario(Long id){
        if(!usuarioRepository.existsById(id)){
            return false;
        }
        usuarioRepository.deleteById(id);
        return true;
    }
}
