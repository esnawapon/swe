package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintCategoryRepository extends JpaRepository<ComplaintCategory, String> {
    @Query("select c from ComplaintCategory c where id = :id")
    public ComplaintCategory getOneById(@Param("id") String id);
}
