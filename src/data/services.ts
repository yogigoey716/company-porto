import { Service } from "../types";

export const servicesData: Service[] = [
  {
    id: "structural-analysis",
    title: "Structural Analysis",
    description: "Analisis dan perhitungan mendalam untuk struktur baja menggunakan software mutakhir (SAP2000, ETABS) yang sesuai dengan standar SNI dan AISC.",
    iconName: "Activity",
  },
  {
    id: "steel-design",
    title: "Detailing & Desain Baja",
    description: "Pembuatan shop drawing dan fabrication drawing dengan presisi tinggi untuk kebutuhan manufaktur dan pabrikasi baja.",
    iconName: "PenTool",
  },
  {
    id: "inspection-qc",
    title: "Inspeksi & Quality Control",
    description: "Pemeriksaan kualitas sambungan, pengelasan, dan material baja di lapangan sesuai standar AWS, AISC, dan spesifikasi proyek.",
    iconName: "SearchCheck",
  },
  {
    id: "project-management",
    title: "Manajemen Proyek",
    description: "Pengawasan dan manajemen pelaksanaan konstruksi mulai dari fase perencanaan, procurement, hingga serah terima proyek.",
    iconName: "ClipboardList",
  },
  {
    id: "permit-services",
    title: "Layanan Izin PBG/SLF",
    description: "Konsultasi teknis dan pendampingan pengurusan Persetujuan Bangunan Gedung (PBG) & Sertifikat Laik Fungsi (SLF).",
    iconName: "FileCheck2",
  },
  {
    id: "value-engineering",
    title: "Value Engineering",
    description: "Optimalisasi desain struktur untuk mencapai efisiensi biaya material tanpa mengorbankan keamanan dan kualitas bangunan.",
    iconName: "BarChart3",
  }
];
