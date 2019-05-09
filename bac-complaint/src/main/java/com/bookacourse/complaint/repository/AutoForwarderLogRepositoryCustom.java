package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.bean.ReportRequest;
import com.bookacourse.complaint.model.AutoForwarderLog;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AutoForwarderLogRepositoryCustom {
    List<AutoForwarderLog> searchWithCondition(ReportRequest request);
}
