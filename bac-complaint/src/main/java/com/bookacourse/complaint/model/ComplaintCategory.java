package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="complaint_category")
public class ComplaintCategory implements Serializable {
    @Id
    private String id;
    private String name;
    private String defaultTopic;
    private String defaultContent;
    private Date created;
    private Date updated;
}
