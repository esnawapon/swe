package com.bookacourse.complaint.service;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

public class QueryEntity {
    private StringBuilder sql;
    private List<Object> params;

    QueryEntity() {
        this(null);
    }
    QueryEntity(String initSql) {
        sql = new StringBuilder(initSql == null ? "" : initSql);
        params = new ArrayList();
    }
    public QueryEntity appendSql(String text) {
        sql.append(text);
        return this;
    }
    public QueryEntity addParam(Object value) {
        params.add(value);
        return this;
    }
    public String getSql() {
        return sql.toString();
    }
    public Object[] getParams() {
        return params.toArray();
    }
}
