package com.bookacourse.complaint.service;

import com.bookacourse.complaint.bean.StaffMapping;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AutoForwarder {
    private static final double CATEGORY_FACTOR = 2d;
    private static final double TOPIC_FACTOR = 1d;
    private static final double CONTENT_FACTOR = 1d;
    @Autowired
    private StaffService staffService;
    @Autowired
    private StaffMappingService staffMappingService;
    public Staff forwardTo(Complaint complaint) {
        List<StaffMapping> mappings = staffMappingService.search();
        Map<String, Double> scoreMap = new HashMap();
        mappings.forEach(mapping -> {
            int matchedCategory = (int) mapping.getCategories().stream().filter(category -> category.getId().equals(complaint.getCategoryId())).count();
            int matchedTopic = (int) mapping.getKeywords().stream().filter(keyword -> complaint.getTopic().toUpperCase().contains(keyword.toUpperCase())).count();
            int matchedContent = (int) mapping.getKeywords().stream().filter(keyword -> complaint.getContent().toUpperCase().contains(keyword.toUpperCase())).count();
            Double score = (CATEGORY_FACTOR * matchedCategory) + (TOPIC_FACTOR * matchedTopic) + (CONTENT_FACTOR * matchedContent);
            scoreMap.put(mapping.getId(), score);
        });

        Map.Entry<String, Double> highest = scoreMap.entrySet().stream()
                .reduce((a, b) -> a.getValue() > b.getValue() ? a : b)
                .get();
        if (highest.getValue().equals(0d)) {
            return null;
        }
        return staffService.getOneById(highest.getKey());
    }
}
