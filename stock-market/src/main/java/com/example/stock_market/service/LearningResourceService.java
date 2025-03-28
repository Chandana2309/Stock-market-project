package com.example.stock_market.service;

import com.example.stock_market.model.LearningResource;
import com.example.stock_market.repository.LearningResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningResourceService {
    @Autowired
    private LearningResourceRepository repository;

    public List<LearningResource> getAllResources() {
        return repository.findAll();
    }

    public LearningResource addResource(LearningResource resource) {
        return repository.save(resource);
    }
}