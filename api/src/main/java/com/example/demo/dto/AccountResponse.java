package com.example.demo.dto;

import com.example.demo.model.Account;
import com.example.demo.model.AccountWithoutPassword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponse {
    private AccountWithoutPassword user;

    public AccountResponse fromAccount(Account account) {
        user = new AccountWithoutPassword();
        user.setAddress(account.getAddress());
        user.setAuthority(account.getAuthority());
        user.setBirth(account.getBirth());
        user.setUsername(account.getUsername());
        user.setGender(account.getGender());
        user.setName(account.getName());

        return this;
    }
}
