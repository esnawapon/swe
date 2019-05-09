package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.AutoForwarderLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoForwarderLogRepository extends JpaRepository<AutoForwarderLog, String>, AutoForwarderLogRepositoryCustom {
}
