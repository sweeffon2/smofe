package it.smofe.smofehr.dao;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "Machines")
public class Machines implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "MachineAlias", nullable = false)
    private String machineAlias;

    @Column(name = "ConnectType", nullable = false)
    private Integer connectType;

    @Column(name = "IP")
    private String ip;

    @Column(name = "SerialPort")
    private Integer serialPort;

    @Column(name = "Port")
    private Integer port;

    @Column(name = "Baudrate")
    private Integer baudrate;

    @Column(name = "MachineNumber", nullable = false)
    private Integer machineNumber;

    @Column(name = "IsHost")
    private Boolean isHost;

    @Column(name = "Enabled")
    private Boolean enabled;

    @Column(name = "CommPassword")
    private String commPassword;

    @Column(name = "UILanguage")
    private Integer UILanguage;

    @Column(name = "DateFormat")
    private Integer dateFormat;

    @Column(name = "InOutRecordWarn")
    private Integer inOutRecordWarn;

    @Column(name = "Idle")
    private Integer idle;

    @Column(name = "Voice")
    private Integer voice;

    @Column(name = "managercount")
    private Integer managercount;

    @Column(name = "usercount")
    private Integer usercount;

    @Column(name = "fingercount")
    private Integer fingercount;

    @Column(name = "SecretCount")
    private Integer secretCount;

    @Column(name = "FirmwareVersion")
    private String firmwareVersion;

    @Column(name = "ProductType")
    private String productType;

    @Column(name = "LockControl")
    private Integer lockControl;

    @Column(name = "Purpose")
    private Integer purpose;

    @Column(name = "ProduceKind")
    private Integer produceKind;

    @Column(name = "sn")
    private String sn;

    @Column(name = "PhotoStamp")
    private String photoStamp;

    @Column(name = "IsIfChangeConfigServer2")
    private Integer isIfChangeConfigServer2;

    @Column(name = "IsAndroid")
    private String isAndroid;

}
