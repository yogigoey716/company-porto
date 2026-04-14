export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // for lucide-react icons
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  client: string;
  location: string;
  year: number;
  category: string;
  image: string; // url to unsplash
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string; // url to unsplash
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  history: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  stats: {
    experienceYears: number;
    completedProjects: number;
    happyClients: number;
  };
}
