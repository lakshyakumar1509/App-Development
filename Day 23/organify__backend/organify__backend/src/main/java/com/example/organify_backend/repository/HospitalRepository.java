package com.example.organify_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.organify_backend.model.Hospital;

public interface HospitalRepository  extends JpaRepository<Hospital, Long>{

}
