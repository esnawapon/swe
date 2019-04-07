package com.bookacourse.complaint.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.model.Complaint;

@Repository
public interface ComplaintRepositoryCustom {

	List<Complaint> searchWithCondition(ComplaintSearchRequest request);
}
