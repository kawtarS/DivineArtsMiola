package com.example.orderservicev3.controller;

import com.example.orderservicev3.client.InventoryClient;
import com.example.orderservicev3.dto.OrderDto;
import com.example.orderservicev3.model.Order;
import com.example.orderservicev3.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.concurrent.ExecutorService;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
@Slf4j
//@CrossOrigin(origins="http://localhost:3000")
public class OrderController {

   private final OrderRepository orderRepository;
    private final InventoryClient inventoryClient;
  //  private final Resilience4JCircuitBreakerFactory circuitBreakerFactory;
    //private final StreamBridge streamBridge;
    //private final ExecutorService traceableExecutorService;
    @PostMapping
  public String placeOrder(@RequestBody OrderDto orderDto) {
        boolean allProductsInStock =orderDto.getOrderLineItemsList().stream()
                .allMatch(orderLineItems -> inventoryClient.isInStock(orderLineItems.getSkuCode()));
        if(allProductsInStock) {
            Order order = new Order();
            order.setOrderLineItems(orderDto.getOrderLineItemsList());
            order.setOrderNumber(UUID.randomUUID().toString());
            orderRepository.save(order);
            return "order place successfully";
        }else {
            return "Order Failed ,one of the products in the order is not in stock";
        }
    }
    private Boolean handleErrorCase() {
        return false;
    }
}
