package com.example.app_atletica.outros.controller;


import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.entity.Resultado;
import com.example.app_atletica.outros.service.ResultadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(value = "/resultado")
public class ResultadoController {
    @Autowired
    private ResultadoService service;

    @PostMapping(value = "/save")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Resultado> salvaResultado(@RequestBody Resultado resultado){
        try {
            resultado = service.save(resultado);
            System.out.println(resultado);
            return ResponseEntity.ok().body(resultado);
        }
        catch (Exception e){
            System.out.println("Houve um erro: " + e.getMessage());
            return ResponseEntity.ok().body(resultado);
        }
    }

//    @GetMapping(value = "/atleta/{atleta}")
//    @CrossOrigin(origins = "*")
//    public ResponseEntity<Optional<Resultado>> buscar(@PathVariable Long atleta) {
//        Optional<Resultado> obj = service.findByAtleta(atleta);
//        return ResponseEntity.ok().body(obj);
//    }

    @GetMapping(value = "/ultimo-resultado/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Optional<Resultado>> pegaUltimoResultado(@PathVariable Long id){
        Optional<Resultado> obj = service.pegaUltimoResultado(id);
        return ResponseEntity.ok().body(obj);
    }

}
