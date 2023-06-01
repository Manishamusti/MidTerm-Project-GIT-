package com.axis.online.food.delivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.axis.online.food.delivery.Responses.LoginResponse;
import com.axis.online.food.delivery.entity.Admin;
import com.axis.online.food.delivery.repository.AdminRespository;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminRespository customerRepository;
	
	@Override
	public String addAdmin(Admin customer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoginResponse loginAdmin(Admin login) {
	    String msg = "";
	    Admin admin1 = customerRepository.findByEmail(login.getEmail());
	    if (admin1 != null) {
	        String password = login.getPassword();
	        String databasePassword = admin1.getPassword(); // Get the encoded password from the database
	      
	        boolean isPwdRight =  password.equals(databasePassword);
	        if (isPwdRight) {
	            // Password matches, perform additional logic if needed
	            return new LoginResponse("Login Success", true);
	        } else {
	            return new LoginResponse("Invalid password", false);
	        }
	    } else {
	        return new LoginResponse("Email not found", false);
	    }
	}

}
