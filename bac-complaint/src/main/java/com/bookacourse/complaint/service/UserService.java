package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.CurrentUserBean;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public String getCurrentUserId() {
        return "es.nawapon";
    }
    public AppConstant.USER_TYPE getCurrentUserType() {
        return AppConstant.USER_TYPE.STUDENT;
    }

    public CurrentUserBean getCurrentUser() {
        CurrentUserBean currentUser = new CurrentUserBean();
        currentUser.setType(AppConstant.USER_TYPE.STUDENT.name());
        currentUser.setId("es.nawapon");
        currentUser.setName("Nawapon Rattanakansaeng");
        return currentUser;
    }
}
