package com.example.app_atletica.outros.service;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.repository.AtletaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AtletaService {

    @Autowired
    private AtletaRepository repository;

    public Atleta save(Atleta atleta){
        return repository.save(atleta);
    }

    public List<Atleta> findAll(){
        return repository.findAll();
    }

    public Atleta findById(Long id){
        return repository.findById(id).orElse(null);

    }
    public Optional<Atleta> findByEmail(String email){
        Optional<Atleta> obj = repository.findByEmail(email);
        return obj;
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }

    public List<Atleta> listaAtletas(Long id){
        List<Atleta> todosAtletas = findAll();
        List<Atleta> atletas = new ArrayList<>();

        for(int i = 0; i < todosAtletas.size(); i++){
            if(todosAtletas.get(i).getId_equipe() == id){
                atletas.add(todosAtletas.get(i));
            }
        }
        return atletas;
    }
}
