import type { HabitTask } from '@/domain/entities/HabitTask';

export function createHabitTask(name: string, xpValue: string): HabitTask | null {
  const normalizedName = name.trim();
  const xp = Number(xpValue);
  if (!normalizedName || !Number.isFinite(xp) || xp < 1) return null;
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, name: normalizedName, xp: Math.floor(xp), done: false };
}

export function calculateEarnedXp(tasks: HabitTask[]): number {
  return tasks.reduce((total, task) => total + (task.done ? task.xp : 0), 0);
}
