package com.example.stock.transaction;

import com.example.stock.service.StockService;

// 트랜잭션 어노테이션을 통한 대략적 서비스 실행 과정
public class TransactionStockService {
    
    private StockService stockService;

    public TransactionStockService(StockService stockService) {
        this.stockService = stockService;
    }
    
    public void decrease(Long id, Long quantity) {
        startTransaction();
        
        stockService.decrease(id, quantity);
        
        endTransaction();
    }

    private void endTransaction() {
    }

    private void startTransaction() {
    }
}
