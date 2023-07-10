package com.example.app_atletica.outros.repository;

import com.example.app_atletica.outros.entity.Equipe;
import com.example.app_atletica.outros.entity.EquipeDTO;
import org.hibernate.sql.Insert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe, Long>{

    /*@Override
    <S extends Equipe> S save(S entity){
        INSERT INTO equipe()
    }*/
}

