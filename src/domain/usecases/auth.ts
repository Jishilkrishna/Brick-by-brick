import type { AuthRepository, RegistrationResult } from '@/domain/repositories/AuthRepository';
import type { Profile } from '@/domain/entities/Profile';

export function createAuthUseCases(repository: AuthRepository) {
  return {
    getCurrentProfile: (): Promise<Profile | null> => repository.getCurrentProfile(),
    signIn: (email: string, password: string): Promise<Profile> => repository.signIn(email, password),
    signUp: (email: string, password: string, username: string): Promise<RegistrationResult> =>
      repository.signUp(email, password, username),
    signOut: (): Promise<void> => repository.signOut(),
  };
}
