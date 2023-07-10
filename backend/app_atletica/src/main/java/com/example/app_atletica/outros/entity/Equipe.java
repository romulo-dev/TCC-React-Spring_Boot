package com.example.app_atletica.outros.entity;

import javax.persistence.*;

@Entity
public class Equipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String categoria;

//    @OneToOne(cascade = CascadeType.ALL)
//    //@JoinColumn(name = "id_lider")
//    private Lider lider;

    private Long id_lider;
    public Equipe() {
    }

    public Equipe(Long id, String nome, String categoria, Long id_lider) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.id_lider = id_lider;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Long getId_lider() {
        return id_lider;
    }

    public void setId_lider(Long id_lider) {
        this.id_lider = id_lider;
    }
}
