package com.example.app_atletica.outros.controller;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Lider;
import com.example.app_atletica.outros.repository.LiderRepository;
import com.example.app_atletica.outros.service.LiderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/lider")
public class LiderController {
    @Autowired
    private LiderService service;

    @Autowired
    private LiderRepository repository;

    @PostMapping(value = "/save")
    public ResponseEntity<Lider> salvaLider(@RequestBody Lider lider){
        lider = service.save(lider);
        return ResponseEntity.ok().body(lider);
    }

    @PostMapping("/setEmail")
    public ResponseEntity<Lider> setEmail(@RequestBody Lider lider){
        //Long id = 1l;
        Lider lider1 = service.setEmail(lider);
        return ResponseEntity.ok().body(lider1);
        
    }

    /*@GetMapping("regioes/{id}")
    public ResponseEntity<Lider> findRegioesById(@PathVariable Long id){
        Optional<Lider> regiaoOptional = service.findById(id);
        if (regiaoOptional.isPresent()){
            Regiao regiaoUnid = regiaoOptional.get();
            return new ResponseEntity<>(regiaoUnid, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/




    @GetMapping(value = "/{id}")
    public ResponseEntity<Lider> buscaLider(@PathVariable Long id) {

        Lider lider = service.findById(id);


        return ResponseEntity.ok().body(lider);
    }






    @GetMapping(value = "/busca-todos")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Lider>> buscaTodosLiders() {

        List<Lider> liders = service.findAll();

        return ResponseEntity.ok().body(liders);

    }

    @GetMapping(value = "/nome/{nome}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Optional<Lider>> buscar(@PathVariable String nome) {
        Optional<Lider> obj = service.findByNome(nome);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping(value = "/email/{email}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Optional<Lider>> buscarEmail(@PathVariable String email) {
        Optional<Lider> obj = service.findByEmail(email);
        return ResponseEntity.ok().body(obj);
    }
}
