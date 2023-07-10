package com.example.app_atletica.outros.controller;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.service.AtletaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/atleta")
public class AtletaController {

    @Autowired
    private AtletaService service;

    @GetMapping(value = "/list")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<List<Atleta>> buscaTodosAtletas() {

        List<Atleta> atletas = service.findAll();
        return ResponseEntity.ok().body(atletas);
    }

    @GetMapping(value = "/valor/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<Atleta> buscaAtleta(@PathVariable Long id) {

        Atleta atleta = service.findById(id);


        return ResponseEntity.ok().body(atleta);
    }

    @GetMapping(value = "/email/{email}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Optional<Atleta>> buscar(@PathVariable String email) {
        Optional<Atleta> obj = service.findByEmail(email);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<String> deleteById(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.ok().body("Atleta deletado com sucesso");
    }

    @PostMapping(value = "/save")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Atleta> salvaProduto(@RequestBody Atleta atleta){
        atleta = service.save(atleta);
        return ResponseEntity.ok().body(atleta);
    }

    @GetMapping(value = "/lista-atletas/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Atleta>> listaAtletas(@PathVariable Long id){
        List<Atleta> atletas = service.listaAtletas(id);

        return ResponseEntity.ok().body(atletas);
    }
}
