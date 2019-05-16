package com.bookacourse.complaint.service;

import com.bookacourse.complaint.bean.ComplaintCategoryCreateUpdateRequest;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.ComplaintCategory;
import com.bookacourse.complaint.model.ComplaintCategoryStaffMapping;
import com.bookacourse.complaint.repository.ComplaintCategoryRepository;
import com.bookacourse.complaint.repository.ComplaintCategoryStaffMappingRepository;
import com.bookacourse.complaint.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ComplaintCategoryService {
    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private ComplaintCategoryStaffMappingRepository staffMappingRepository;
    @Autowired
    private ComplaintCategoryRepository repository;
    public List<ComplaintCategory> search() {
        return repository.findAll();
    }
    public ComplaintCategory getOneById(String id) {
        return repository.getOneById(id);
    }

    public ComplaintCategory deleteById(String id) {
        ComplaintCategory model = getOneById(id);
        if (model == null) {
            return null;
        }
        List<Complaint> complaints = complaintRepository.findByCategoryId(id);
        if (!complaints.isEmpty()) {
            for (Complaint each: complaints) {
                each.setCategoryId(null);
            }
            complaintRepository.saveAll(complaints);
        }
        List<ComplaintCategoryStaffMapping> staffMappings = staffMappingRepository.findByCategoryId(id);
        if (!complaints.isEmpty()) {
            staffMappingRepository.deleteAll(staffMappings);
        }
        repository.delete(model);
        return model;
    }

    public ComplaintCategory create(ComplaintCategoryCreateUpdateRequest request) {
        Date now = new Date();
        ComplaintCategory model = new ComplaintCategory();
        model.setId(UUID.randomUUID().toString());
        model.setName(request.getName());
        model.setDefaultContent(request.getDefaultContent());
        model.setDefaultTopic(request.getDefaultTopic());
        model.setCreated(now);
        model.setUpdated(now);
        repository.save(model);
        return model;
    }
    public ComplaintCategory update(ComplaintCategoryCreateUpdateRequest request) {
        Date now = new Date();
        ComplaintCategory model = getOneById(request.getId());
        model.setName(request.getName());
        model.setDefaultContent(request.getDefaultContent());
        model.setDefaultTopic(request.getDefaultTopic());
        model.setUpdated(now);
        repository.save(model);
        return model;
    }
}

