export interface AuthContextType {
    token: string | null;
    login: (jwt: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
  }