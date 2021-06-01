package com.example.demo.dto;

import com.example.demo.model.Account;
import com.example.demo.model.AccountWithoutPassword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountsResponse {
    List<AccountWithoutPassword> accounts;
}
