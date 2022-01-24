package com.publication.management.backend.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.publication.management.backend.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
    
}
