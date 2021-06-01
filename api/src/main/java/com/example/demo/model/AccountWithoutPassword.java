package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountWithoutPassword {
    private Integer id;
    private String username;
    private String name;
    private String address;
    private String gender;
    private Date birth;
    private String authority;
}
