package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintCategoryStaffMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintCategoryStaffMappingRepository extends JpaRepository<ComplaintCategoryStaffMapping, String> {
}
