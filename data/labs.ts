// Centralised data for all lab pages.
// Migrated from: lab_AP.php, lab_COS.php, lab_EDC.php, lab_MASC.php,
//                lab_NA.php, lab_PE.php, lab_PGL.php, lab_PL.php
// lab_CS.php was fully commented-out (/* ... */) in the original — omitted here.

export interface LabData {
  id: string;
  title: string;
  description: string;
  courses: string[];
  resources: string[];
  software: string[];
}

export const labs: LabData[] = [
  {
    id: "lab_AP",
    title: "APPLICATION PACKAGE",
    description:
      "This laboratory is equipped with the various simulation license software which is utilized by the students for their projects. The following license softwares are installed: MATLAB, KEIL MICROVISION, MULTISIM, Xilinx. The laboratory covered the software part of the fundamental subjects like Electronics Communication, Embedded Systems, Digital Signal Processing (DSP) and Digital Image Processing (DIP).",
    courses: [
      "EC254: Mini Project-I",
      "EC343: Digital Signal Processing",
      "EC365: Software Modelling",
      "EC281.01: Introduction to MATLAB Programming",
      "EC356: VLSI Technology & Design",
      "EC382: Digital System Design",
    ],
    resources: [
      "Number of Computers: 23",
      "Operating System: Windows 7 Professional & Linux - Ubuntu OS (Dual Boot)",
      "Model: Lenovo 7413",
      "Processor: Intel Core 2 Duo 2.8GHz",
      "RAM: 2GB",
      "Storage: 320GB HDD",
      "Switch: CISCO 1GB Fast Ethernet 24 Port Switch",
    ],
    software: [
      "Tina Make Pro Education Version - 5 Users",
      "MicroTutor 'C (consisting of 3 CDs) 20 Users",
      "MicroTutor 'JAVA (consisting of 8 CDs) 20 Users",
      "Educational practice board (Philips Microcontroller Board 8051 Family)",
      "I/O Interfacing board",
      "Microtutor '51 (assembler simulator/debugger, Linker, C-Cross compiler, Integrated programming Tool, visual code generator)",
      "Micro Tutor '86",
      "Work Books",
      "Matlab 6.5 - 10 Users",
      "Simulink 5.0 - 10 Users",
      "VLSI Design Trainer System & CPLD & FPGA Trainer system",
      "ALTERA UNI. PROGRAM SOFTWARE PACKAGE (Permanent License)",
      "VLSI-VHDL-FPGA-CPLD Design Lab software (Permanent License)",
      "Incremental Design, Place & Route Verification, Device Programming",
    ],
  },
  {
    id: "lab_COS",
    title: "COMMUNICATION SYSTEM",
    description:
      "The laboratory is equipped to study the concepts and theory of Analog and Digital Communication. The lab includes all the necessary equipments for analog and digital communication. The laboratory is equipped with following main equipments: AM/FM Signal Generator (100 KHz-260MHz), Analog Modulation Trainer, Frequency modulation trainer, PSK Generator, Digital Storage Oscilloscope.",
    courses: [
      "EC248: Analog Communication",
      "EC348: Digital Communication",
      "EC451: Data Communication & Networking",
      "EC454: Optical Communication",
    ],
    resources: [
      "Number of Computers: 23",
      "Operating System: Windows/Linux",
      "Model: HCL",
      "Processor: INTEL CORE i3 2100, 3.1GHZ",
      "RAM: 4GB DDR-3",
      "Storage: 320GB SATA HDD",
      "Cisco Manageable Network Switch",
    ],
    software: [
      "CodeBlocks",
      "VMWare Virtual Box",
      "Pycharm (Python)",
      "Adobe Acrobat Document",
      "Notepad++",
      "Netbeans (Java)",
      "Microsoft Office",
    ],
  },
  {
    id: "lab_EDC",
    title: "ELECTRONICS DEVICES AND CIRCUITS (EDC)",
    description:
      "The laboratory is designed to give exposure in practical works for each and every concept, theory, and phenomena in the analog world of Electronics starting from basic diode, transistor, operational amplifier, filters & oscillators. The laboratory is occupied for practical works of subjects like Integrated Circuits and Applications (ICA), Project Work, Solid State Electronics (SSE). The laboratory is equipped with Digital/Analog Storage DSO/CRO 100MHz, Freq. Counter, CRO with DMM, Logic-Analyzer, and Complete PCB Designing Solution PROTEL DXP.",
    courses: [
      "EC253: Electronics Devices & Measurement",
      "EC248: Analog Circuits & Applications",
    ],
    resources: [
      "Digital/Analog Storage DSO/CRO 100MHz",
      "Freq. Counter",
      "CRO with DMM",
      "Logic-Analyzer",
    ],
    software: ["PROTEL DXP PCB Designing software"],
  },
  {
    id: "lab_MASC",
    title: "MICROWAVE AND SATELLITE COMMUNICATION",
    description:
      "The laboratory is equipped to understand and verify the theorems, concepts and phenomena in wireless communication covering the subjects: Antenna Engineering, Radar Engineering, and Radio Frequency and Microwave Engineering.",
    courses: [
      "EC354: Electromagnetics & Antenna Technology",
      "EC452: RF & Microwave Engineering",
    ],
    resources: [
      "Microwave Test Bench",
      "RADAR Training System RTS-03",
      "Satellite Communication Trainer",
      "Wave & Propagation Trainer",
      "Microwave Integrated Circuit Trainer",
      "Antenna Training System & Antenna Trainer",
      "R.F. Synthesizer Signal Generator",
    ],
    software: [
      "Ansys Electronics Bench (HFSS - High Frequency Structure Simulator)",
      "Designer (Circuit Design)",
    ],
  },
  {
    id: "lab_NA",
    title: "NETWORK ANALYSIS",
    description:
      "The laboratory is designed to understand and verify the theorems of Network Theory and the fundamental theory of Optical Communication. Network theory experiments are verified using discrete components designed on breadboard. The laboratory is equipped with Fiber Optic Trainer, Fiber Optics Connectorization cum Splicing, and Advanced Fiber Optics Communication kit.",
    courses: [
      "EC252: Network Theory",
      "EC360: Summer Internship-I",
      "EC456: Summer Internship-II",
    ],
    resources: [
      "Fiber Optic Trainer",
      "Fiber Optics Connectorization cum Splicing",
      "Advance Fiber Optics Communication kit",
    ],
    software: [],
  },
  {
    id: "lab_PE",
    title: "Power Electronics",
    description:
      "The laboratory is equipped to study the basic concept of Power Electronics and Audio Video Engineering. It covers basic experiments of Thyristor to Chopper, Inverter circuits and fundamental experiments of Audio Video Engineering. The laboratory is equipped with Single phase Half/Full wave Rectifier trainer, Three phase Half/Full Wave Rectifier Trainer, Universal AC Motor Controlled Using SCR Trainer, Color TV trainer, DSO, CRO, Power Scope.",
    courses: [
      "EE145: Basic Of Electronics & Electrical Engineering",
      "EC251: Digital Electronics & Logic Design",
    ],
    resources: [
      "Single phase Half/Full wave Rectifier trainer",
      "Three phase Half/Full Wave Rectifier Trainer",
      "Universal AC Motor Controlled Using SCR Trainer",
      "Color TV trainer",
      "DSO, CRO, Power Scope",
    ],
    software: [],
  },
  {
    id: "lab_PGL",
    title: "POST GRADUATE LAB",
    description:
      "This laboratory is equipped to simulate the various experiments of VLSI Designs. The laboratory is equipped with license simulation softwares: Digital and Analog design using Cadence, Digital System Design using FPGA Technology, Xilinx, and Verification using system verilog on EDA Playground.",
    courses: [
      "EC364: Embedded Software Design & Implementation",
      "EC359: Group Project-I",
      "EC455: Group Project-II",
      "EC356: VLSI Technology & Design",
      "EC367: Verilog Programming",
    ],
    resources: [
      "Cadence Encounter, RTL compiler, Digital Implementation for Digital VLSI",
      "Cadence Analog Design Environment Virtuoso IC 6.1.7 for Analog VLSI",
      "VLSI and Digital System Design using FPGA Technology",
      "Xilinx flash programming with FPGA",
      "Verification using system verilog on EDA Playground",
    ],
    software: ["Cadence UG Bundle", "FPGA", "Xilinx ISE", "Proteus"],
  },
  {
    id: "lab_PL",
    title: "PROJECT LAB",
    description:
      "This laboratory is fully occupied for the Project, dissertation and research work of the B.Tech and M.Tech students. Students can develop their ideas, concepts and pursue their research. The laboratory is equipped with multiple computer systems with license softwares.",
    courses: [
      "EC282.01: Prototyping Electronics with Arduino",
      "EC358: Microcontroller & Application",
      "EC364: Embedded Systems",
      "EC259: Mini Project-II",
      "EC368: Introduction to Embedded Linux",
    ],
    resources: [
      "Number of Computers: 25",
      "Operating System: Windows 7 Professional & Linux - Ubuntu OS (Dual Boot)",
      "Model: Lenovo 7413",
      "Processor: Intel Core 2 Duo 2.8 GHz",
      "RAM: 2GB",
      "Storage: 320GB HDD",
      "Switch: CISCO 1GB Fast Ethernet 24 Port Switch",
    ],
    software: [
      "PLC Trainer kit 'SCIENTECH' Make Model: 2401",
      "Networking Trainer System PCI card based LAN Trainer",
      "Embedded Development System (Economy Model)",
      "Multisim 7 Edu. Version SPICE simulation & schematic capture software",
      "Ultiboard Edu. Version 2001 PCB Design Software",
      "MATLAB 2012a (25 Users), MATLAB 2013a",
      "CPLD Development Platform Make: Scientech Model: ST105",
      "ARM 7 Advance Development Board (LPC2148)",
      "Keil MDK-ARM-ED25 Software - Microcontroller Dev.Kit",
      "All-in-one DSP Edu. Board (TMS320C671), Color CCD Camera, Edu. ARM Cortex M3 LPC 1768",
      "JTAG Debugger, IDE Conf. ARM Platform, FREERTOS & VCOSII Porting",
      "Waxwing Spartan 6 FPGA Developing Board",
    ],
  },
];

export function getLabById(id: string): LabData | undefined {
  return labs.find((lab) => lab.id === id);
}
