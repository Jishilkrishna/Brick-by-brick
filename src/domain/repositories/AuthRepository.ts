import type { Profile } from '@/domain/entities/Profile';

export type RegistrationResult = {
  profile: Profile | null;
  confirmationRequired: boolean;
};

export interface AuthRepository {
  getCurrentProfile(): Promise<Profile | null>;
  signIn(email: string, password: string): Promise<Profile>;
  signUp(email: string, password: string, username: string): Promise<RegistrationResult>;
  signOut(): Promise<void>;
}
