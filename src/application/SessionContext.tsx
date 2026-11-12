import { createContext, useContext } from 'react';
import type { createAuthUseCases } from '@/domain/usecases/auth';

export type SessionUseCases = ReturnType<typeof createAuthUseCases>;
const SessionContext = createContext<SessionUseCases | null>(null);

export const SessionProvider = SessionContext.Provider;

export function useSession(): SessionUseCases {
  const session = useContext(SessionContext);
  if (!session) throw new Error('SessionProvider is missing from the app tree.');
  return session;
}
