import type { User } from '@supabase/supabase-js';
import type { AuthRepository, RegistrationResult } from '@/domain/repositories/AuthRepository';
import type { Profile } from '@/domain/entities/Profile';
import { isSupabaseConfigured, supabase } from '@/data/supabase/client';

function requireClient() {
  if (!supabase) {
    throw new Error('Authentication is not configured. Add the Supabase URL and publishable key to your .env file.');
  }
  return supabase;
}

function toProfile(user: User): Profile {
  const email = user.email ?? '';
  const username = typeof user.user_metadata?.username === 'string'
    ? user.user_metadata.username
    : email.split('@')[0] ?? '';
  return { username, email, avatar: username.slice(0, 1).toUpperCase() };
}

export class SupabaseAuthRepository implements AuthRepository {
  async getCurrentProfile(): Promise<Profile | null> {
    if (!isSupabaseConfigured || !supabase) return null;
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) return null;
    return toProfile(data.user);
  }

  async signIn(email: string, password: string): Promise<Profile> {
    const client = requireClient();
    const { data, error } = await client.auth.signInWithPassword({ email: email.trim(), password });
    if (error) throw error;
    if (!data.user) throw new Error('Sign-in did not return a user. Please try again.');
    return toProfile(data.user);
  }

  async signUp(email: string, password: string, username: string): Promise<RegistrationResult> {
    const client = requireClient();
    const { data, error } = await client.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { username: username.trim() } },
    });
    if (error) throw error;
    return {
      profile: data.session && data.user ? toProfile(data.user) : null,
      confirmationRequired: !data.session,
    };
  }

  async signOut(): Promise<void> {
    const client = requireClient();
    const { error } = await client.auth.signOut();
    if (error) throw error;
  }
}
