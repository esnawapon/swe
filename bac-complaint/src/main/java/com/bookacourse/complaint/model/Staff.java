package com.bookacourse.complaint.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "staff")
public class Staff {
	@Id
	private String id;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private Date created;
	private Date updated;
}
