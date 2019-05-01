package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.ComplaintLog;
import com.bookacourse.complaint.repository.ComplaintLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ComplaintLogService {
    @Autowired
    private ComplaintLogRepository complaintLogRepository;

    public List<ComplaintLog> findAllByComplaintId(String complaintId) {
        return complaintLogRepository.findAllByComplaintId(complaintId);
    }

    public ComplaintLog logCreate(Complaint complaint) {
        Date now = new Date();
        ComplaintLog model = new ComplaintLog();
        model.setId(UUID.randomUUID().toString());
        model.setComplaintId(complaint.getId());
        model.setType(AppConstant.LOG_TYPE.CREATE.name());
        model.setStatusTo(complaint.getStatus());
        model.setAssigneeTo(complaint.getAssignee());
        model.setActionStudentId(complaint.getOwnerId());
        model.setCreated(now);
        model.setUpdated(now);
        complaintLogRepository.save(model);
        return model;
    }
}
