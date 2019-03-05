package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintKeywordStaffMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintKeywordStaffMappingRepository extends JpaRepository<ComplaintKeywordStaffMapping, String> {
}
