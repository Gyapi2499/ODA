/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private boolean enabled;
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @Column
    private String avatar;
    
    @Column(nullable = false)
    private String name;
    
    @Column
    @ManyToMany(mappedBy="applicants")
    @JsonIgnore
    private List<Course> visitedCourses;
    
    @Column
    @ManyToMany(mappedBy="teachers")
    @JsonIgnore
    private List<Course> teachedCourses;
    
    public enum Role {
        ROLE_USER, ROLE_TEACHER, ROLE_ADMIN
    }
}
