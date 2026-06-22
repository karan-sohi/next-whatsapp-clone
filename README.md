# WhatsApp Clone 💬

> A real-time messaging web app built with Next.js and Firebase — featuring Google sign-in, live chat, and friend management.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-58a6ff?style=for-the-badge&logo=vercel)](https://next-whatsapp-clone-delta.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)

## Features

- **Google sign-in** — authentication via Firebase, user data persisted in Firestore
- **Real-time messaging** — messages appear instantly using Firestore listeners
- **Add friends by email** — invite contacts into a chat room
- **Message timestamps** — each message shows when it was sent
- **Last-seen status** — see when a friend was last online
- **Persistent chats** — conversation history is stored in Firebase

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js |
| Auth | Firebase Authentication (Google) |
| Database | Firebase Firestore |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 16+
- A Firebase project with **Firestore** and **Google Authentication** enabled

### Installation

```bash
git clone https://github.com/karan-sohi/next-whatsapp-clone.git
cd next-whatsapp-clone
npm install
```

### Firebase Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

MIT
