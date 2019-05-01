package com.bookacourse.complaint.service;

import com.bookacourse.complaint.AppConstant;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public String getCurrentUserId() {
        return "es.nawapon";
    }
    public AppConstant.USER_TYPE getCurrentUserType() {
        return AppConstant.USER_TYPE.STUDENT;
    }
}
