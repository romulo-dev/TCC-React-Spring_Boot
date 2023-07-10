package com.example.app_atletica.outros.repository;

import com.example.app_atletica.outros.entity.Atleta;
import com.example.app_atletica.outros.entity.Lider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface LiderRepository extends JpaRepository<Lider, Long> {


    Optional<Lider> findByNome(String nome);

    Optional<Lider> findByEmail(String email);
    //Lider setEmail(String email, Long id);
}