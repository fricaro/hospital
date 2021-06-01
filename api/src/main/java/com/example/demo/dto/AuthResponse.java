package com.example.demo.dto;

import com.example.demo.model.AccountWithoutPassword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private AccountWithoutPassword user;
}
