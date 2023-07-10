package com.example.app_atletica.outros.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;


import javax.persistence.*;

@Entity
public class Resultado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
//    @Transient
//    private String date;

    //@DateTimeFormat(pattern = "aaaa-mm-dd hh:mm:ss")
    //, timezone="Europe/Berlin"
    //@CreationTimestamp
    //@Column(name="data", nullable = false, updatable = false, insertable = false)
    @Column(name="data", nullable = false)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy HH:mm:ss")
    //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    private Timestamp data;
    //private String data;
    private Long x;
    private Long y;
    private Long id_atleta;

    public Resultado() {
    }

    public Resultado(Long id, Timestamp data, Long x, Long y, Long id_atleta) {
        this.id = id;
        this.data = data;
        this.x = x;
        this.y = y;
        this.id_atleta = id_atleta;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public Long getX() {
        return x;
    }

    public void setX(Long x) {
        this.x = x;
    }

    public Long getY() {
        return y;
    }

    public void setY(Long y) {
        this.y = y;
    }

    public Long getId_atleta() {
        return id_atleta;
    }

    public void setId_atleta(Long id_atleta) {
        this.id_atleta = id_atleta;
    }
}
