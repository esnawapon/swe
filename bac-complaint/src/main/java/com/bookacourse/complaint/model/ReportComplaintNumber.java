package com.bookacourse.complaint.model;

import lombok.Data;

@Data
public class ReportComplaintNumber {
    private String categoryId;
    private Long count;

    public ReportComplaintNumber() {}
    public ReportComplaintNumber(String categoryId, long count) {
        this.categoryId = categoryId;
        this.count = count;
    }
}
