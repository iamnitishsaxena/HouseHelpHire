package com.househelphire.server.dao;

import com.househelphire.server.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModel, String> {
}
