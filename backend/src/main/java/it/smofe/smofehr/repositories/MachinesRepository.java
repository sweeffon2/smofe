package it.smofe.smofehr.repositories;

import it.smofe.smofehr.dao.Machines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")

public interface MachinesRepository extends JpaRepository<Machines, Integer>, JpaSpecificationExecutor<Machines> {

}