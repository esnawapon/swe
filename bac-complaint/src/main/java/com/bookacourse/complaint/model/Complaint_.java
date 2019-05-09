package com.bookacourse.complaint.model;

import java.util.Date;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Complaint.class)
public class Complaint_ {
	
	public static volatile SingularAttribute<Complaint, String> id;
	public static volatile SingularAttribute<Complaint, String> topic;
	public static volatile SingularAttribute<Complaint, String> content;
	public static volatile SingularAttribute<Complaint, String> status;
	public static volatile SingularAttribute<Complaint, Integer> severity;
	public static volatile SingularAttribute<Complaint, Integer> satisfaction;
	public static volatile SingularAttribute<Complaint, String> ownerId;
	public static volatile SingularAttribute<Complaint, Boolean> incognito;
	public static volatile SingularAttribute<Complaint, String> categoryId;
	public static volatile SingularAttribute<Complaint, Staff> assignee;
	public static volatile SingularAttribute<Complaint, Date> created;
	public static volatile SingularAttribute<Complaint, Date> updated;
}
