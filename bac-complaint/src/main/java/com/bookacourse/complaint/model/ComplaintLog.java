package com.bookacourse.complaint.model;

import com.bookacourse.complaint.util.DateUtil;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
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
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id_from", referencedColumnName = "id", insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Staff assigneeFrom;
//    private String assigneeIdFrom;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id_to", referencedColumnName = "id", insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Staff assigneeTo;
//    private String assigneeIdTo;
    private String actionStudentId;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "action_staff_id", referencedColumnName = "id", insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    private String actionStaffId;
    private Staff actionStaff;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "action_admin_id", referencedColumnName = "id", insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    private String actionAdminId;
    private Admin actionAdmin;

    private String comment;
    private Date created;
    private Date updated;

    @Transient
    private String timestamp;
    public String getTimestamp() {
        return DateUtil.formatTimestamp(created);
    }
}
