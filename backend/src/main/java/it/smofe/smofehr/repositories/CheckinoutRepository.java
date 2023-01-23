package it.smofe.smofehr.repositories;

import it.smofe.smofehr.dao.CheckInOutId;
import it.smofe.smofehr.dao.Checkinout;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
public interface CheckinoutRepository extends JpaRepository<Checkinout, CheckInOutId>, JpaSpecificationExecutor<Checkinout> {

    List<Checkinout> findAllByIdem_UseridAndIdem_ChecktimeBetween(
            int userid,
            @DateTimeFormat(pattern = "yyyy-MM-dd") Date notBefore,
            @DateTimeFormat(pattern = "yyyy-MM-dd") Date notAfter) ;
}