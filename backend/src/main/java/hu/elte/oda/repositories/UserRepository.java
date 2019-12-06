/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.oda.repositories;

import hu.elte.oda.entities.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author KeresztiKrisztián
 */
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String username);
    @Query("select u from User u where u.role='ROLE_TEACHER' or u.role='ROLE_ADMIN'")
    List<User> findAllTeacher();
}
