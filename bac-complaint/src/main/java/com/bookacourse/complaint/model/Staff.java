package com.bookacourse.complaint.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="staff")
public class Staff implements Serializable {
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Date created;
    private Date updated;
}
