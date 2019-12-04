/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.oda.controllers;

import hu.elte.oda.entities.User;
import hu.elte.oda.repositories.UserRepository;
import hu.elte.oda.security.AuthenticatedUser;
import hu.elte.oda.services.ImageService;
import java.util.Optional;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author KeresztiKrisztián
 */
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired 
    private AuthenticatedUser authenticatedUser;
    
    @Autowired 
    private ImageService imageService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByEmail(user.getEmail());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity login() {
      return ResponseEntity.ok(authenticatedUser.getUser());
    } 
    
    @GetMapping("/users")
    public ResponseEntity users(){
        return ResponseEntity.ok(userRepository.findAll());
    }
   
   @PatchMapping("/set")
   public ResponseEntity set(@RequestParam String email){
        if(authenticatedUser.getUser().getRole()==User.Role.ROLE_ADMIN){
            User user = userRepository.findByEmail(email).get();
            if(user.getRole()==User.Role.ROLE_USER){
                user.setRole(User.Role.ROLE_TEACHER);
            }else{
                user.setRole(User.Role.ROLE_USER);
            }
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
   }
   @PostMapping(path="/avatar",consumes = "multipart/form-data")
   public ResponseEntity avatar(MultipartFile avatar){
      String path=imageService.upload(avatar);
      if(path.equals("")){
        authenticatedUser.getUser().setAvatar(path);
        userRepository.save(authenticatedUser.getUser());
        return ResponseEntity.ok().build();
      }else{
          return ResponseEntity.badRequest().build();
      }
   }
}
