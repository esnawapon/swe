package com.bookacourse.complaint.bean;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class EntityBean extends AbstractRequest {
    @NotNull
    private String id;
}
