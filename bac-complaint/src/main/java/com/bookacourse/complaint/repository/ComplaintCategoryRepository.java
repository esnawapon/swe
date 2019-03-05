package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintCategoryRepository extends JpaRepository<ComplaintCategory, String> {
}
