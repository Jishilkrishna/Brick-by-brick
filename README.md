🏛️ Brick by Brick

Build Your Habits. Level Up Your Life.

A gamified personal habit tracker and squad accountability mobile application built with React Native, Expo, and Supabase.

📖 Overview

Brick by Brick turns daily discipline into a rewarding progression loop. Inspired by Stoic philosophy and modern dark-mode minimalism, the app pairs a high-contrast obsidian black interface with electric fluorescent yellow accents to keep users focused on laying one habit brick at a time.

Whether grinding solo to earn personal consistency medals or teaming up with friends in high-stakes accountability rooms, every completed task pushes the progress bar closer to victory.

✨ Core Features

1. 🔐 Authentication & Profile Trophy Case

Secure Sign-Up & Login: Email/password registration and authentication powered by Supabase Auth.

Persistent Sessions: Automatically keeps users signed in via encrypted device storage (AsyncStorage).

Medal Vault: Displays lifetime XP, active streaks, Solo Leveling medals, and Together We Conquer squad badges.

2. ⚡ Solo Leveling (Self Level Up)

Custom Daily Quests: Users create personal recurring tasks (e.g., "Code for 1 hour", "Drink 3L Water", "Read 10 Pages") with assigned XP values.

Segmented XP Progression: Checking off daily tasks fills the visual level bar in real time.

Midnight Reset: Daily checkboxes automatically refresh at 00:00 local time while preserving accumulated XP.

Milestone Medals: Reaching 100% of the target XP unlocks a permanent Solo Medal in the user's Trophy Case.

3. 🛡️ Together We Conquer (Group Level Up)

A real-time multiplayer accountability mode governed by a strict 4-Stage State Machine:

Stage 1 — Lobby (2 to 10 Players):

A Room Admin creates a squad room and shares a unique 6-digit invite code (e.g., BRK-409).

Task creation remains locked until at least 2 members join, with a hard cap of 10 members maximum.

Stage 2 — Task Drafting & Admin Approval:

Once the squad is ready, each member can propose up to 3 tasks (Pending status).

The Room Admin reviews all proposed tasks, approves or rejects them, sets the Challenge Deadline, and launches the room.

Stage 3 — Active Daily Grind:

Members complete their daily approved tasks and track both their individual completion percentage and the live Squad Progress bar.

Stage 4 — Conquered or Expired:

All-or-Nothing Victory: Individual progress hits 100% when a member finishes their tasks, but the "Together We Conquer" Medal unlocks ONLY if EVERY member reaches 100% before the deadline.

🧭 Application Flow

[Splash Screen] ──▶ (Session Check)
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
   [Login / Register]           [Main Tab Hub]
          │                             │
          └──────────────┬──────────────┘
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
[Solo Leveling]  [Together We Conquer]  [Profile & Vault]
  • Add Tasks      • Join/Create Room     • View XP & Streaks
  • Earn XP        • 2–10 User Gate       • Solo Medals
  • Unlock Medal   • 3 Tasks/User + Admin • Squad Medals
                   • Collective Medal


🛠️ Tech Stack

Frontend Framework: React Native with Expo SDK (Managed Workflow)

Routing: Expo Router (File-based navigation)

Language: TypeScript

Styling: NativeWind (Tailwind CSS) / React Native StyleSheet

State Management: Zustand & TanStack React Query

Backend & Realtime DB: Supabase (PostgreSQL, Auth, Realtime Subscriptions)

Animations: React Native Reanimated & Lottie

Build & Deployment: Expo Application Services (EAS Build & EAS Submit)

📂 Project Structure

brick-by-brick/
├── app/                        # Expo Router file-based screens
│   ├── index.tsx               # Splash screen & auth session gate
│   ├── (auth)/                 # Authentication flow
│   │   ├── login.tsx           # Sign-in screen
│   │   └── register.tsx        # Account creation screen
│   ├── (tabs)/                 # Main bottom-tab navigation
│   │   ├── home.tsx            # Daily overview & active challenges
│   │   ├── solo.tsx            # Solo Leveling task tracker & XP bar
│   │   ├── squad.tsx           # Create or join Together We Conquer rooms
│   │   └── profile.tsx         # User stats & Medal Trophy Case
│   └── room/
│       └── [id].tsx            # Dynamic multiplayer room (Lobby → Draft → Active → Medal)
├── components/                 # Reusable UI components
│   ├── ProgressBar.tsx         # Segmented fluorescent yellow XP bar
│   ├── TaskCard.tsx            # Interactive daily task item
│   └── MedalBadge.tsx          # Locked/Unlocked Stoic medal display
├── lib/                        # Core utilities & API clients
│   ├── supabase.ts             # Supabase client initialization
│   └── constants.ts            # Brand theme colors & XP thresholds
├── store/                      # Global state stores (Zustand)
│   ├── useAuthStore.ts         # User session & profile state
│   └── useRoomStore.ts         # Active squad room state
├── assets/                     # App icons, Stoic logo, splash screen, fonts
├── app.json                    # Expo configuration
└── package.json                # Project dependencies


🚀 Getting Started

Prerequisites

Node.js (v20 LTS or newer)

VS Code (with Expo Tools, ES7+ React/Redux/React-Native snippets, and Prettier extensions)

Expo Go app installed on your physical Android or iOS device

1. Clone & Install Dependencies

git clone https://github.com/your-username/brick-by-brick.git
cd brick-by-brick
npm install


2. Configure Environment Variables

Create a .env file in the root directory and add your Supabase project credentials:

EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


3. Run the Development Server

npx expo start


Scan the QR code displayed in your terminal using Expo Go (Android) or the Camera app (iOS) on the same Wi-Fi network.

Press w in the terminal to preview in your web browser.

🗄️ Database Schema (Supabase)

Table Name

Description

profiles

Stores user metadata (username, avatar_url, solo_xp).

solo_tasks

Tracks personal daily tasks, point values, and target XP milestones.

rooms

Stores multiplayer room info (invite_code, admin_id, status, deadline).

room_members

Tracks users inside each room (enforces the 2–10 player rule and individual %).

group_tasks

Stores member-proposed tasks (max 3 per user) and Admin approval status.

user_medals

Permanent ledger of earned solo and group medals.

📦 Building & Deployment (EAS)

# Install EAS CLI globally
npm install -g eas-cli

# Log in to your Expo account
eas login

# Build a shareable Android APK for testing
eas build -p android --profile preview

# Build production binaries for Google Play & Apple App Store
eas build --platform all --profile production


🗺️ Roadmap

[x] Product architecture & Figma UI/UX dark-fluorescent design system

[ ] Email/Password authentication with Supabase

[ ] Solo Leveling daily task tracker & midnight reset logic

[ ] Together We Conquer room creation, invite codes, and 2–10 player validation

[ ] 3-task proposal limit & Admin approval dashboard

[ ] Push notifications for squad deadlines and daily reminders

[ ] Google Play Store & Apple App Store release

📄 License

This project is licensed under the MIT License.
