package com.bookacourse.complaint.bean;

import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Data
public class ComplaintCreateRequest extends AbstractRequest {
    @Valid
    private EntityBean category;
    @NotNull
    private Integer severity;
    @NotNull
    private String topic;
    @NotNull
    private String content;
    private Boolean incognito;
}
