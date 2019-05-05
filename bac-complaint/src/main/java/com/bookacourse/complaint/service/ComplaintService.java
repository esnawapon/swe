package com.bookacourse.complaint.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.bookacourse.complaint.bean.CurrentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.ComplaintCreateRequest;
import com.bookacourse.complaint.bean.ComplaintSearchRequest;
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

    public List<Complaint> search(ComplaintSearchRequest request) {
        List<Complaint> result = complaintRepository.searchWithCondition(request);
        return result;
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
        model.setCategoryId(request.getCategory().getId());
        model.setCreated(now);
        model.setUpdated(now);
        Staff forwardTo = autoForwarder.forwardTo(model);
        if (forwardTo != null) {
        	model.setAssignee(forwardTo);
        }
        complaintRepository.save(model);
        complaintLogService.logCreate(model);
        return model;
    }

    public Complaint close(String id) {
        Date now = new Date();
        Complaint model = complaintRepository.getOneById(id);
        Complaint before = model.snapshot();
        model.setAssignee(null);
        model.setStatus(AppConstant.STATUS.DONE_DELETED.toString());
        model.setUpdated(now);
        complaintRepository.save(model);
        complaintLogService.logStatusChange(before, model);
        return model;
    }
}
