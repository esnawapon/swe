package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="auto_forwarder_log")
public class AutoForwarderLog implements Serializable {
    @Id
    private String id;
    private String complaintId;
    private Boolean success;
    private String relevantStaffId;
    private Date created;
    private Date updated;
}
