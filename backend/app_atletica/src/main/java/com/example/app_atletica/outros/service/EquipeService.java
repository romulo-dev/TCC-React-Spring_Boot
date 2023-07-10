package com.example.app_atletica.outros.service;

import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.EquipeDTO;
import com.example.app_atletica.outros.repository.EquipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EquipeService {

    @Autowired
    private EquipeRepository equipeRepository;

    public Equipe save(Equipe equipe){
        return equipeRepository.save(equipe);
    }

    public Equipe findById(Long id){
        return equipeRepository.findById(id).orElse(null);
    }

    public List<Equipe> findAll(){
        return equipeRepository.findAll();
    }

    public List<Equipe> listaEquipes(Long id){
        List<Equipe> todasEquipes = findAll();
        List<Equipe> equipes = new ArrayList<>();

        for(int i = 0; i < todasEquipes.size(); i++){
            if(todasEquipes.get(i).getId_lider() == id){
                equipes.add(todasEquipes.get(i));
            }
        }
        return equipes;
    }

    public void deleteById(Long id){
        equipeRepository.deleteById(id);
    }

}
