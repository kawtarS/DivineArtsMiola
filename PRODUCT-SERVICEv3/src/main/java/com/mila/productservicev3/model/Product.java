package com.mila.productservicev3.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "PRODUCT_TB")
@Data
@AllArgsConstructor
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private BigDecimal price;
    //private String href;
    private String imageSrc;
   private String artist;
    private String detail;


    /*public Product(String id, String name, String description, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }*/


   /*public Product(String name, String description, BigDecimal price) {
        this.name = name;
       this.description = description;
        this.price = price;
    }*/

   public Product(String name, BigDecimal price, String imageSrc, String artist, String detail) {
        this.name = name;
        this.price = price;
        this.imageSrc = imageSrc;
        this.artist = artist;
        this.description = detail;
    }

    public Product() {

    }
}
