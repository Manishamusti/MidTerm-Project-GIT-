package com.axis.online.food.delivery.service;

import java.util.List;

import com.axis.online.food.delivery.Responses.LoginResponse;
import com.axis.online.food.delivery.entity.Admin;


public interface AdminService {
		
		
		public String addAdmin(Admin customer);
	
		public LoginResponse loginAdmin(Admin login);
		

	
}

