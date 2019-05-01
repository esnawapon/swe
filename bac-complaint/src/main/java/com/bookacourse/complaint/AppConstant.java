package com.bookacourse.complaint;

public class AppConstant {
    public enum STATUS {
        CREATED, TO_DO, WORKING, DONE_COMPLETED, DONE_DELETED, DONE_UNSOLVED
    }
    public enum LOG_TYPE {
        CREATE, STATUS_CHANGE, ASSIGNEE_CHANGE, COMMENT
    }
    public enum USER_TYPE {
        STUDENT, STAFF, ADMIN
    }
}
