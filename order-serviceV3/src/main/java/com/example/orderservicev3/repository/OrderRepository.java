package com.example.orderservicev3.repository;

import com.example.orderservicev3.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
