package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.CurrentUser;
import com.bookacourse.complaint.bean.LoginRequest;
import com.bookacourse.complaint.model.Admin;
import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.AdminRepository;
import com.bookacourse.complaint.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;

@Service
public class UserService {
    boolean mockStudent = false;
    boolean mockStaff = false;
    boolean mockAdmin = false;
    @Autowired
    private StaffRepository staffRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private HttpServletRequest httpServletRequest;

    public CurrentUser currentUser() {
        if (mockStudent) {
            CurrentUser user = new CurrentUser();
            user.setId("es.nawapon");
            user.setName("es.nawapon");
            user.setType("STUDENT");
            return user;
        }
        if (mockStaff) {
            CurrentUser user = new CurrentUser();
            user.setId("10001");
            user.setName("Jeanne James");
            user.setType("STAFF");
            return user;
        }
        if (mockAdmin) {
            CurrentUser user = new CurrentUser();
            user.setId("10001");
            user.setName("Admin");
            user.setType("ADMIN");
            return user;
        }
        return (CurrentUser) httpServletRequest.getSession().getAttribute("user");
    }

    public Staff getStaffById(String id) {
        return staffRepository.getOne(id);
    }

    public Admin getAdminById(String id) {
        return adminRepository.getOne(id);
    }

    public CurrentUser login(LoginRequest request) {
        Admin admin = null;
        Staff staff = null;
        String student = null;
        switch (AppConstant.USER_TYPE.valueOf(request.getType())) {
            case ADMIN: admin = getAdminById(request.getId()); break;
            case STAFF: staff = getStaffById(request.getId()); break;
            case STUDENT: student = request.getId(); break;
            default: return null;
        }
        CurrentUser user = new CurrentUser();
        user.setId(request.getId());
        user.setType(request.getType());
        if (admin != null) {
            user.setName(admin.getFirstname() + " " + admin.getLastname());
        } else if (staff != null) {
            user.setName(staff.getFirstname() + " " + staff.getLastname());
        } else {
            user.setName(student);
        }
        return user;
    }
}
