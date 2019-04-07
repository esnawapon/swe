package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, String> , ComplaintRepositoryCustom {
    @Query("select c from Complaint c where id = :id")
    public Complaint getOneById(@Param("id") String id);
}
