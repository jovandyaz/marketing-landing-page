export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badges: string[];
  popular?: boolean;
}
