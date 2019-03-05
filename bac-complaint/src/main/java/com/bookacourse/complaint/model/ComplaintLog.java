package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="complaint_log")
public class ComplaintLog implements Serializable {
    @Id
    private String id;
    private String complaintId;
    private String type;
    private String statusFrom;
    private String statusTo;
    private String assigneeIdFrom;
    private String assigneeIdTo;
    private String actionStudentId;
    private String actionStaffId;
    private String actionAdminId;
    private String comment;
    private Date created;
    private Date updated;
}
