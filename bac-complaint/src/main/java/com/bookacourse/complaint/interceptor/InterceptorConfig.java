//package com.bookacourse.complaint.interceptor;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class InterceptorConfig implements WebMvcConfigurer {
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        AuthenticationInterceptor apiAuth = new AuthenticationInterceptor();
//        registry.addInterceptor(apiAuth)
//                .addPathPatterns("/api/**")
//                .excludePathPatterns("/api/user/**", "/error");
//
//        AuthenticationInterceptor viewAuth = new AuthenticationInterceptor(true);
//        registry.addInterceptor(viewAuth)
//                .excludePathPatterns("/user/**", "/api/**", "/assets/**", "/error");
//
//        ApiInterceptor api = new ApiInterceptor();
//        registry.addInterceptor(api)
//                .addPathPatterns("/api/**");
//    }
//}
