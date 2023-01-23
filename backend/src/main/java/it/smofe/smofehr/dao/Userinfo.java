package it.smofe.smofehr.dao;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "USERINFO")
public class Userinfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "USERID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userid;

    @Column(name = "BADGENUMBER", nullable = false)
    private String badgenumber;

    @Column(name = "SSN")
    private String ssn;

    @Column(name = "NAME")
    private String name;

    @Column(name = "GENDER")
    private String gender;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "PAGER")
    private String pager;

    @Column(name = "BIRTHDAY")
    private Date birthday;

    @Column(name = "HIREDDAY")
    private Date hiredday;

    @Column(name = "STREET")
    private String street;

    @Column(name = "CITY")
    private String city;

    @Column(name = "STATE")
    private String state;

    @Column(name = "ZIP")
    private String zip;

    @Column(name = "OPHONE")
    private String ophone;

    @Column(name = "FPHONE")
    private String fphone;

    @Column(name = "VERIFICATIONMETHOD")
    private Integer verificationmethod;

    @Column(name = "DEFAULTDEPTID")
    private Integer defaultdeptid;

    @Column(name = "SECURITYFLAGS")
    private Integer securityflags;

    @Column(name = "ATT", nullable = false)
    private Integer att;

    @Column(name = "INLATE", nullable = false)
    private Integer inlate;

    @Column(name = "OUTEARLY", nullable = false)
    private Integer outearly;

    @Column(name = "OVERTIME", nullable = false)
    private Integer overtime;

    @Column(name = "SEP", nullable = false)
    private Integer sep;

    @Column(name = "HOLIDAY", nullable = false)
    private Integer holiday;

    @Column(name = "MINZU")
    private String minzu;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "LUNCHDURATION", nullable = false)
    private Integer lunchduration;

    @Column(name = "MVerifyPass")
    private String MVerifyPass;

    @Column(name = "PHOTO")
    private String photo;

    @Column(name = "Notes")
    private String notes;

    @Column(name = "privilege")
    private Integer privilege;

    @Column(name = "InheritDeptSch")
    private Integer inheritDeptSch;

    @Column(name = "InheritDeptSchClass")
    private Integer inheritDeptSchClass;

    @Column(name = "AutoSchPlan")
    private Integer autoSchPlan;

    @Column(name = "MinAutoSchInterval")
    private Integer minAutoSchInterval;

    @Column(name = "RegisterOT")
    private Integer registerOT;

    @Column(name = "InheritDeptRule")
    private Integer inheritDeptRule;

    @Column(name = "EMPRIVILEGE")
    private Integer emprivilege;

    @Column(name = "CardNo")
    private String cardNo;

    @Column(name = "FaceGroup")
    private Integer faceGroup;

    @Column(name = "AccGroup")
    private Integer accGroup;

    @Column(name = "UseAccGroupTZ")
    private Integer useAccGroupTZ;

    @Column(name = "VerifyCode")
    private Integer verifyCode;

    @Column(name = "Expires")
    private Integer expires;

    @Column(name = "ValidCount")
    private Integer validCount;

    @Column(name = "ValidTimeBegin")
    private Date validTimeBegin;

    @Column(name = "ValidTimeEnd")
    private Date validTimeEnd;

    @Column(name = "TimeZone1")
    private Integer timeZone1;

    @Column(name = "TimeZone2")
    private Integer timeZone2;

    @Column(name = "TimeZone3")
    private Integer timeZone3;

}
