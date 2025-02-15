package com.househelphire.server.service;

import com.househelphire.server.dto.PostDTO;
import com.househelphire.server.model.PostModel;

import java.util.List;

public interface PostService {
    public PostModel savePost(PostDTO postDTO);
    public List<PostModel> getAllPosts();
}
