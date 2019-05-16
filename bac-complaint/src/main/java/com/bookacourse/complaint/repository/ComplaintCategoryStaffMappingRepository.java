package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintCategoryStaffMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintCategoryStaffMappingRepository extends JpaRepository<ComplaintCategoryStaffMapping, String> {
    @Query("select c from ComplaintCategoryStaffMapping c where c.staffId = :staffId")
    public List<ComplaintCategoryStaffMapping> findByStaffId(@Param("staffId") String staffId);

    @Query("select c from ComplaintCategoryStaffMapping c where c.categoryId= :categoryId")
    public List<ComplaintCategoryStaffMapping> findByCategoryId(@Param("categoryId") String categoryId);
}
