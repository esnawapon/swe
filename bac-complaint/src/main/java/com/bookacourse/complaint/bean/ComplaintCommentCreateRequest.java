package com.bookacourse.complaint.bean;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ComplaintCommentCreateRequest {
    @NotNull
    private String comment;
}
