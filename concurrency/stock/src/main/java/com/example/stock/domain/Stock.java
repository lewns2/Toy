package com.example.stock.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
    // id, productId, quantity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;

    private Long quantity;

    public Stock() {};

    public Stock(Long productId, Long quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }

    public Long getQuantity() {
        return quantity;
    }

    // 재고 감소 메서드
    public void decrease(Long quantity) {
        if(this.quantity - quantity < 0) {
            throw new RuntimeException("foo");
        }

        this.quantity = this.quantity - quantity;
    }
}
