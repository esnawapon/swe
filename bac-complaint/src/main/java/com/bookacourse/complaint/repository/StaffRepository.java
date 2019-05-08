package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<Staff, String> {
    @Query("select s from Staff s where id = :id")
    public Staff getOneById(@Param("id") String id);
}
