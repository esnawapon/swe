package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.ComplaintCommentCreateRequest;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.ComplaintLog;
import com.bookacourse.complaint.repository.AdminRepository;
import com.bookacourse.complaint.repository.ComplaintLogRepository;
import com.bookacourse.complaint.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ComplaintLogService {
    @Autowired
    private ComplaintLogRepository complaintLogRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private StaffRepository staffRepository;

    public List<ComplaintLog> findAllByComplaintId(String complaintId) {
        return complaintLogRepository.findAllByComplaintId(complaintId);
    }

    public List<ComplaintLog> findAllCommentsByComplaintId(String complaintId) {
        return complaintLogRepository.findAllByComplaintIdAndType(complaintId, AppConstant.LOG_TYPE.COMMENT.name());
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

    public ComplaintLog createComment(String complaintId, ComplaintCommentCreateRequest request) {
        Date now = new Date();
        ComplaintLog model = new ComplaintLog();
        model.setId(UUID.randomUUID().toString());
        model.setComplaintId(complaintId);
        model.setType(AppConstant.LOG_TYPE.COMMENT.name());
        String userId = userService.getCurrentUserId();
        switch (userService.getCurrentUserType()) {
            case ADMIN: model.setActionAdmin(adminRepository.getOne(userId)); break;
            case STAFF: model.setActionStaff(staffRepository.getOne(userId)); break;
            case STUDENT: model.setActionStudentId(userService.getCurrentUserId()); break;
        }
        model.setComment(request.getComment());
        model.setCreated(now);
        model.setUpdated(now);
        complaintLogRepository.save(model);
        return model;
    }
}
