export enum ZigbeeClusters {
    // General Clusters
    ZCL_CLUSTER_ID_GEN_BASIC=                             0x0000,
    ZCL_CLUSTER_ID_GEN_POWER_CFG=                         0x0001,
    ZCL_CLUSTER_ID_GEN_DEVICE_TEMP_CONFIG=                0x0002,
    ZCL_CLUSTER_ID_GEN_IDENTIFY=                          0x0003,
    ZCL_CLUSTER_ID_GEN_GROUPS=                            0x0004,
    ZCL_CLUSTER_ID_GEN_SCENES=                            0x0005,
    ZCL_CLUSTER_ID_GEN_ON_OFF=                            0x0006,
    ZCL_CLUSTER_ID_GEN_ON_OFF_SWITCH_CONFIG=              0x0007,
    ZCL_CLUSTER_ID_GEN_LEVEL_CONTROL=                     0x0008,
    ZCL_CLUSTER_ID_GEN_ALARMS=                            0x0009,
    ZCL_CLUSTER_ID_GEN_TIME=                              0x000A,
    ZCL_CLUSTER_ID_GEN_LOCATION=                          0x000B,
    ZCL_CLUSTER_ID_GEN_ANALOG_INPUT_BASIC=                0x000C,
    ZCL_CLUSTER_ID_GEN_ANALOG_OUTPUT_BASIC=               0x000D,
    ZCL_CLUSTER_ID_GEN_ANALOG_VALUE_BASIC=                0x000E,
    ZCL_CLUSTER_ID_GEN_BINARY_INPUT_BASIC=                0x000F,
    ZCL_CLUSTER_ID_GEN_BINARY_OUTPUT_BASIC=               0x0010,
    ZCL_CLUSTER_ID_GEN_BINARY_VALUE_BASIC=                0x0011,
    ZCL_CLUSTER_ID_GEN_MULTISTATE_INPUT_BASIC=            0x0012,
    ZCL_CLUSTER_ID_GEN_MULTISTATE_OUTPUT_BASIC=           0x0013,
    ZCL_CLUSTER_ID_GEN_MULTISTATE_VALUE_BASIC=            0x0014,
    ZCL_CLUSTER_ID_GEN_COMMISSIONING=                     0x0015,
    ZCL_CLUSTER_ID_GEN_PARTITION=                         0x0016,

    ZCL_CLUSTER_ID_OTA=                                   0x0019,

    ZCL_CLUSTER_ID_GEN_POWER_PROFILE=                     0x001A,
    ZCL_CLUSTER_ID_GEN_APPLIANCE_CONTROL=                 0x001B,

    ZCL_CLUSTER_ID_GEN_POLL_CONTROL=                      0x0020,

