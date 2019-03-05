package com.bookacourse.complaint.bean;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class ComplaintSearchRequest extends AbstractRequest {
    private String keyword;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateFrom;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateTo;
    private String categoryId;
    private String status;
    private Integer severity;
}


