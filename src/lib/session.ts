import { Platform } from 'react-native';

export type LocalProfile = { username: string; email: string; avatar: string };
const KEY = 'brick-by-brick.session';

async function readStored(): Promise<string | null> {
  if (Platform.OS === 'web') return typeof localStorage === 'undefined' ? null : localStorage.getItem(KEY);
  const { File, Paths } = await import('expo-file-system');
  const file = new File(Paths.document, 'brick-session.json');
  return file.exists ? file.text() : null;
}

export async function getSession(): Promise<LocalProfile | null> {
  try { const value = await readStored(); return value ? JSON.parse(value) as LocalProfile : null; } catch { return null; }
}

export async function saveSession(profile: LocalProfile): Promise<void> {
  const value = JSON.stringify(profile);
  if (Platform.OS === 'web') { if (typeof localStorage !== 'undefined') localStorage.setItem(KEY, value); return; }
  const { File, Paths } = await import('expo-file-system');
  const file = new File(Paths.document, 'brick-session.json');
  if (!file.exists) file.create();
  await file.write(value);
}

export async function clearSession(): Promise<void> {
  if (Platform.OS === 'web') { if (typeof localStorage !== 'undefined') localStorage.removeItem(KEY); return; }
  const { File, Paths } = await import('expo-file-system');
  const file = new File(Paths.document, 'brick-session.json');
  if (file.exists) file.delete();
}
