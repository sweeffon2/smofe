package it.smofe.smofehr.dao;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "CHECKINOUT")
public class Checkinout implements Serializable {

    private static final long serialVersionUID = 1L;

//    @Id
//    @Column(name = "USERID", nullable = false)
//    private Integer userid;
//
//    @Id
//    @Column(name = "CHECKTIME", nullable = false)
//    private Date checktime;

    @EmbeddedId
    private CheckInOutId idem ;

    @Column(name = "CHECKTYPE")
    private String checktype;

    @Column(name = "VERIFYCODE")
    private Integer verifycode;

    @Column(name = "SENSORID")
    private String sensorid;

    @Column(name = "Memoinfo")
    private String memoinfo;

    @Column(name = "WorkCode")
    private String workCode;

    @Column(name = "sn")
    private String sn;

    @Column(name = "UserExtFmt")
    private Integer userExtFmt;

}
