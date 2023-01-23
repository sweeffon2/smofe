package it.smofe.smofehr.repositories;

import it.smofe.smofehr.dao.Userinfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*")

public interface UserinfoRepository extends JpaRepository<Userinfo, Integer>, JpaSpecificationExecutor<Userinfo> {

    Page<Userinfo> findAllByNameLike(String name, Pageable page) ;
}