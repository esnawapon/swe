package com.bookacourse.complaint.service;

import com.bookacourse.complaint.bean.ReportRequest;
import com.bookacourse.complaint.model.AutoForwarderLog;
import com.bookacourse.complaint.repository.AutoForwarderLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {
    @Autowired
    private AutoForwarderLogRepository autoForwarderLogRepository;
    public List<AutoForwarderLog> autoForwarderSuccessRate(ReportRequest request) {
        return autoForwarderLogRepository.searchWithCondition(request);
    }
}
