# Firebase Setup Guide for Essentials

## Quick Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add Project"**
3. Enter project name: `essentials`
4. Complete the setup wizard

### 2. Register Web App
1. In Firebase Console, click the **Web** icon (`</>`)
2. Register app with nickname: `Essentials Web`
3. **Copy the Firebase config** - you'll need these values

### 3. Enable Authentication
1. In Firebase Console, go to **Build** → **Authentication**
2. Click **Get Started**
3. Enable these sign-in methods:
   - ✅ Email/Password
   - ✅ Google (optional)

### 4. Enable Firestore Database
1. Go to **Build** → **Firestore Database**
2. Click **Create Database**
3. Start in **Test Mode** (for development)
4. Choose a location close to your users

### 5. Enable Storage (Optional)
1. Go to **Build** → **Storage**
2. Click **Get Started**
3. Start in **Test Mode**

### 6. Configure Environment Variables

1. Open Firebase Console → **Project Settings** (gear icon)
2. Scroll to **"Your apps"** section
3. Copy the config values
4. Open `.env.local` file in your project
5. Paste your values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 7. Install & Run

```bash
npm install          # Already done - Firebase is installed
npm run dev          # Start development server
```

## Usage Examples

### Import Firebase Services

```typescript
import { auth, db, storage } from '@/lib/firebase';
```

### Use Authentication

```typescript
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { user, loading, signIn, signUp, logout } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please sign in</div>;

  return <div>Welcome, {user.email}!</div>;
}
```

### Wrap Your App with AuthProvider

In `src/app/layout.tsx`:

```typescript
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### Firestore Example

```typescript
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add document
await addDoc(collection(db, 'products'), {
  name: 'Product Name',
  price: 99,
  createdAt: new Date()
});

// Get documents
const snapshot = await getDocs(collection(db, 'products'));
snapshot.forEach(doc => console.log(doc.data()));
```

## Security Rules

### Firestore Rules (Production)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{product} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules (Production)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Next Steps

1. ✅ Set up Firebase project
2. ✅ Enable Authentication
3. ✅ Enable Firestore
4. ✅ Configure `.env.local`
5. ✅ Wrap app with `AuthProvider`
6. ✅ Start building features!

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Firestore Docs](https://firebase.google.com/docs/firestore)
- [Firebase Storage Docs](https://firebase.google.com/docs/storage)
