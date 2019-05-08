package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.ComplaintCommentCreateRequest;
import com.bookacourse.complaint.bean.CurrentUser;
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

    public ComplaintLog logStatusChange(Complaint before, Complaint after) {
        ComplaintLog model = newLog(before.getId());
        model.setType(AppConstant.LOG_TYPE.STATUS_CHANGE.name());
        model.setStatusFrom(before.getStatus());
        model.setStatusTo(after.getStatus());
        model.setAssigneeFrom(before.getStaff());
        model.setAssigneeTo(after.getStaff());
        complaintLogRepository.save(model);
        return model;
    }

    public ComplaintLog logCreate(Complaint complaint) {
        ComplaintLog model = newLog(complaint.getId());
        model.setType(AppConstant.LOG_TYPE.CREATE.name());
        model.setStatusTo(complaint.getStatus());
        model.setAssigneeTo(complaint.getStaff());
        complaintLogRepository.save(model);
        return model;
    }

    public ComplaintLog createComment(String complaintId, ComplaintCommentCreateRequest request) {
        ComplaintLog model = newLog(complaintId);
        model.setType(AppConstant.LOG_TYPE.COMMENT.name());
        model.setComment(request.getComment());
        complaintLogRepository.save(model);
        return model;
    }

    private ComplaintLog newLog(String complaintId) {
        CurrentUser user = userService.currentUser();
        Date now = new Date();
        ComplaintLog model = new ComplaintLog();
        model.setId(UUID.randomUUID().toString());
        model.setComplaintId(complaintId);
        model.setCreated(now);
        model.setUpdated(now);
        switch (AppConstant.USER_TYPE.valueOf(user.getType())) {
            case ADMIN: model.setActionAdmin(adminRepository.getOne(user.getId())); break;
            case STAFF: model.setActionStaff(staffRepository.getOne(user.getId())); break;
            case STUDENT: model.setActionStudentId(user.getId()); break;
        }
        return model;
    }
}
