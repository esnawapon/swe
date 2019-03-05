package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintLogRepository extends JpaRepository<ComplaintLog, String> {
}
