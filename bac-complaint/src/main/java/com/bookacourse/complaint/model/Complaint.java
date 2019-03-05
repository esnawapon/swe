package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="complaint")
public class Complaint implements Serializable {

    @Id
    private String id;
    private String topic;
    private String content;
    private String status;
    private Integer severity;
    private Integer satisfaction;
    private String ownerId;
    private Boolean incognito;
    private String categoryId;
    private String assigneeId;
    private Date created;
    private Date updated;
}
