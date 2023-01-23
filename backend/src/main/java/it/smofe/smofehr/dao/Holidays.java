package it.smofe.smofehr.dao;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "HOLIDAYS")
public class Holidays implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "HOLIDAYID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer holidayid;

    @Column(name = "HOLIDAYNAME")
    private String holidayname;

    @Column(name = "HOLIDAYYEAR")
    private Integer holidayyear;

    @Column(name = "HOLIDAYMONTH")
    private Integer holidaymonth;

    @Column(name = "HOLIDAYDAY")
    private Integer holidayday;

    @Column(name = "STARTTIME")
    private Date starttime;

    @Column(name = "DURATION")
    private Integer duration;

    @Column(name = "HOLIDAYTYPE")
    private Integer holidaytype;

    @Column(name = "XINBIE")
    private String xinbie;

    @Column(name = "MINZU")
    private String minzu;

    @Column(name = "DeptID")
    private Integer deptID;

    @Column(name = "timezone")
    private Integer timezone;

}
