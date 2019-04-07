package com.bookacourse.complaint.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.ComplaintCreateRequest;
import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.ComplaintRepository;
import com.bookacourse.complaint.util.DateUtil;
import com.bookacourse.complaint.util.StringUtil;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private AutoForwarder autoForwarder;
    @Autowired
    private JdbcTemplate jdbc;
    public List<Complaint> search(ComplaintSearchRequest request) {
        QueryEntity query = genSqlForSearch(request);
//        List<Complaint> result = jdbc.query(query.getSql(), query.getParams(), new BeanPropertyRowMapper(Complaint.class));
        List<Complaint> result = complaintRepository.searchWithCondition(request);
        return result;
    }

    public Complaint getOneById(String id) {
        return complaintRepository.getOneById(id);
    }

    private QueryEntity genSqlForSearch(ComplaintSearchRequest request) {
        QueryEntity query = new QueryEntity("select * from complaint where true");
        if (StringUtil.isNotEmpty(request.getKeyword())) query.appendSql(" and lower(topic) like ?").addParam("%" + request.getKeyword().toLowerCase().trim() + "%");
        if (StringUtil.isNotEmpty(request.getCategoryId())) query.appendSql(" and category_id = ?").addParam(request.getCategoryId());
        if (request.getDateFrom() != null) query.appendSql(" and date(created) >= to_date(?, 'YYYY-MM-DD')").addParam(DateUtil.format(request.getDateFrom()));
        if (request.getDateTo() != null) query.appendSql(" and date(created) <= to_date(?, 'YYYY-MM-DD')").addParam(DateUtil.format(request.getDateTo()));
        if (StringUtil.isNotEmpty(request.getStatus())) query.appendSql(" and status = ?").addParam(request.getStatus());
        return query;
    }

    public Complaint create(ComplaintCreateRequest request) {
        Date now = new Date();
        Complaint model = new Complaint();
        model.setId(UUID.randomUUID().toString());
        model.setTopic(request.getTopic());
        model.setContent(request.getContent());
        model.setStatus(AppConstant.STATUS.CREATED.name());
        model.setSeverity(request.getSeverity());
        model.setOwnerId(userService.getCurrentUserId());
        model.setIncognito(request.getIncognito());
        model.setCategoryId(request.getCategory().getId());
        model.setCreated(now);
        model.setUpdated(now);
        Staff forwardTo = autoForwarder.forwardTo(model);
        if (forwardTo != null) {
//            model.setAssigneeId(forwardTo.getId());
        	model.setStaff(forwardTo);
        }
        complaintRepository.save(model);
        return model;
    }
}
