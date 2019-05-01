package com.bookacourse.complaint.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
    public static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
    public static final SimpleDateFormat TIMESTAMP_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    public static String format(Date date) {
        if (date == null) return null;
        return DATE_FORMAT.format(date);
    }
    public static String formatTimestamp(Date date) {
        if (date == null) return null;
        return TIMESTAMP_FORMAT.format(date);
    }
}
