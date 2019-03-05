package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="complaint_keyword_staff_mapping")
public class ComplaintKeywordStaffMapping implements Serializable {
    @Id
    private String id;
    private String staffId;
    private String keyword;
    private Integer priority;
    private Date created;
    private Date updated;
}
