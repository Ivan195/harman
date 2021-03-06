import * as _ from "lodash"

const getData = () => {
    const data = [
        {
            "id": "5f451bb40859216758df9e59",
            "depth": 0,
            "testId": 395,
            "sampleId": "1.41.58_0",
            "date": "08.19.2020    01:11 AM",
            "analyzerId": "X550-00300",
            "Al": 12522.35,
            "Ca": 525.43,
            "Cu": 6415.96,
            "Fe": 120244.37,
            "K": 4564.12,
            "Mo": 20.9,
            "Pb": 7191.34,
            "Rb": 10.81,
            "S": 178619.44,
            "Si": 249829.94,
            "Sr": 53.01,
            "Ti": 2205.88,
            "Zn": 10574.14,
            "Zr": 64.15
        },
        {
            "id": "5f451bb40859216758df9e5b",
            "depth": 1.5,
            "testId": 396,
            "sampleId": "1.41.58_1",
            "date": "08.19.2020    01:45 AM",
            "analyzerId": "X550-00300",
            "Al": 58126.52,
            "Ca": 4245.54,
            "Cu": 91.04,
            "Fe": 23944.55,
            "K": 22960.27,
            "Mg": 14716.68,
            "Mn": 949.83,
            "P": 328.25,
            "Pb": 33.52,
            "Rb": 60.63,
            "S": 26777.15,
            "Si": 424570.77,
            "Sr": 11.38,
            "Ti": 1683.49,
            "Y": 25.68,
            "Zn": 154.21,
            "Zr": 111.48
        },
        {
            "id": "5f451bb40859216758df9e5d",
            "depth": 3,
            "testId": 397,
            "sampleId": "1.41.58_2",
            "date": "08.19.2020    01:46 AM",
            "analyzerId": "X550-00300",
            "Al": 55904.57,
            "Ca": 28016.56,
            "Cu": 192.36,
            "Fe": 27130.73,
            "K": 16148.43,
            "Mn": 773.67,
            "P": 309.76,
            "Pb": 44.34,
            "Rb": 65.25,
            "S": 40416.72,
            "Si": 235175.63,
            "Sr": 23.81,
            "Ti": 1676.19,
            "Y": 25.33,
            "Zn": 132.66,
            "Zr": 159.15
        },
        {
            "id": "5f451bb40859216758df9e5f",
            "depth": 4.5,
            "testId": 398,
            "sampleId": "1.41.58_3",
            "date": "08.19.2020    01:46 AM",
            "analyzerId": "X550-00300",
            "Al": 38690.81,
            "Ca": 29083.54,
            "Cu": 102.59,
            "Fe": 10528,
            "K": 12514.76,
            "Mn": 359.77,
            "Pb": 33.25,
            "Rb": 30.38,
            "S": 59279.6,
            "Si": 430331.8,
            "Sr": 15.66,
            "Ti": 2305.83,
            "Y": 48.55,
            "Zn": 61.38,
            "Zr": 179.44
        },
        {
            "id": "5f451bb40859216758df9e61",
            "depth": 6,
            "testId": 399,
            "sampleId": "1.41.58_4",
            "date": "08.19.2020    01:47 AM",
            "analyzerId": "X550-00300",
            "Al": 40976.34,
            "Ca": 3214.61,
            "Cu": 78.24,
            "Fe": 17181.57,
            "K": 16224.82,
            "Mn": 567.37,
            "Pb": 19.54,
            "Rb": 36.94,
            "S": 21015.4,
            "Si": 395430.72,
            "Sr": 4.53,
            "Ti": 1358.47,
            "Y": 28.49,
            "Zn": 71.09,
            "Zr": 75.07
        },
        {
            "id": "5f451bb40859216758df9e63",
            "depth": 7.5,
            "testId": 400,
            "sampleId": "1.41.58_5",
            "date": "08.19.2020    01:48 AM",
            "analyzerId": "X550-00300",
            "Al": 103011.7,
            "Ca": 2501.91,
            "Cu": 45.75,
            "Fe": 34341.64,
            "K": 35631,
            "Mg": 27978.71,
            "Mn": 1538.73,
            "Pb": 9.91,
            "Rb": 62.18,
            "S": 13946.59,
            "Si": 267317.87,
            "Sr": 13.45,
            "Ti": 1253.41,
            "Y": 26.68,
            "Zn": 218.54,
            "Zr": 148.21
        },
        {
            "id": "5f451bb40859216758df9e65",
            "depth": 9,
            "testId": 401,
            "sampleId": "1.41.58_6",
            "date": "08.19.2020    01:48 AM",
            "analyzerId": "X550-00300",
            "Al": 140540.43,
            "Ca": 26953.81,
            "Cr": 117.54,
            "Cu": 31.23,
            "Fe": 42422.48,
            "K": 77919.82,
            "Mn": 680.75,
            "Pb": 33.99,
            "Rb": 165.92,
            "S": 35591.04,
            "Si": 243946.42,
            "Sr": 56.77,
            "Ti": 11304.74,
            "V": 288.66,
            "Y": 49.29,
            "Zn": 85.14,
            "Zr": 105.94
        },
        {
            "id": "5f451bb40859216758df9e67",
            "depth": 10.5,
            "testId": 402,
            "sampleId": "1.41.58_7",
            "date": "08.19.2020    01:49 AM",
            "analyzerId": "X550-00300",
            "Al": 71482.12,
            "Ca": 21397.66,
            "Cu": 104.77,
            "Fe": 40494.32,
            "K": 28526.45,
            "Mg": 23455.32,
            "Mn": 2029.41,
            "P": 428.76,
            "Pb": 34.7,
            "Rb": 71.23,
            "S": 33986.55,
            "Si": 338386.19,
            "Sr": 21.72,
            "Ti": 2480.18,
            "Y": 38.49,
            "Zn": 346.65,
            "Zr": 116.55
        },
        {
            "id": "5f451bb40859216758df9e69",
            "depth": 12,
            "testId": 403,
            "sampleId": "1.41.58_8",
            "date": "08.19.2020    01:49 AM",
            "analyzerId": "X550-00300",
            "Al": 157100.39,
            "Ca": 626.45,
            "Cu": 69.72,
            "Fe": 28005.57,
            "K": 73572.96,
            "Mg": 34336.02,
            "Mn": 1196.29,
            "P": 459.15,
            "Rb": 157.19,
            "S": 11370.91,
            "Si": 251592.54,
            "Sr": 19.63,
            "Ti": 2138.79,
            "Y": 44.5,
            "Zn": 185.19,
            "Zr": 414.3
        },
        {
            "id": "5f451bb40859216758df9e6b",
            "depth": 13.5,
            "testId": 404,
            "sampleId": "1.41.58_9",
            "date": "08.19.2020    01:50 AM",
            "analyzerId": "X550-00300",
            "Al": 59773.86,
            "Ca": 1073.75,
            "Cu": 55.93,
            "Fe": 18982.16,
            "K": 26399.65,
            "Mg": 13774.86,
            "Mn": 912.27,
            "Rb": 49.06,
            "S": 9403.94,
            "Si": 469038.2,
            "Sr": 5.73,
            "Ti": 1025.93,
            "Y": 12.63,
            "Zn": 148.55,
            "Zr": 83.08
        },
        {
            "id": "5f451bb40859216758df9e6d",
            "depth": 15,
            "testId": 405,
            "sampleId": "1.41.58_10",
            "date": "08.19.2020    01:51 AM",
            "analyzerId": "X550-00300",
            "Al": 81117.02,
            "As": 5.63,
            "Ca": 676.1,
            "Cu": 36.13,
            "Fe": 20152.33,
            "K": 43995.36,
            "Mg": 13099.19,
            "Mn": 570.08,
            "P": 2883.43,
            "Rb": 73.03,
            "S": 22060.87,
            "Si": 372498.09,
            "Sr": 5.31,
            "Ti": 4668.03,
            "Y": 35.68,
            "Zn": 63.92,
            "Zr": 206.67
        },
        {
            "id": "5f451bb40859216758df9e6f",
            "depth": 16.5,
            "testId": 406,
            "sampleId": "1.41.58_11",
            "date": "08.19.2020    01:51 AM",
            "analyzerId": "X550-00300",
            "Al": 69980.88,
            "As": 8.84,
            "Ca": 38335.62,
            "Cu": 98.23,
            "Fe": 33110.19,
            "K": 32327.64,
            "Mn": 645.39,
            "Pb": 20.62,
            "Rb": 69.59,
            "S": 56415.27,
            "Si": 371791.84,
            "Sr": 47.89,
            "Ti": 4961.58,
            "Y": 39.09,
            "Zn": 74.48,
            "Zr": 113.63
        },
        {
            "id": "5f451bb40859216758df9e71",
            "depth": 18,
            "testId": 407,
            "sampleId": "1.41.58_12",
            "date": "08.19.2020    02:18 AM",
            "analyzerId": "X550-00300",
            "Al": 57790.75,
            "As": 13.12,
            "Ca": 2308.2,
            "Cu": 72.18,
            "Fe": 25472.67,
            "K": 45167.12,
            "Mn": 284.78,
            "Pb": 30.18,
            "Rb": 81.27,
            "S": 57126.86,
            "Si": 163046.91,
            "Sr": 27.79,
            "Ti": 4128.99,
            "Y": 29.95,
            "Zn": 138.02,
            "Zr": 132.71
        },
        {
            "id": "5f451bb40859216758df9e73",
            "depth": 19.5,
            "testId": 408,
            "sampleId": "1.41.58_13",
            "date": "08.19.2020    02:18 AM",
            "analyzerId": "X550-00300",
            "Al": 47477.68,
            "Ca": 2972.35,
            "Cu": 170.65,
            "Fe": 60026.83,
            "K": 37671.55,
            "Mn": 873.95,
            "Pb": 64.42,
            "Rb": 89.99,
            "S": 118761.1,
            "Si": 258388.42,
            "Sr": 30.92,
            "Ti": 4262.66,
            "Y": 34.76,
            "Zn": 553.34,
            "Zr": 150.69
        },
        {
            "id": "5f451bb40859216758df9e75",
            "depth": 21,
            "testId": 409,
            "sampleId": "1.41.58_14",
            "date": "08.19.2020    02:19 AM",
            "analyzerId": "X550-00300",
            "Al": 14657.43,
            "Ca": 549.28,
            "Co": 165.83,
            "Cu": 48479.75,
            "Fe": 68553.69,
            "K": 2051.91,
            "Mn": 194.03,
            "S": 84691.22,
            "Si": 106503,
            "Ti": 124.03,
            "Zn": 700.09
        },
        {
            "id": "5f451bb40859216758df9e77",
            "depth": 22.5,
            "testId": 410,
            "sampleId": "1.41.58_15",
            "date": "08.19.2020    02:19 AM",
            "analyzerId": "X550-00300",
            "Al": 19999.6,
            "As": 8.36,
            "Ca": 3328.95,
            "Cu": 5455.11,
            "Fe": 33139.34,
            "K": 1648.18,
            "Mn": 519.7,
            "Pb": 17.83,
            "S": 73630.17,
            "Si": 379707.6,
            "Ti": 633.71,
            "Zn": 408.89,
            "Zr": 11.81
        },
        {
            "id": "5f451bb40859216758df9e79",
            "depth": 24,
            "testId": 411,
            "sampleId": "1.41.58_16",
            "date": "08.19.2020    02:20 AM",
            "analyzerId": "X550-00300",
            "Al": 37742.02,
            "As": 5.2,
            "Ca": 616.72,
            "Cu": 81.63,
            "Fe": 35956.18,
            "K": 26776.5,
            "Mn": 608.25,
            "Pb": 10.54,
            "Rb": 51.79,
            "S": 44757,
            "Si": 93879.55,
            "Sr": 20.78,
            "Ta": 51.53,
            "Ti": 2339.35,
            "V": 89.98,
            "Y": 15.02,
            "Zn": 2656.24,
            "Zr": 72.31
        },
        {
            "id": "5f451bb40859216758df9e7b",
            "depth": 25.5,
            "testId": 412,
            "sampleId": "1.41.58_17",
            "date": "08.19.2020    02:21 AM",
            "analyzerId": "X550-00300",
            "Al": 26604.64,
            "Ca": 552.51,
            "Cu": 510.56,
            "Fe": 25388.48,
            "K": 15116.35,
            "Mn": 920.06,
            "Pb": 103,
            "Rb": 31.3,
            "S": 15905.17,
            "Si": 60899.87,
            "Sr": 4.15,
            "Ti": 1652.49,
            "V": 61.99,
            "Y": 10.69,
            "Zn": 694.82,
            "Zr": 62.83
        },
        {
            "id": "5f451bb40859216758df9e7d",
            "depth": 27,
            "testId": 413,
            "sampleId": "1.41.58_18",
            "date": "08.19.2020    02:22 AM",
            "analyzerId": "X550-00300",
            "Al": 37550.01,
            "As": 19.54,
            "Ca": 3285.15,
            "Cu": 623.68,
            "Fe": 49168.18,
            "K": 22587.68,
            "Mn": 842.29,
            "Pb": 247.97,
            "Rb": 85.38,
            "S": 65501.89,
            "Si": 166983.87,
            "Sr": 31.33,
            "Ti": 2713.13,
            "V": 82.73,
            "Y": 19.69,
            "Zn": 483.01,
            "Zr": 94.86
        },
        {
            "id": "5f451bb40859216758df9e7f",
            "depth": 28.5,
            "testId": 414,
            "sampleId": "1.41.58_19",
            "date": "08.19.2020    02:22 AM",
            "analyzerId": "X550-00300",
            "Al": 30251.57,
            "As": 10.5,
            "Ca": 600.15,
            "Cu": 1555.59,
            "Fe": 38088.17,
            "K": 10532.37,
            "Mn": 1035.21,
            "Pb": 24.31,
            "Rb": 27.48,
            "S": 28891.61,
            "Si": 78765.31,
            "Sr": 7.09,
            "Ti": 1347.98,
            "Y": 13.42,
            "Zn": 400.4,
            "Zr": 51.01
        },
        {
            "id": "5f451bb40859216758df9e81",
            "depth": 30,
            "testId": 415,
            "sampleId": "1.41.58_20",
            "date": "08.19.2020    02:23 AM",
            "analyzerId": "X550-00300",
            "Al": 47946.42,
            "Ca": 2091.43,
            "Cu": 240.69,
            "Fe": 79161.79,
            "K": 15764.49,
            "Mg": 22340.81,
            "Mn": 1229.07,
            "Pb": 49.99,
            "Rb": 24.47,
            "S": 63476.42,
            "Si": 124295.64,
            "Sr": 11.82,
            "Ti": 1510.5,
            "Y": 17.1,
            "Zn": 750.15,
            "Zr": 42.95
        },
        {
            "id": "5f451bb40859216758df9e83",
            "depth": 31.5,
            "testId": 416,
            "sampleId": "1.41.58_21",
            "date": "08.19.2020    02:23 AM",
            "analyzerId": "X550-00300",
            "Al": 23302.29,
            "As": 17.91,
            "Ca": 7151.32,
            "Cu": 35843.82,
            "Fe": 165994.61,
            "K": 199.57,
            "Mn": 131.98,
            "Pb": 51.41,
            "S": 228270.49,
            "Si": 183742.66,
            "Ti": 372.43,
            "Zn": 188.84
        },
        {
            "id": "5f451bb40859216758df9e85",
            "depth": 33,
            "testId": 417,
            "sampleId": "1.41.58_22",
            "date": "08.19.2020    02:24 AM",
            "analyzerId": "X550-00300",
            "Al": 26942.01,
            "Ca": 5815.08,
            "Cu": 5818.5,
            "Fe": 21352.06,
            "K": 449.98,
            "Mn": 62.07,
            "P": 539.77,
            "Pb": 42.28,
            "S": 113761.53,
            "Si": 287314.51,
            "Sr": 8.49,
            "Ti": 278.28,
            "Zn": 66.5
        },
        {
            "id": "5f451bb40859216758df9e87",
            "depth": 34.5,
            "testId": 418,
            "sampleId": "1.41.58_23",
            "date": "08.19.2020    02:24 AM",
            "analyzerId": "X550-00300",
            "Al": 17925.54,
            "Ca": 4103.59,
            "Cu": 3646.44,
            "Fe": 106081.13,
            "K": 141.89,
            "Mn": 333.53,
            "Pb": 97.71,
            "S": 138312.67,
            "Si": 243709.28,
            "Sr": 15.12,
            "Ti": 1166.34,
            "Zn": 111.51,
            "Zr": 25.07
        },
        {
            "id": "5f451bb40859216758df9e89",
            "depth": 36,
            "testId": 419,
            "sampleId": "1.41.58_24",
            "date": "08.19.2020    02:25 AM",
            "analyzerId": "X550-00300",
            "Al": 9128.23,
            "Ca": 2253.61,
            "Cu": 832.7,
            "Fe": 16546.8,
            "K": 2612.58,
            "Mn": 504.79,
            "S": 45065.64,
            "Si": 389550.36,
            "Sr": 7.35,
            "Zn": 56.52,
            "Zr": 5.46
        },
        {
            "id": "5f451bb40859216758df9e8b",
            "depth": 37.5,
            "testId": 420,
            "sampleId": "1.41.58_25",
            "date": "08.19.2020    02:26 AM",
            "analyzerId": "X550-00300",
            "Al": 12445.99,
            "As": 11.54,
            "Ca": 1827.99,
            "Cu": 3323.13,
            "Fe": 32291.18,
            "K": 193.49,
            "Mn": 614.64,
            "S": 53033.01,
            "Si": 261976.87,
            "Sr": 10.1,
            "Ti": 525.76,
            "Zn": 148.27,
            "Zr": 10.77
        },
        {
            "id": "5f451bb40859216758df9e8d",
            "depth": 39,
            "testId": 421,
            "sampleId": "1.41.58_26",
            "date": "08.19.2020    02:26 AM",
            "analyzerId": "X550-00300",
            "Al": 53189.19,
            "As": 17.52,
            "Ca": 1816.5,
            "Cu": 2422.49,
            "Fe": 134749.21,
            "Mg": 52065.25,
            "Mn": 2455.57,
            "Pb": 102.05,
            "S": 137193.09,
            "Si": 172391.55,
            "Sr": 250.57,
            "Ti": 7132.7,
            "V": 288.01,
            "Zn": 354.88,
            "Zr": 24.28
        },
        {
            "id": "5f451bb40859216758df9e8f",
            "depth": 40.5,
            "testId": 422,
            "sampleId": "1.41.58_27",
            "date": "08.19.2020    02:27 AM",
            "analyzerId": "X550-00300",
            "Al": 29318.35,
            "As": 83.98,
            "Ca": 19974.49,
            "Cu": 144.54,
            "Fe": 115307.07,
            "K": 4537.73,
            "Mn": 484.34,
            "Pb": 253.74,
            "Rb": 10.97,
            "S": 222008.95,
            "Si": 141847.65,
            "Sr": 8.46,
            "Ti": 7384.97,
            "Y": 18.83,
            "Zn": 45.75,
            "Zr": 59.61
        },
        {
            "id": "5f451bb40859216758df9e91",
            "depth": 42,
            "testId": 423,
            "sampleId": "1.41.58_28",
            "date": "08.19.2020    02:27 AM",
            "analyzerId": "X550-00300",
            "Al": 35895.79,
            "As": 31.34,
            "Ca": 281.43,
            "Cu": 47.94,
            "Fe": 33700.97,
            "K": 27970.23,
            "Mn": 455.95,
            "P": 859.28,
            "Pb": 23.34,
            "Rb": 51.99,
            "S": 123692.59,
            "Si": 348288.84,
            "Ti": 2331.44,
            "Y": 14.43,
            "Zn": 44.43,
            "Zr": 90.44
        },
        {
            "id": "5f451bb40859216758df9e93",
            "depth": 43.5,
            "testId": 424,
            "sampleId": "1.41.58_29",
            "date": "08.19.2020    02:28 AM",
            "analyzerId": "X550-00300",
            "Al": 37283.99,
            "As": 48.68,
            "Ca": 893.67,
            "Cu": 241.02,
            "Fe": 43529.04,
            "K": 26011.99,
            "Mn": 642.07,
            "Pb": 34.66,
            "Rb": 68.45,
            "S": 85511.02,
            "Si": 258052.94,
            "Sr": 28.72,
            "Ti": 2284.28,
            "V": 97.18,
            "Y": 43.39,
            "Zn": 102.69,
            "Zr": 96.26
        },
        {
            "id": "5f451bb40859216758df9e95",
            "depth": 45,
            "testId": 425,
            "sampleId": "1.41.58_30",
            "date": "08.19.2020    02:29 AM",
            "analyzerId": "X550-00300",
            "Al": 35588.16,
            "As": 7.72,
            "Ca": 2287.61,
            "Cu": 342.91,
            "Fe": 23163.84,
            "K": 16917.16,
            "Mn": 603.92,
            "Rb": 27.3,
            "S": 39034.23,
            "Si": 439578.97,
            "Ti": 1953.68,
            "Y": 14.84,
            "Zn": 59.65,
            "Zr": 46.06
        },
        {
            "id": "5f451bb40859216758df9e97",
            "depth": 46.5,
            "testId": 426,
            "sampleId": "1.41.58_31",
            "date": "08.19.2020    02:30 AM",
            "analyzerId": "X550-00300",
            "Al": 30800.01,
            "As": 8.76,
            "Ca": 2934.58,
            "Cu": 1770.6,
            "Fe": 30178.19,
            "K": 7713.96,
            "Mn": 482.04,
            "Pb": 39.66,
            "Rb": 25.55,
            "S": 83735.66,
            "Si": 350410.39,
            "Sr": 5.06,
            "Ti": 1443.81,
            "Y": 12.25,
            "Zn": 111.08,
            "Zr": 47.06
        },
        {
            "id": "5f451bb40859216758df9e99",
            "depth": 48,
            "testId": 427,
            "sampleId": "1.41.58_32",
            "date": "08.19.2020    02:31 AM",
            "analyzerId": "X550-00300",
            "Al": 14556.75,
            "As": 14.31,
            "Ca": 1754.18,
            "Cu": 1937.08,
            "Fe": 22582.22,
            "K": 1709.84,
            "Mn": 520.31,
            "S": 48375.29,
            "Si": 447419.09,
            "Ti": 429.55,
            "Zn": 223.2,
            "Zr": 14.01
        },
        {
            "id": "5f451bb40859216758df9e9b",
            "depth": 49.5,
            "testId": 428,
            "sampleId": "1.41.58_33",
            "date": "08.19.2020    02:31 AM",
            "analyzerId": "X550-00300",
            "Al": 14506.16,
            "Ca": 2500.31,
            "Cu": 13179.1,
            "Fe": 65150.3,
            "K": 792.6,
            "Mn": 380.53,
            "Pb": 127.52,
            "S": 44001.36,
            "Si": 125223.92,
            "Sr": 14.71,
            "Ti": 983.84,
            "Zn": 10331.75
        },
        {
            "id": "5f451bb40859216758df9e9d",
            "depth": 51,
            "testId": 429,
            "sampleId": "1.41.58_34",
            "date": "08.19.2020    02:32 AM",
            "analyzerId": "X550-00300",
            "Al": 85971.48,
            "Ca": 2933.81,
            "Cr": 82.46,
            "Cu": 21.95,
            "Fe": 39085.04,
            "K": 33483.15,
            "Mg": 29788.54,
            "Mn": 1683.82,
            "Rb": 38.53,
            "S": 34558.12,
            "Si": 352634.62,
            "Ti": 4214.54,
            "V": 128.99,
            "Zn": 194.62,
            "Zr": 40.73
        },
        {
            "id": "5f451bb40859216758df9e9f",
            "depth": 52.5,
            "testId": 430,
            "sampleId": "1.41.58_35",
            "date": "08.19.2020    02:37 AM",
            "analyzerId": "X550-00300",
            "Al": 62496.6,
            "Ca": 33114.37,
            "Cu": 46.59,
            "Fe": 20967.38,
            "K": 38075.9,
            "Mn": 1039.56,
            "Rb": 65.89,
            "S": 73062.7,
            "Si": 385162.43,
            "Sr": 106.47,
            "Ti": 3153.41,
            "Y": 31.48,
            "Zn": 75.28,
            "Zr": 225.64
        },
        {
            "id": "5f451bb40859216758df9ea1",
            "depth": 54,
            "testId": 431,
            "sampleId": "1.41.58_36",
            "date": "08.19.2020    02:38 AM",
            "analyzerId": "X550-00300",
            "Al": 98333.8,
            "Ca": 3483.8,
            "Cu": 43.27,
            "Fe": 15753.13,
            "K": 53473.32,
            "Mn": 763.64,
            "Rb": 67.23,
            "S": 14469.27,
            "Si": 286863.16,
            "Sr": 60.68,
            "Ti": 2901.99,
            "Y": 25.36,
            "Zn": 62.87,
            "Zr": 178.01
        },
        {
            "id": "5f451bb40859216758df9ea3",
            "depth": 55.5,
            "testId": 432,
            "sampleId": "1.41.58_37",
            "date": "08.19.2020    02:38 AM",
            "analyzerId": "X550-00300",
            "Al": 55710.37,
            "Ca": 28114.98,
            "Cu": 77.08,
            "Fe": 17749.87,
            "K": 23474.17,
            "Mn": 566.36,
            "Pb": 16.61,
            "Rb": 58.53,
            "S": 17808.48,
            "Si": 196455.52,
            "Sr": 94.13,
            "Ti": 2468.4,
            "Y": 39.42,
            "Zn": 57.99,
            "Zr": 251.39
        },
        {
            "id": "5f451bb40859216758df9ea5",
            "depth": 57,
            "testId": 433,
            "sampleId": "1.41.58_38",
            "date": "08.19.2020    02:39 AM",
            "analyzerId": "X550-00300",
            "Al": 47920.57,
            "Ca": 23296.54,
            "Cu": 110.51,
            "Fe": 18803.68,
            "K": 9936.08,
            "Mn": 545.77,
            "Pb": 46.3,
            "Rb": 17.98,
            "S": 23288,
            "Si": 207906.51,
            "Sr": 117.68,
            "Ti": 2597.14,
            "Y": 22.4,
            "Zn": 63.37,
            "Zr": 168.75
        },
        {
            "id": "5f451bb40859216758df9ea7",
            "depth": 58.5,
            "testId": 434,
            "sampleId": "1.41.58_39",
            "date": "08.19.2020    02:39 AM",
            "analyzerId": "X550-00300",
            "Al": 60839.1,
            "Ca": 29279.62,
            "Cu": 121.97,
            "Fe": 18318.37,
            "K": 20911.4,
            "Mn": 981.55,
            "Pb": 23.2,
            "Rb": 38.03,
            "S": 59876.77,
            "Si": 292167.76,
            "Sr": 135.76,
            "Ti": 2960.99,
            "Y": 16.12,
            "Zn": 38.43,
            "Zr": 120.66
        },
        {
            "id": "5f451bb40859216758df9ea9",
            "depth": 60,
            "testId": 435,
            "sampleId": "1.41.58_40",
            "date": "08.19.2020    02:42 AM",
            "analyzerId": "X550-00300",
            "Al": 47618.08,
            "Ca": 13883.03,
            "Cu": 1355.39,
            "Fe": 72742.89,
            "K": 11188.45,
            "Mn": 1197.25,
            "Pb": 99.14,
            "Rb": 39.12,
            "S": 39916.04,
            "Si": 185392.99,
            "Sr": 24.92,
            "Ti": 2245.94,
            "Y": 29.65,
            "Zn": 1164.68,
            "Zr": 111.29
        },
        {
            "id": "5f451bb40859216758df9eab",
            "depth": 61.5,
            "testId": 436,
            "sampleId": "1.41.58_41",
            "date": "08.19.2020    02:42 AM",
            "analyzerId": "X550-00300",
            "Al": 31035.83,
            "Ca": 11359.82,
            "Cu": 1735.45,
            "Fe": 32609.95,
            "K": 2154.11,
            "Mn": 1100.5,
            "Pb": 57.58,
            "S": 40116.17,
            "Si": 166387.41,
            "Sr": 11.08,
            "Ti": 956.53,
            "Zn": 191.15
        },
        {
            "id": "5f451bb40859216758df9ead",
            "depth": 63,
            "testId": 437,
            "sampleId": "1.41.58_42",
            "date": "08.19.2020    02:42 AM",
            "analyzerId": "X550-00300",
            "Al": 19637.5,
            "Ca": 6628.89,
            "Cu": 2707.09,
            "Fe": 92899.48,
            "K": 1829.55,
            "Mn": 182.89,
            "Pb": 185.95,
            "S": 71303.54,
            "Si": 118061.65,
            "Sr": 12.36,
            "Ti": 936,
            "Zn": 997.31
        },
        {
            "id": "5f451bb40859216758df9eaf",
            "depth": 64.5,
            "testId": 438,
            "sampleId": "1.41.58_43",
            "date": "08.19.2020    02:43 AM",
            "analyzerId": "X550-00300",
            "Al": 27430.57,
            "Ca": 7322.47,
            "Cu": 763.71,
            "Fe": 42075.52,
            "K": 6486.05,
            "Mn": 703.17,
            "Pb": 67.5,
            "Rb": 24.71,
            "S": 38113.75,
            "Si": 141202.63,
            "Sr": 7.66,
            "Ti": 1784.43,
            "Zn": 480.68,
            "Zr": 55.52
        },
        {
            "id": "5f451bb40859216758df9eb1",
            "depth": 66,
            "testId": 439,
            "sampleId": "1.41.58_44",
            "date": "08.19.2020    02:43 AM",
            "analyzerId": "X550-00300",
            "Al": 47845.05,
            "As": 34.49,
            "Ca": 5506.15,
            "Cu": 4368.99,
            "Fe": 102797.26,
            "K": 33443.07,
            "Mn": 390.26,
            "Pb": 146.77,
            "Rb": 65.63,
            "S": 110754.63,
            "Si": 172832.7,
            "Sr": 26.29,
            "Ti": 3289.39,
            "V": 140.45,
            "Y": 18.77,
            "Zn": 193.61,
            "Zr": 90.72
        },
        {
            "id": "5f451bb40859216758df9eb3",
            "depth": 67.5,
            "testId": 440,
            "sampleId": "1.41.58_45",
            "date": "08.19.2020    02:44 AM",
            "analyzerId": "X550-00300",
            "Al": 23830.19,
            "As": 12.59,
            "Ca": 7376,
            "Cu": 1576.48,
            "Fe": 50446.46,
            "K": 6062.17,
            "Mn": 635.76,
            "Pb": 89.24,
            "Rb": 30.68,
            "S": 25839.61,
            "Si": 93879.41,
            "Sr": 24.16,
            "Ti": 1628.23,
            "Y": 14.29,
            "Zn": 1094.43,
            "Zr": 64.48
        },
        {
            "id": "5f451bb40859216758df9eb5",
            "depth": 69,
            "testId": 441,
            "sampleId": "1.41.58_46",
            "date": "08.19.2020    02:44 AM",
            "analyzerId": "X550-00300",
            "Al": 8903.46,
            "As": 7.82,
            "Ca": 1020.55,
            "Cu": 447.3,
            "Fe": 25023.84,
            "K": 1184.16,
            "Mn": 370.17,
            "Pb": 17.09,
            "Rb": 5.94,
            "S": 13641.02,
            "Si": 46653.02,
            "Sr": 7.75,
            "Ti": 518.33,
            "Zn": 1697.37,
            "Zr": 23.65
        },
        {
            "id": "5f451bb40859216758df9eb7",
            "depth": 70.5,
            "testId": 442,
            "sampleId": "1.41.58_47",
            "date": "08.19.2020    02:44 AM",
            "analyzerId": "X550-00300",
            "Al": 94014.31,
            "Ca": 14055.15,
            "Cu": 340.15,
            "Fe": 49779.74,
            "K": 45699.84,
            "Mn": 504.16,
            "Pb": 85.05,
            "Rb": 73.19,
            "S": 61066.97,
            "Si": 282075.92,
            "Sr": 15.42,
            "Ti": 3108.46,
            "V": 198.57,
            "Y": 21.43,
            "Zn": 171.24,
            "Zr": 119.3
        },
        {
            "id": "5f451bb40859216758df9eb9",
            "depth": 72,
            "testId": 443,
            "sampleId": "1.41.58_48",
            "date": "08.19.2020    02:45 AM",
            "analyzerId": "X550-00300",
            "Al": 19082.7,
            "Ca": 9374.8,
            "Cu": 1607.86,
            "Fe": 39550.28,
            "K": 4789.8,
            "Mn": 288.2,
            "Pb": 111.28,
            "Rb": 29.43,
            "S": 30644.43,
            "Si": 84891.31,
            "Sr": 20.63,
            "Ti": 1596.63,
            "Y": 13.93,
            "Zn": 1144.7,
            "Zr": 38.27
        },
        {
            "id": "5f451bb40859216758df9ebb",
            "depth": 73.5,
            "testId": 444,
            "sampleId": "1.41.58_49",
            "date": "08.19.2020    02:45 AM",
            "analyzerId": "X550-00300",
            "Al": 35844.62,
            "As": 31.62,
            "Ca": 12805.54,
            "Cu": 677.5,
            "Fe": 83987.59,
            "K": 7604.72,
            "Mn": 214.68,
            "Pb": 138.01,
            "Rb": 18.55,
            "S": 101226.72,
            "Si": 250097.85,
            "Ti": 1194.49,
            "Zn": 304.33,
            "Zr": 26.24
        },
        {
            "id": "5f451bb40859216758df9ebd",
            "depth": 75,
            "testId": 445,
            "sampleId": "1.41.58_50",
            "date": "08.19.2020    02:45 AM",
            "analyzerId": "X550-00300",
            "Al": 46143.1,
            "Ca": 10787.3,
            "Cu": 264.79,
            "Fe": 36469.95,
            "K": 17891.08,
            "Mn": 1160.76,
            "Pb": 51.14,
            "Rb": 42.87,
            "S": 21741.79,
            "Si": 168393.99,
            "Sr": 17.99,
            "Ti": 2487.77,
            "Y": 29.75,
            "Zn": 532.75,
            "Zr": 109.42
        },
        {
            "id": "5f451bb40859216758df9ebf",
            "depth": 76.5,
            "testId": 446,
            "sampleId": "1.41.58_51",
            "date": "08.19.2020    02:46 AM",
            "analyzerId": "X550-00300",
            "Al": 27842.78,
            "Ca": 8609.27,
            "Cr": 74.3,
            "Cu": 1574.45,
            "Fe": 39545.25,
            "K": 5372.23,
            "Mn": 503.47,
            "Pb": 124.91,
            "Rb": 46.82,
            "S": 22484.8,
            "Si": 115946.66,
            "Sr": 33.8,
            "Ti": 1697.78,
            "Y": 14.09,
            "Zn": 720.67,
            "Zr": 82.32
        },
        {
            "id": "5f451bb40859216758df9ec1",
            "depth": 78,
            "testId": 447,
            "sampleId": "1.41.58_52",
            "date": "08.19.2020    02:46 AM",
            "analyzerId": "X550-00300",
            "Al": 92769.09,
            "As": 10.64,
            "Ca": 4255.84,
            "Cu": 100.55,
            "Fe": 32222.36,
            "K": 34563.97,
            "Mg": 20607.87,
            "Mn": 925.53,
            "P": 308.38,
            "Pb": 22.54,
            "Rb": 70.45,
            "S": 33481.98,
            "Si": 169542.79,
            "Sr": 22.44,
            "Ti": 3093.4,
            "V": 136.36,
            "Y": 22.3,
            "Zn": 204.6,
            "Zr": 127.3
        },
        {
            "id": "5f451bb40859216758df9ec3",
            "depth": 79.5,
            "testId": 448,
            "sampleId": "1.41.58_53",
            "date": "08.19.2020    02:46 AM",
            "analyzerId": "X550-00300",
            "Al": 38293.27,
            "Ca": 7902.26,
            "Cu": 405.04,
            "Fe": 24855.16,
            "K": 16590.25,
            "Mn": 344.63,
            "Ni": 21.35,
            "Pb": 133.82,
            "Rb": 42.97,
            "S": 39535.53,
            "Si": 211343.63,
            "Sr": 16.08,
            "Ti": 1979.93,
            "Y": 19.8,
            "Zn": 1527.87,
            "Zr": 76.57
        },
        {
            "id": "5f451bb40859216758df9ec5",
            "depth": 81,
            "testId": 449,
            "sampleId": "1.41.58_54",
            "date": "08.19.2020    02:47 AM",
            "analyzerId": "X550-00300",
            "Al": 37202.53,
            "Ca": 3409.41,
            "Cu": 5415.17,
            "Fe": 46442.03,
            "K": 2473.74,
            "Mn": 307.38,
            "Pb": 934.87,
            "S": 131538.03,
            "Si": 285390.53,
            "Ta": 1089.47,
            "Ti": 447.63,
            "Zn": 286045.91
        },
        {
            "id": "5f451bb40859216758df9ec7",
            "depth": 82.5,
            "testId": 450,
            "sampleId": "1.41.58_55",
            "date": "08.19.2020    02:47 AM",
            "analyzerId": "X550-00300",
            "Al": 59646.06,
            "Ca": 11776.22,
            "Cu": 491.72,
            "Fe": 38248.27,
            "K": 36231.53,
            "Mn": 934.42,
            "Pb": 82.7,
            "Rb": 92.98,
            "S": 37183,
            "Si": 234783.84,
            "Sr": 67.81,
            "Ti": 3753.39,
            "Y": 20.94,
            "Zn": 144.84,
            "Zr": 91.32
        },
        {
            "id": "5f451bb40859216758df9ec9",
            "depth": 84,
            "testId": 451,
            "sampleId": "1.41.58_56",
            "date": "08.19.2020    02:48 AM",
            "analyzerId": "X550-00300",
            "Al": 45803.89,
            "As": 12.67,
            "Ca": 1329.99,
            "Cu": 841.79,
            "Fe": 61924.06,
            "K": 18608.91,
            "Mn": 1456.36,
            "Rb": 36.46,
            "S": 50690.28,
            "Si": 126753.17,
            "Sr": 9.61,
            "Ti": 2913.6,
            "Zn": 1664.22,
            "Zr": 66.44
        },
        {
            "id": "5f451bb40859216758df9ecb",
            "depth": 85.5,
            "testId": 452,
            "sampleId": "1.41.58_57",
            "date": "08.19.2020    02:50 AM",
            "analyzerId": "X550-00300",
            "Al": 4643.42,
            "Ca": 403.31,
            "Co": 309.5,
            "Cu": 34329.55,
            "Fe": 90197.74,
            "K": 305.78,
            "S": 177037.64,
            "Si": 225241.6,
            "Zn": 123.25
        },
        {
            "id": "5f451bb40859216758df9ecd",
            "depth": 87,
            "testId": 453,
            "sampleId": "1.41.58_58",
            "date": "08.19.2020    02:51 AM",
            "analyzerId": "X550-00300",
            "Al": 14392.77,
            "Ca": 204665.15,
            "Cu": 330.85,
            "Fe": 12069.98,
            "K": 1793.84,
            "Mn": 1838.39,
            "S": 79479.85,
            "Si": 57697.24,
            "Sr": 179.87,
            "Zn": 103.54,
            "Zr": 19.88
        },
        {
            "id": "5f451bb40859216758df9ecf",
            "depth": 88.5,
            "testId": 454,
            "sampleId": "1.41.58_59",
            "date": "08.19.2020    02:51 AM",
            "analyzerId": "X550-00300",
            "Al": 8830.87,
            "Ca": 5261.31,
            "Cu": 12069.64,
            "Fe": 34433.44,
            "K": 963.29,
            "Mn": 69.79,
            "Pb": 23.6,
            "S": 115225.89,
            "Si": 304297.66,
            "Zn": 145.62
        },
        {
            "id": "5f451bb40859216758df9ed1",
            "depth": 90,
            "testId": 455,
            "sampleId": "1.41.58_60",
            "date": "08.19.2020    02:52 AM",
            "analyzerId": "X550-00300",
            "Al": 53067.6,
            "Ca": 106074.09,
            "Cu": 1937.38,
            "Fe": 68833.94,
            "K": 6925.18,
            "Mn": 5561.31,
            "Pb": 71.03,
            "Rb": 21.86,
            "S": 74661.98,
            "Si": 180154.65,
            "Sr": 87.68,
            "Ti": 4816.25,
            "V": 163.32,
            "Y": 54.48,
            "Zn": 280.25,
            "Zr": 86.48
        },
        {
            "id": "5f451bb40859216758df9ed3",
            "depth": 91.5,
            "testId": 456,
            "sampleId": "1.41.58_61",
            "date": "08.19.2020    02:52 AM",
            "analyzerId": "X550-00300",
            "Al": 7229.33,
            "Ca": 1690.63,
            "Cu": 1190,
            "Fe": 76942.81,
            "Mn": 869.19,
            "Pb": 23.59,
            "S": 130429.03,
            "Si": 415316.51,
            "Ti": 637.91,
            "Zn": 129.62,
            "Zr": 12.99
        }
    ];

    data.getMaxAmount = function (element) {
        return _.maxBy(data, (o) => {
            return o[element];
        })[element];
    }

    data.getMaxDepth = function () {
        return _.maxBy(data, (o) => {
            return o.depth;
        }).depth;
    }

    return data;
}

export const data = getData();
export const elements = [
    "Al",
    "As",
    "Ca",
    "Cu",
    "Fe",
    "K",
    "Mn",
    "Pb",
    "Rb",
    "S",
    "Si",
    "Sr",
    "Ti",
    "V",
    "Y",
    "Zn",
    "Zr"
];

export const viewElements = [
  'Fe',
  'Al',
  'Mn',
  'Cu'
];

export const colors = [
    "MediumSpringGreen",
    "Khaki",
    "IndianRed"
]