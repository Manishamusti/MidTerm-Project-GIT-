package com.axis.online.food.delivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.online.food.delivery.entity.Restaurants;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurants, Integer> {

}
