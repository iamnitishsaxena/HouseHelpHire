package com.househelphire.server.service;

import com.househelphire.server.dao.PostDao;
import com.househelphire.server.dto.PostDTO;
import com.househelphire.server.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();
        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setSalary(postDTO.getSalary());
        postModel.setSkills(postDTO.getSkills());
        postModel.setType(postDTO.getType());
        postModel.setExperience(postDTO.getExperience());
        postModel.setLocation(postDTO.getLocation());

        return postDao.save(postModel);
    }

    @Override
    public List<PostModel> getAllPosts() {
        return postDao.findAll();
    }
}
