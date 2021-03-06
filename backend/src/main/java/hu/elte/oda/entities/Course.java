/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.oda.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 *
 * @author Máté
 */


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, length=2048)
    private String description;
    
    @ManyToOne
    @JoinColumn
    private User createUser;
    
    @Column(name="CreateDate",nullable = false)
    private LocalDateTime createDate;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User modifyUser;
    
    @Column
    @JsonIgnore
    private LocalDateTime modifyDate;
    
    @Column(nullable = false)
    private String location;
    
    @Column(nullable = false)
    private String date;
    
    @Column(nullable = false)
    private LocalDateTime deadLine;
    
    @Column(nullable = false)
    private int maxNumber;
    
    @Column()
    private String image;
        
    @ManyToMany
    @JoinTable (name = "APPLICANTS_TO_COURSE")
    private List<User> applicants;
    
    @ManyToMany
    @JoinTable (name = "TEACHERS_TO_COURSE")
    private List<User> teachers;
}
