package com.example.app_atletica.outros.service;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.Resultado;
import com.example.app_atletica.outros.repository.ResultadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ResultadoService {

    @Autowired
    private ResultadoRepository repository;
    public Resultado save(Resultado resultado){

        return repository.save(resultado);
    }
//    public Optional<Resultado> findByAtleta(Long atleta){
//        Optional<Resultado> obj = repository.findByAtleta(atleta);
//        return obj;
//    }

    public Optional<Resultado> pegaUltimoResultado(Long id){
        List<Resultado> todosResultados = findAll();
        List<Resultado> resultados = new ArrayList<>();

        for(int i = 0; i < todosResultados.size(); i++){
            if(todosResultados.get(i).getId_atleta() == id){
                resultados.add(todosResultados.get(i));
            }
        }
        Optional<Resultado> last = Optional.ofNullable(resultados.get(resultados.size()-1));

        return last;
    }

    private List<Resultado> findAll() {
        return repository.findAll();
    }
}
