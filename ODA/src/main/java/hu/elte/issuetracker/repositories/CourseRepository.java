/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.repositories;

import hu.elte.issuetracker.entities.Course;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author palii
 */
@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, Integer> {
    List<Course> findAllOrderByCreateDate(Pageable pageable);
    List<Course> findAllOrderByName(Pageable pageable);
    /*@Query("ide kell majd egy query ami kilistázza a nem betelt kurzusokat")
    List<Course> findNotFull(Pageable pageable);*/
    //TODO bőviteni hogy leírásban is keressen
    List<Course> findAllByNameContaining(String queryString);
    
}
