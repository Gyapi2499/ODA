/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.oda.repositories;

import hu.elte.oda.entities.Course;
import java.util.List;
import javax.persistence.NamedNativeQuery;
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
    @Query("select c from Course c Order by c.id")
    List<Course> findAllOrderById(Pageable pageable);
    @Query("select c from Course c Order by c.name")
    List<Course> findAllOrderByName(Pageable pageable);
    @Query("SELECT c FROM Course c where size(c.applicants)<c.maxNumber")
    List<Course> findNotFull(Pageable pageable);
    //TODO bőviteni hogy leírásban is keressen
    List<Course> findAllByNameContaining(String queryString);
    
}
