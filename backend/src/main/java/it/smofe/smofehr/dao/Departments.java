package it.smofe.smofehr.dao;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "DEPARTMENTS")
public class Departments implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "DEPTID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer deptid;

    @Column(name = "DEPTNAME")
    private String deptname;

    @Column(name = "SUPDEPTID", nullable = false)
    private Integer supdeptid;

    @Column(name = "InheritParentSch")
    private Integer inheritParentSch;

    @Column(name = "InheritDeptSch")
    private Integer inheritDeptSch;

    @Column(name = "InheritDeptSchClass")
    private Integer inheritDeptSchClass;

    @Column(name = "AutoSchPlan")
    private Integer autoSchPlan;

    @Column(name = "InLate")
    private Integer inLate;

    @Column(name = "OutEarly")
    private Integer outEarly;

    @Column(name = "InheritDeptRule")
    private Integer inheritDeptRule;

    @Column(name = "MinAutoSchInterval")
    private Integer minAutoSchInterval;

    @Column(name = "RegisterOT")
    private Integer registerOT;

    @Column(name = "DefaultSchId", nullable = false)
    private Integer defaultSchId;

    @Column(name = "ATT")
    private Integer att;

    @Column(name = "Holiday")
    private Integer holiday;

    @Column(name = "OverTime")
    private Integer overTime;

}
