/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.entities;

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
    
    @Column(nullable = false)
    private String description;
    
    @ManyToOne
    @JoinColumn
    private User createUser;
    
    @Column(nullable = false)
    private LocalDateTime createDate;
    
    @ManyToOne
    @JoinColumn
    private User modifyUser;
    
    @Column
    private LocalDateTime modifyDate;
    
    @Column(nullable = false)
    private String location;
    
    @Column(nullable = false)
    private LocalDateTime date;
    
    @Column(nullable = false)
    private LocalDateTime deadLine;
    
    @Column(nullable = false)
    private int maxNumber;
    
    @Column(nullable = false)
    private String image;
        
    @ManyToMany
    @JoinTable (name = "APPLICANTS_TO_COURSE")
    private List<User> applicants;
    
    @ManyToMany
    @JoinTable (name = "TEACHERS_TO_COURSE")
    private List<User> teachers;
}
