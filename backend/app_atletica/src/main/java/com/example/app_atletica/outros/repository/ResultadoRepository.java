package com.example.app_atletica.outros.repository;



import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Resultado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResultadoRepository extends JpaRepository<Resultado, Long> {
    //Optional<Resultado> findByAtleta(Long atleta);
}
