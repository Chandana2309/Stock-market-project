package com.example.stock_market.controller;

import com.example.stock_market.model.LearningResource;
import com.example.stock_market.service.LearningResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/learning-resources")
@CrossOrigin(origins = "*")
public class LearningResourceController {
    @Autowired
    private LearningResourceService service;

    @GetMapping("/")
    public List<LearningResource> getAllResources() {
        return service.getAllResources();
    }

    @PostMapping("/add")
    public LearningResource addResource(@RequestBody LearningResource resource) {
        return service.addResource(resource);
    }
}