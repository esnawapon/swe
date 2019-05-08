package com.bookacourse.complaint.bean;

import com.bookacourse.complaint.model.ComplaintCategory;
import com.bookacourse.complaint.model.Staff;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Data
public class StaffMapping {
    @NotNull
    private String id;
    private String firstname;
    private String lastname;
    private List<ComplaintCategory> categories;
    private List<String> keywords;
    public StaffMapping() {}
    public StaffMapping(Staff staff, ComplaintCategory category, String keyword) {
        this.id = staff.getId();
        this.firstname = staff.getFirstname();
        this.lastname = staff.getLastname();
        this.keywords = new ArrayList();
        this.categories = new ArrayList();
        if (keyword != null) {
            this.keywords.add(keyword);
        }
        if (category != null) {
            this.categories.add(category);
        }
    }
}
