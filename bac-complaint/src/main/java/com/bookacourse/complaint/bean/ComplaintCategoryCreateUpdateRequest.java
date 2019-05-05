package com.bookacourse.complaint.bean;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ComplaintCategoryCreateUpdateRequest {
    private String id;
    @NotNull
    private String name;
    private String defaultTopic;
    private String defaultContent;
}
