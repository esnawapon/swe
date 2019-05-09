package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.bean.ReportRequest;
import com.bookacourse.complaint.model.AutoForwarderLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class AutoForwarderLogRepositoryCustomerImpl implements AutoForwarderLogRepositoryCustom {
    @Autowired
    private EntityManager em;

    @Override
    public List<AutoForwarderLog> searchWithCondition(ReportRequest request) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<AutoForwarderLog> cq = cb.createQuery(AutoForwarderLog.class);
        Root<AutoForwarderLog> log = cq.from(AutoForwarderLog.class);
        List<Predicate> predicates = new ArrayList<>();
        if (request.getDateFrom() != null) {
            predicates.add(cb.greaterThanOrEqualTo(log.<Date>get("created"), request.getDateFrom()));
        }
        if (request.getDateTo() != null) {
            predicates.add(cb.lessThanOrEqualTo(log.<Date>get("created"), request.getDateTo()));
        }
        cq.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(cq).getResultList();
    }
}
