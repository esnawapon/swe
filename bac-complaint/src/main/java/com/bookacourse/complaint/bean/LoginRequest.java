package com.bookacourse.complaint.bean;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LoginRequest {
    @NotNull
    private String id;
    private String password;
    @NotNull
    private String type;
}
