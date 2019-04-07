package com.bookacourse.complaint.repository;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.util.StringUtil;

@Repository
public class ComplaintRepositoryCustomImpl implements ComplaintRepositoryCustom {
    
	@Autowired
    private EntityManager em;
    
	@Override
	public List<Complaint> searchWithCondition(ComplaintSearchRequest request) {
		CriteriaBuilder cb = em.getCriteriaBuilder();
	    CriteriaQuery<Complaint> cq = cb.createQuery(Complaint.class);
	 
	    Root<Complaint> complaint = cq.from(Complaint.class);
	    List<Predicate> predicates = new ArrayList<>();
	     
		if (StringUtil.isNotEmpty(request.getKeyword())) {
			predicates.add(cb.like(cb.lower(complaint.get("topic")), '%' + request.getKeyword() + '%'));
		}
		if (StringUtil.isNotEmpty(request.getCategoryId())) {
			predicates.add(cb.equal(complaint.get("category_id"), request.getCategoryId()));
		}
		if (request.getDateFrom() != null) {
			predicates.add(cb.greaterThanOrEqualTo(complaint.<Date>get("created"), request.getDateFrom()));
		}
		if (request.getDateTo() != null) {
			predicates.add(cb.lessThanOrEqualTo(complaint.<Date>get("created"), request.getDateTo()));
		}
		if (StringUtil.isNotEmpty(request.getStatus())) {
			predicates.add(cb.equal(complaint.get("status"), request.getStatus()));
		}
		
	    cq.where(predicates.toArray(new Predicate[0]));
	 
	    return em.createQuery(cq).getResultList();
	}

}
