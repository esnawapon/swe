package com.bookacourse.complaint.service;

import com.bookacourse.complaint.bean.StaffMapping;
import com.bookacourse.complaint.model.ComplaintCategory;
import com.bookacourse.complaint.model.ComplaintCategoryStaffMapping;
import com.bookacourse.complaint.model.ComplaintKeywordStaffMapping;
import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.ComplaintCategoryStaffMappingRepository;
import com.bookacourse.complaint.repository.ComplaintKeywordStaffMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StaffMappingService {
    @Autowired
    private StaffService staffService;
    @Autowired
    private ComplaintCategoryService complaintCategoryService;
    @Autowired
    private ComplaintKeywordStaffMappingRepository keywordMappingRepository;
    @Autowired
    private ComplaintCategoryStaffMappingRepository categoryMappingRepository;

    public List<StaffMapping> search() {
        Map<String, StaffMapping> resultMap = new HashMap();
        List<ComplaintKeywordStaffMapping> keywords = keywordMappingRepository.findAll();
        List<ComplaintCategoryStaffMapping> categories = categoryMappingRepository.findAll();
        for (ComplaintKeywordStaffMapping keyword: keywords) {
            if (resultMap.containsKey(keyword.getStaffId())) {
                resultMap.get(keyword.getStaffId()).getKeywords().add(keyword.getKeyword());
            } else {
                Staff staff = staffService.getOneById(keyword.getStaffId());
                resultMap.put(keyword.getStaffId(), new StaffMapping(staff, null, keyword.getKeyword()));
            }
        }
        for (ComplaintCategoryStaffMapping category: categories) {
            ComplaintCategory complaintCategory = complaintCategoryService.getOneById(category.getCategoryId());
            if (resultMap.containsKey(category.getStaffId())) {
                resultMap.get(category.getStaffId()).getCategories().add(complaintCategory);
            } else {
                Staff staff = staffService.getOneById(category.getStaffId());
                resultMap.put(category.getStaffId(), new StaffMapping(staff, complaintCategory, null));
            }
        }
        return new ArrayList<>(resultMap.values());
    }

    public StaffMapping getOneByStaffId(String staffId) {
        List<ComplaintKeywordStaffMapping> keywords = keywordMappingRepository.findByStaffId(staffId);
        List<ComplaintCategoryStaffMapping> categories = categoryMappingRepository.findByStaffId(staffId);
        if (keywords.isEmpty() && categories.isEmpty()) {
            return null;
        }
        Staff staff = staffService.getOneById(staffId);
        StaffMapping result = new StaffMapping(staff, null, null);
        result.getCategories().addAll(
            categories.stream()
            .map(each -> complaintCategoryService.getOneById(each.getCategoryId()))
            .collect(Collectors.toList())
        );
        result.getKeywords().addAll(
            keywords.stream()
            .map(each -> each.getKeyword())
            .collect(Collectors.toList())
        );
        return result;
    }

    public Staff deleteById(String staffId) {
        Staff staff = staffService.getOneById(staffId);
        if (staff == null) {
            return null;
        }
        List<ComplaintKeywordStaffMapping> keywords = keywordMappingRepository.findByStaffId(staffId);
        List<ComplaintCategoryStaffMapping> categoies = categoryMappingRepository.findByStaffId(staffId);
        if (!keywords.isEmpty()) {
            keywordMappingRepository.deleteAll(keywords);
        }
        if (!categoies.isEmpty()) {
            categoryMappingRepository.deleteAll(categoies);
        }
        return staff;
    }

    public StaffMapping
    create(StaffMapping request) {
        Date now = new Date();
        List<ComplaintKeywordStaffMapping> keywords = new ArrayList();
        List<ComplaintCategoryStaffMapping> categories = new ArrayList();
        if (request.getKeywords() != null && !request.getKeywords().isEmpty()) {
            keywords.addAll(
                request.getKeywords().stream().map(each -> {
                    ComplaintKeywordStaffMapping model = new ComplaintKeywordStaffMapping();
                    model.setId(UUID.randomUUID().toString());
                    model.setKeyword(each);
                    model.setPriority(0);
                    model.setStaffId(request.getId());
                    model.setUpdated(now);
                    model.setCreated(now);
                    return model;
                }).collect(Collectors.toList())
            );
        }
        if (request.getCategories() != null && !request.getCategories().isEmpty()) {
            categories.addAll(
                request.getCategories().stream().map(each -> {
                    ComplaintCategoryStaffMapping model = new ComplaintCategoryStaffMapping();
                    model.setId(UUID.randomUUID().toString());
                    model.setCategoryId(each.getId());
                    model.setPriority(0);
                    model.setStaffId(request.getId());
                    model.setUpdated(now);
                    model.setCreated(now);
                    return model;
                }).collect(Collectors.toList())
            );
        }
        if (!keywords.isEmpty()) {
            keywordMappingRepository.saveAll(keywords);
        }
        if (!categories.isEmpty()) {
            categoryMappingRepository.saveAll(categories);
        }
        return request;
    }
    public StaffMapping update(StaffMapping request) {
        deleteById(request.getId());
        create(request);
        return request;
    }
}
