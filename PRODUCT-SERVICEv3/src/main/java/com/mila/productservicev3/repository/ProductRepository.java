package com.mila.productservicev3.repository;

import com.mila.productservicev3.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {
}
