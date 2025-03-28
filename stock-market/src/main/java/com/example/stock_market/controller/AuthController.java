package com.example.stock_market.controller;

import com.example.stock_market.model.User;
import com.example.stock_market.service.AuthService;
import com.example.stock_market.service.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        return ResponseEntity.ok(authService.registerUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.loginUser(loginRequest.getEmail(), loginRequest.getPassword()));
    }
}
