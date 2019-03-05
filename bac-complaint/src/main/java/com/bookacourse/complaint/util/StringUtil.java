package com.bookacourse.complaint.util;

import com.google.gson.Gson;

public class StringUtil {
    public static Gson GSON = new Gson();
    public static boolean isEmpty(String text) {
        return text == null || text.trim().length() == 0;
    }
    public static boolean isNotEmpty(String text) {
        return !isEmpty(text);
    }
    public static String toJsonString(Object obj) {
        return GSON.toJson(obj);
    }
}
