package com.example.stock_market.service;

import com.example.stock_market.model.User;
import com.example.stock_market.repository.UserRepository;
import com.example.stock_market.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String registerUser(User user) {
        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            throw new RuntimeException("User already exists!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypt password
        userRepository.save(user);

        return "User registered successfully!";
    }

    public LoginResponse loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found!"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials!");
        }

        String token = jwtUtil.generateToken(email);
        return new LoginResponse(token);
    }
}