package com.example.demo.service;

import com.example.demo.model.Account;
import com.example.demo.model.AccountWithoutPassword;
import com.example.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class AccountService {
    @Autowired
    AccountRepository accountRepository;

    public Account findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    public List<AccountWithoutPassword> findAll() {
        return accountRepository.findAll().stream().map(
            account -> new AccountWithoutPassword(account.getId(), account.getUsername(), account.getName(),
                account.getAddress(), account.getGender(), account.getBirth(), account.getAuthority())
        ).collect(toList());
    }

    @Transactional
    public Account removeByUsername(Integer id) {
        Account account = accountRepository.findById(id).orElseThrow();
        accountRepository.removeByUsername(account.getUsername());
        return account;
    }

    public Account create(String username, String password, String authority, String name, String address, String gender, Date birth) {
        Account account = new Account();
        account.setUsername(username);
        account.setPassword(password);
        account.setAuthority(authority);
        account.setName(name);
        account.setAddress(address);
        account.setGender(gender);
        account.setBirth(birth);

        Account accountSaved = accountRepository.save(account);

        return accountSaved;
    }

    public Account update(Integer id, String authority, String name, String address, String gender, Date birth) {
        Account account = accountRepository.findById(id).orElseThrow();
        if (authority != null && !authority.isEmpty())
            account.setAuthority(authority);
        if (name != null && !name.isEmpty())
            account.setName(name);
        if (address != null && !address.isEmpty())
            account.setAddress(address);
        if (gender != null && !gender.isEmpty())
            account.setGender(gender);
        if (birth != null)
            account.setBirth(birth);

        Account accountSaved = accountRepository.save(account);

        return accountSaved;
    }
}
