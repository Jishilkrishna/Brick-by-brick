export function validateLogin(email: string, password: string): string | null {
  if (!/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
    return 'Enter a valid email and a password with at least 6 characters.';
  }
  return null;
}

export function validateRegistration(username: string, email: string, password: string): string | null {
  if (username.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
    return 'Add a username, a valid email, and a password with at least 6 characters.';
  }
  return null;
}
