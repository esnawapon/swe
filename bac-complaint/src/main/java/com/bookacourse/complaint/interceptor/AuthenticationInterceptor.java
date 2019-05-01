package com.bookacourse.complaint.interceptor;

import com.bookacourse.complaint.bean.CurrentUser;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;

public class AuthenticationInterceptor extends HandlerInterceptorAdapter {
    private boolean redirectToLogin = false;

    public AuthenticationInterceptor() {
        super();
    }

    public AuthenticationInterceptor(boolean redirectToLogin) {
        super();
        this.redirectToLogin = redirectToLogin;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String path = request.getRequestURI();
        Object user = request.getSession().getAttribute("user");
        if (user != null && user instanceof CurrentUser) {
            return super.preHandle(request, response, handler);
        } else if (this.redirectToLogin) {
            response.sendRedirect("/user/login?target=" + URLEncoder.encode(path, "UTF-8"));
            return false;
        } else {
            response.sendError(HttpStatus.UNAUTHORIZED.value());
            return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        super.afterCompletion(request, response, handler, ex);
    }
}
