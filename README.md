# Brick by Brick

Brick by Brick is an Expo and React Native habit-building app. Its interface uses a dark charcoal palette with fluorescent lime accents.

## Architecture

Expo Router files in `src/app` are route adapters. Feature screens live under `src/features`. Business rules and repository contracts live in `src/domain`; storage implementations live in `src/data`. The root layout injects use cases through the application session context.

```text
src/
├── app/                 # Expo Router routes and navigation layouts
├── application/         # Use-case context exposed to presentation
├── data/
│   ├── repositories/    # Storage and external service adapters
│   └── container.ts     # Composition root that wires adapters to use cases
├── domain/
│   ├── entities/        # Core app types
│   ├── repositories/    # Interfaces owned by the domain
│   └── usecases/        # Business rules independent of React Native
├── features/            # Auth, home, solo, squad, room, profile, and start UI
└── shared/              # Brand theme and navigation UI
```

Domain code depends on repository interfaces. Data adapters implement those interfaces, and the app composition root connects them.

## Current data behavior

Authentication uses Supabase Auth password sign-in and registration. Supabase issues and refreshes the JWT session; native sessions are persisted with AsyncStorage. Email confirmation may be required depending on the Supabase Auth project settings.

There are no seeded accounts, habits, rooms, members, XP totals, or medals. Habit and room screens start empty. User-created habit entries are currently held in screen state and are not synced or persisted.

Copy `.env.example` to `.env` and set `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from your Supabase project before running the app. These are the client URL and publishable key; never put a Supabase service-role key in the mobile app.

## Run

```sh
npm install
npm run start
```

Use the Expo Go app to open the development server on a device, or press `w` in the Expo terminal to open the web version.
