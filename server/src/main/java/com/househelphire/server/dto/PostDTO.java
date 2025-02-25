package com.househelphire.server.dto;

import lombok.Data;

@Data
public class PostDTO {

    private String profile;
    private String type;
    private String description;
    private String experience;
    private String[] skills;
    private String salary;
    private String location;
    private String contact;
}
