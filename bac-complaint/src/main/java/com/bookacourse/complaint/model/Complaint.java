package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@Data
@Entity
@Table(name="complaint")
public class Complaint {

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
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id", referencedColumnName = "id", insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Staff assignee;
//    private String assigneeId;
    private Date created;
    private Date updated;

    public Complaint snapshot() {
        Complaint c = new Complaint();
        c.id = this.id;
        c.topic = this.topic;
        c.content = this.content;
        c.status = this.status;
        c.severity = this.severity;
        c.satisfaction = this.satisfaction;
        c.ownerId = this.ownerId;
        c.incognito = this.incognito;
        c.categoryId = this.categoryId;
        c.assignee = this.assignee;
        c.created = this.created;
        c.updated = this.updated;
        return c;
    }
}
