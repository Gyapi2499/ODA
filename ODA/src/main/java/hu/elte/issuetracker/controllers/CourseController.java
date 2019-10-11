/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.controllers;

import hu.elte.issuetracker.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author palii
 */
@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseRepository courseRepository;
    
    @PostMapping("/add")
    public ResponseEntity add(){
        return null;
    }
    
    @GetMapping("/get/{id}")
    public ResponseEntity get(){
        return null;
    }
    
    @GetMapping("/mainpage")
    public ResponseEntity mainpage(){
        return null;
    }
    
    @PatchMapping("/modify/{id}")
    public ResponseEntity modify(){
        return null;
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(){
        return null;
    }
    
    @PatchMapping("/apply")
    public ResponseEntity apply(){
      return null;
    }
    
}
