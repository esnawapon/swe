package com.bookacourse.complaint.repository;

import com.bookacourse.complaint.model.ComplaintLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintLogRepository extends JpaRepository<ComplaintLog, String> {
    @Query("select log from ComplaintLog log where log.complaintId = :complaintId order by log.created desc")
    public List<ComplaintLog> findAllByComplaintId(@Param("complaintId") String complaintId);

    @Query("select log from ComplaintLog log where log.complaintId = :complaintId and log.type = :type order by log.created desc")
    public List<ComplaintLog> findAllByComplaintIdAndType(@Param("complaintId") String complaintId, @Param("type") String type);
}
