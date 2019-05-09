package com.bookacourse.complaint.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.AppConstant.STATUS;
import com.bookacourse.complaint.AppConstant.USER_TYPE;
import com.bookacourse.complaint.bean.ComplaintCreateRequest;
import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.bean.CurrentUser;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.ComplaintRepository;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private ComplaintLogService complaintLogService;
    @Autowired
    private AutoForwarder autoForwarder;
    @Autowired
    private UserService userService;
    @Autowired
    private StaffService staffService;

    public List<Complaint> search(ComplaintSearchRequest request) {
        CurrentUser user = userService.currentUser();
        switch (AppConstant.USER_TYPE.valueOf(user.getType())) {
            case STUDENT: return complaintRepository.searchWithCondition(request, user.getId(), null);
            case STAFF: return complaintRepository.searchWithCondition(request, null, user.getId());
            default: ADMIN: return complaintRepository.searchWithCondition(request, null, null);
        }
    }

    public Complaint getOneById(String id) {
        return complaintRepository.getOneById(id);
    }

    public Complaint create(ComplaintCreateRequest request) {
        CurrentUser user = userService.currentUser();
        Date now = new Date();
        Complaint model = new Complaint();
        model.setId(UUID.randomUUID().toString());
        model.setTopic(request.getTopic());
        model.setContent(request.getContent());
        model.setStatus(AppConstant.STATUS.CREATED.name());
        model.setSeverity(request.getSeverity());
        model.setOwnerId(user.getId());
        model.setIncognito(request.getIncognito());
        if (request.getCategory() != null) {
            model.setCategoryId(request.getCategory().getId());
        }
        model.setCreated(now);
        model.setUpdated(now);
        Staff forwardTo = autoForwarder.forwardTo(model);
        if (forwardTo != null) {
        	model.setAssignee(forwardTo);
        }
        complaintRepository.save(model);
        complaintLogService.logCreate(model);
        autoForwarder.saveLog(model);
        return model;
    }

    public Complaint close(String id) {
        CurrentUser user = userService.currentUser();
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        Complaint before = model.snapshot();
        model.setUpdated(now);

        if (
            user.getType().equals(USER_TYPE.STUDENT.toString()) &&
            model.getStatus().equals(STATUS.CREATED.toString())
        ) {
            model.setStatus(STATUS.DONE_DELETED.toString());
            model.setAssignee(null);
        } else if (
            !user.getType().equals(USER_TYPE.STUDENT.toString()) &&
            (
                model.getStatus().equals(STATUS.CREATED.toString()) ||
                model.getStatus().equals(STATUS.TO_DO.toString()) ||
                model.getStatus().equals(STATUS.WORKING.toString())
            )
        ) {
            model.setStatus(STATUS.DONE_UNSOLVED.toString());
        } else {
            return null;
        }
        complaintRepository.save(model);
        complaintLogService.logStatusChange(before, model);
        return model;
    }

    public Complaint acknowledge(String id) {
        CurrentUser user = userService.currentUser();
        if (user.getType().equals(USER_TYPE.STUDENT.toString())) {
            return null;
        }
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        if (!model.getStatus().equals(STATUS.CREATED.toString())) {
            return null;
        }
        Complaint before = model.snapshot();
        model.setUpdated(now);
        model.setStatus(STATUS.TO_DO.toString());
        complaintRepository.save(model);
        complaintLogService.logStatusChange(before, model);
        return model;
    }

    public Complaint working(String id) {
        CurrentUser user = userService.currentUser();
        if (user.getType().equals(USER_TYPE.STUDENT.toString())) {
            return null;
        }
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        if (!model.getStatus().equals(STATUS.TO_DO.toString())) {
            return null;
        }
        Complaint before = model.snapshot();
        model.setUpdated(now);
        model.setStatus(STATUS.WORKING.toString());
        complaintRepository.save(model);
        complaintLogService.logStatusChange(before, model);
        return model;
    }

    public Complaint complete(String id) {
        CurrentUser user = userService.currentUser();
        if (user.getType().equals(USER_TYPE.STUDENT.toString())) {
            return null;
        }
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        if (!model.getStatus().equals(STATUS.WORKING.toString())) {
            return null;
        }
        Complaint before = model.snapshot();
        model.setUpdated(now);
        model.setStatus(STATUS.DONE_COMPLETED.toString());
        complaintRepository.save(model);
        complaintLogService.logStatusChange(before, model);
        return model;
    }

    public Complaint backToAdmin(String id) {
        CurrentUser user = userService.currentUser();
        if (user.getType().equals(USER_TYPE.STUDENT.toString())) {
            return null;
        }
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        if (model.getStatus().equals(STATUS.DONE_COMPLETED) ||
            model.getStatus().equals(STATUS.DONE_DELETED) ||
            model.getStatus().equals(STATUS.DONE_UNSOLVED)
        ) {
            return null;
        }
        Complaint before = model.snapshot();
        model.setUpdated(now);
        model.setStatus(STATUS.CREATED.toString());
        model.setAssignee(null);
        complaintRepository.save(model);
        complaintLogService.logAssigneeChange(before, model);
        return model;
    }

    public Complaint assignTo(String id, String staffId) {
        CurrentUser user = userService.currentUser();
        if (user.getType().equals(USER_TYPE.STUDENT.toString())) {
            return null;
        }
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        if (model.getStatus().equals(STATUS.DONE_COMPLETED) ||
                model.getStatus().equals(STATUS.DONE_DELETED) ||
                model.getStatus().equals(STATUS.DONE_UNSOLVED)
        ) {
            return null;
        }
        Complaint before = model.snapshot();
        Staff staff = staffService.getOneById(staffId);
        model.setUpdated(now);
        model.setStatus(STATUS.CREATED.toString());
        model.setAssignee(staff);
        complaintRepository.save(model);
        complaintLogService.logAssigneeChange(before, model);
        return model;
    }
}
