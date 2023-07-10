package com.example.app_atletica.outros.controller;

import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.EquipeDTO;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.service.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/equipe")
public class EquipeController {

    @Autowired
    private EquipeService service;

    @PostMapping(value = "/save")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Equipe> salvaEquipe(@RequestBody Equipe equipe){
        equipe = service.save(equipe);
        return ResponseEntity.ok().body(equipe);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Equipe> buscaEquipe(@PathVariable Long id) {

        Equipe equipe = service.findById(id);

        return ResponseEntity.ok().body(equipe);
    }

    @GetMapping(value = "/list_all")
    public ResponseEntity<List<Equipe>> buscaTodasEquipes() {

        List<Equipe> equipes = service.findAll();

        return ResponseEntity.ok().body(equipes);

    }

    @GetMapping(value = "/lista-equipes/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Equipe>> listaEquipes(@PathVariable Long id){
        List<Equipe> equipes = service.listaEquipes(id);

        return ResponseEntity.ok().body(equipes);
    }

    @DeleteMapping(value = "/delete/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<String> deleteById(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.ok().body("Equipe deletada com sucesso!");
    }
}
