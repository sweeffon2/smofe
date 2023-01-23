package it.smofe.smofehr.repositories;

import it.smofe.smofehr.dao.Holidays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")

public interface HolidaysRepository extends JpaRepository<Holidays, Integer>, JpaSpecificationExecutor<Holidays> {

}