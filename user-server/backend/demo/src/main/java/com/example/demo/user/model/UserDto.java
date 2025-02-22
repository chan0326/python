package com.example.demo.user.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class UserDto {
    private Long id;
    private Long addressId;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;
    private String regDate;
    private String modDate;
    private String token;

}
