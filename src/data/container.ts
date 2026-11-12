import { SupabaseAuthRepository } from '@/data/repositories/SupabaseAuthRepository';
import { createAuthUseCases } from '@/domain/usecases/auth';

// Composition root: the UI depends on domain use cases, not Supabase APIs.
export const sessionUseCases = createAuthUseCases(new SupabaseAuthRepository());
