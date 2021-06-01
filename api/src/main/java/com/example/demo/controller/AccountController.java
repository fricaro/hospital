package com.example.demo.controller;

import com.example.demo.dto.AccountResponse;
import com.example.demo.dto.AccountsResponse;
import com.example.demo.dto.CreateAccountRequest;
import com.example.demo.dto.UpdateAccountRequest;
import com.example.demo.model.Account;
import com.example.demo.model.AccountWithoutPassword;
import com.example.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("accounts")
public class AccountController {
    @Autowired
    AccountService accountService;


    @GetMapping()
    public ResponseEntity<AccountsResponse> findAll() {
        List<AccountWithoutPassword> accounts = accountService.findAll();

        return ResponseEntity.ok(new AccountsResponse(accounts));
    }

    @PostMapping()
    public ResponseEntity<AccountResponse> createAccount(@RequestBody CreateAccountRequest request) {
        Account account = accountService.create(
            request.getUsername(),
            request.getPassword(),
            request.getAuthority(),
            request.getName(),
            request.getAddress(),
            request.getGender(),
            request.getBirth()
        );

        return ResponseEntity.ok(new AccountResponse().fromAccount(account));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AccountResponse> removeByUsername(@PathVariable Integer id) {
        Account account = accountService.removeByUsername(id);

        return ResponseEntity.ok(new AccountResponse().fromAccount(account));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccountResponse> updateAccount(@PathVariable Integer id, @RequestBody UpdateAccountRequest request) {
        Account account = accountService.update(
            id,
            request.getAuthority(),
            request.getName(),
            request.getAddress(),
            request.getGender(),
            request.getBirth()
        );

        return ResponseEntity.ok(new AccountResponse().fromAccount(account));
    }
}
