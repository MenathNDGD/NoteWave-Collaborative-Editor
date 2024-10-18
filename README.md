<div align="center">
  <br />
     <a href="#" target="_blank">
        <img src="public/assets/icons/logo.png" alt="NoteWave">
      </a>
  <br />
  <h1 align="center">Your Go-To Collaborative Editor</h1>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/Liveblocks-4E56A6.svg?style=for-the-badge&logo=Liveblocks&logoColor=white" alt="liveblocks" />
    <img src="https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white" alt="clerk" />
    <img src="https://img.shields.io/badge/Lexical-1FB8CD.svg?style=for-the-badge&logo=Lexical&logoColor=white" alt="lexical" />
    <img src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="shadcn" />
    <img src="https://img.shields.io/badge/Sentry-362D59.svg?style=for-the-badge&logo=Sentry&logoColor=white" alt="sentry" />
  </div>
  <br/>
   <div align="center">
     A collaborative document editing platform for real-time teamwork. Built with Next.js for performance, Tailwind CSS and Shadcn UI for responsive design, liveblocks for real-time collaboration, Clerk for authentication, Lexical for rich text editing, and Sentry for error monitoring. Streamline document creation, editing, and sharing with ease.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Goole Docs. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- Clerk
- ShadCN UI
- Sentry
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication**: User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management.

👉 **Collaborative Text Editor**: Multiple users can edit the same document simultaneously with real-time updates.

👉 **Documents Management**

- **Create Documents**: Users can create new documents, which are automatically saved and listed.
- **Delete Documents**: Users can delete documents they own.
- **Share Documents**: Users can share documents via email or link with view/edit permissions.
- **List Documents**: Display all documents owned or shared with the user, with search and sorting functionalities.

👉 **Comments**: Users can add inline and general comments, with threading for discussions.

👉 **Active Collaborators on Text Editor**: Show active collaborators with real-time presence indicators.

👉 **Notifications**: Notify users of document shares, new comments, and collaborator activities.

👉 **Responsive**: The application is responsive across all devices.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MenathNDGD/NoteWave-Collaborative-Editor.git
cd NoteWave-Collaborative-Editor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` or `.env.local` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=

#Sentry
SENTRY_AUTH_TOKEN=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
