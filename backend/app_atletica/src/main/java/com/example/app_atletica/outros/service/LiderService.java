package com.example.app_atletica.outros.service;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.repository.LiderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LiderService {
    @Autowired
    private LiderRepository repository;

    public Lider save(Lider lider){
        return repository.save(lider);
    }

    public Lider findById(Long id){
        return repository.findById(id).orElse(null);
    }

    public List<Lider> findAll(){
        return repository.findAll();
    }

    public Lider setEmail(Lider lider){
        Lider lider1 = findById(lider.getId());
        lider1.setEmail(lider.getEmail());
        save(lider1);
        return lider;
    }

    public Optional<Lider> findByNome(String nome){
        Optional<Lider> obj = repository.findByNome(nome);
        return obj;
    }
    public Optional<Lider> findByEmail(String email){
        Optional<Lider> obj = repository.findByEmail(email);
        return obj;
    }
}
