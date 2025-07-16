export interface LandingPageProps {
  refs: {
    home: React.RefObject<HTMLDivElement | null>;
    about: React.RefObject<HTMLDivElement | null>;
    skills: React.RefObject<HTMLDivElement | null>;
    projects: React.RefObject<HTMLDivElement | null>;
    experience: React.RefObject<HTMLDivElement | null>;
    contact: React.RefObject<HTMLDivElement | null>;
  };
}