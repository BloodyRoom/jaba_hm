package org.gigilo.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tblProducts")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 150, nullable = false)
    private String name;
    @Column(nullable = false)
    private int price;
    @Column(name = "date_created", nullable = false)
    private LocalDateTime dateCreated;
    @Column(name = "date_updated", nullable = false)
    private LocalDateTime dateUpdated;

    public ProductEntity() {
        this.dateCreated = LocalDateTime.now();
        this.dateUpdated = LocalDateTime.now();
    }

    public ProductEntity(String name, int price) {
        this();
        this.name = name;
        this.price = price;
    }



    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public int getPrice() { return price; }

    public void setPrice(int price) { this.price = price; }

    public LocalDateTime getDateCreated() { return dateCreated; }

    public void setDateCreated(LocalDateTime dateCreated) { this.dateCreated = dateCreated; }

    public LocalDateTime getDateUpdated() { return dateUpdated; }

    public void setDateUpdated(LocalDateTime dateUpdated) { this.dateUpdated = dateUpdated; }
}