    ZCL_CLUSTER_ID_GREEN_POWER_PROXY=                     0x0021,

// Closures Clusters,
    ZCL_CLUSTER_ID_CLOSURES_SHADE_CONFIG=                 0x0100,
    ZCL_CLUSTER_ID_CLOSURES_DOOR_LOCK=                    0x0101,
    ZCL_CLUSTER_ID_CLOSURES_WINDOW_COVERING=              0x0102,

// HVAC Clusters,
    ZCL_CLUSTER_ID_HVAC_PUMP_CONFIG_CONTROL=              0x0200,
    ZCL_CLUSTER_ID_HVAC_THERMOSTAT=                       0x0201,
    ZCL_CLUSTER_ID_HVAC_FAN_CONTROL=                      0x0202,
    ZCL_CLUSTER_ID_HVAC_DIHUMIDIFICATION_CONTROL=         0x0203,
    ZCL_CLUSTER_ID_HVAC_USER_INTERFACE_CONFIG=            0x0204,

// Lighting Clusters,
    ZCL_CLUSTER_ID_LIGHTING_COLOR_CONTROL=                0x0300,
    ZCL_CLUSTER_ID_LIGHTING_BALLAST_CONFIG=               0x0301,

// Measurement and Sensing Clusters,
    ZCL_CLUSTER_ID_MS_ILLUMINANCE_MEASUREMENT=            0x0400,
    ZCL_CLUSTER_ID_MS_ILLUMINANCE_LEVEL_SENSING_CONFIG=   0x0401,
    ZCL_CLUSTER_ID_MS_TEMPERATURE_MEASUREMENT=            0x0402,
    ZCL_CLUSTER_ID_MS_PRESSURE_MEASUREMENT=               0x0403,
    ZCL_CLUSTER_ID_MS_FLOW_MEASUREMENT=                   0x0404,
    ZCL_CLUSTER_ID_MS_RELATIVE_HUMIDITY=                  0x0405,
    ZCL_CLUSTER_ID_MS_OCCUPANCY_SENSING=                  0x0406,

// Security and Safety (SS) Clusters,
    ZCL_CLUSTER_ID_SS_IAS_ZONE=                           0x0500,
    ZCL_CLUSTER_ID_SS_IAS_ACE=                            0x0501,
    ZCL_CLUSTER_ID_SS_IAS_WD=                             0x0502,
// Protocol Interfaces,
    ZCL_CLUSTER_ID_PI_GENERIC_TUNNEL=                     0x0600,
    ZCL_CLUSTER_ID_PI_BACNET_PROTOCOL_TUNNEL=             0x0601,
    ZCL_CLUSTER_ID_PI_ANALOG_INPUT_BACNET_REG=            0x0602,
    ZCL_CLUSTER_ID_PI_ANALOG_INPUT_BACNET_EXT=            0x0603,
    ZCL_CLUSTER_ID_PI_ANALOG_OUTPUT_BACNET_REG=           0x0604,
    ZCL_CLUSTER_ID_PI_ANALOG_OUTPUT_BACNET_EXT=           0x0605,
    ZCL_CLUSTER_ID_PI_ANALOG_VALUE_BACNET_REG=            0x0606,
    ZCL_CLUSTER_ID_PI_ANALOG_VALUE_BACNET_EXT=            0x0607,
    ZCL_CLUSTER_ID_PI_BINARY_INPUT_BACNET_REG=            0x0608,
    ZCL_CLUSTER_ID_PI_BINARY_INPUT_BACNET_EXT=            0x0609,
    ZCL_CLUSTER_ID_PI_BINARY_OUTPUT_BACNET_REG=           0x060A,
    ZCL_CLUSTER_ID_PI_BINARY_OUTPUT_BACNET_EXT=           0x060B,
    ZCL_CLUSTER_ID_PI_BINARY_VALUE_BACNET_REG=            0x060C,
    ZCL_CLUSTER_ID_PI_BINARY_VALUE_BACNET_EXT=            0x060D,
    ZCL_CLUSTER_ID_PI_MULTISTATE_INPUT_BACNET_REG=        0x060E,
    ZCL_CLUSTER_ID_PI_MULTISTATE_INPUT_BACNET_EXT=        0x060F,
    ZCL_CLUSTER_ID_PI_MULTISTATE_OUTPUT_BACNET_REG=       0x0610,
    ZCL_CLUSTER_ID_PI_MULTISTATE_OUTPUT_BACNET_EXT=       0x0611,
    ZCL_CLUSTER_ID_PI_MULTISTATE_VALUE_BACNET_REG=        0x0612,
    ZCL_CLUSTER_ID_PI_MULTISTATE_VALUE_BACNET_EXT=        0x0613,
    ZCL_CLUSTER_ID_PI_11073_PROTOCOL_TUNNEL =      0x0614,

// Advanced Metering Initiative (SE) Clusters,
    ZCL_CLUSTER_ID_SE_PRICING=                            0x0700,
    ZCL_CLUSTER_ID_SE_LOAD_CONTROL=                       0x0701,
    ZCL_CLUSTER_ID_SE_SIMPLE_METERING=                    0x0702,
    ZCL_CLUSTER_ID_SE_MESSAGE=                            0x0703,
    ZCL_CLUSTER_ID_SE_SE_TUNNELING=                       0x0704,
    ZCL_CLUSTER_ID_SE_PREPAYMENT=                         0x0705,
    ZCL_CLUSTER_ID_SE_ENERGY_MGMT=                        0x0706,
    ZCL_CLUSTER_ID_SE_TOU_CALENDAR=                       0x0707,
    ZCL_CLUSTER_ID_SE_DEVICE_MGMT=                        0x0708,
    ZCL_CLUSTER_ID_SE_EVENTS=                             0x0709,
    ZCL_CLUSTER_ID_SE_MDU_PAIRING=                        0x070A,

    ZCL_CLUSTER_ID_GEN_KEY_ESTABLISHMENT=                 0x0800,

    ZCL_CLUSTER_ID_HA_APPLIANCE_IDENTIFICATION=           0x0B00,
    ZCL_CLUSTER_ID_HA_METER_IDENTIFICATION=               0x0B01,
    ZCL_CLUSTER_ID_HA_APPLIANCE_EVENTS_ALERTS=            0x0B02,
    ZCL_CLUSTER_ID_HA_APPLIANCE_STATISTICS=               0x0B03,
    ZCL_CLUSTER_ID_HA_ELECTRICAL_MEASUREMENT=             0x0B04,
    ZCL_CLUSTER_ID_HA_DIAGNOSTIC=                         0x0B05,

    // Light Link cluster
    ZCL_CLUSTER_ID_TOUCHLINK=                           0x1000
}
