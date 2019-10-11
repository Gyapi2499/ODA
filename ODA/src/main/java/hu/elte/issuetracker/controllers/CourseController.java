/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.controllers;

import hu.elte.issuetracker.entities.Course;
import hu.elte.issuetracker.repositories.CourseRepository;
import hu.elte.issuetracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @Autowired
    UserRepository userRepository;
    
    @PostMapping("/add")
    public ResponseEntity add(Course course){
        courseRepository.save(course);
        return ResponseEntity.ok(course);
    }
    
    @GetMapping("/get/{id}")
    public ResponseEntity get(@PathVariable int id){
        return ResponseEntity.ok(courseRepository.findById(id));
    }
    
    @GetMapping("/mainpage")
    public ResponseEntity mainpage(OrderEnum order,int page){
        switch(order){
            case NAME: return ResponseEntity.ok(courseRepository.findAllOrderByName(PageRequest.of(page-1, 10)));
            case DATE: return ResponseEntity.ok(courseRepository.findAllOrderByCreateDate(PageRequest.of(page-1, 10)));
            case NOT_FULL: return ResponseEntity.ok(courseRepository.findAllOrderByName(PageRequest.of(page-1, 10)));
        }
        return ResponseEntity.badRequest().build();
    }
    
    @PutMapping("/modify/{id}")
    public ResponseEntity modify(Course course){
        courseRepository.save(course);
        return ResponseEntity.ok(course);
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity delete(@RequestParam int id){
        courseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @PatchMapping("/apply")
    public ResponseEntity apply(@RequestParam int id,@RequestParam String email){
        courseRepository.findById(id).get().getApplicants().add(userRepository.findByEmail(email).get());
        return ResponseEntity.ok().build();
    }
       public enum OrderEnum {
           NAME,DATE,NOT_FULL
    } 
}

