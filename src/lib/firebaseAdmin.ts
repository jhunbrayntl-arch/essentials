// Firebase Admin SDK Configuration
// For server-side operations (API routes, etc.)

import * as admin from 'firebase-admin';

// Initialize Firebase Admin only if credentials exist
function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin;
  }

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  // Only initialize if all credentials are present
  if (projectId && clientEmail && privateKey) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          // Remove quotes and handle newlines properly
          privateKey: privateKey.replace(/\\n/g, '\n').replace(/^"|"$/g, ''),
        }),
      });
      console.log('✓ Firebase Admin SDK initialized successfully');
    } catch (error) {
      console.error('✗ Firebase Admin SDK initialization failed:', error);
    }
  } else {
    console.warn('Firebase Admin SDK not initialized - missing credentials');
    console.warn('Add FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY to .env.local');
  }

  return admin;
}

const adminApp = initializeAdmin();

// Export admin services (may be undefined if not initialized)
export const auth = adminApp.auth;
export const db = adminApp.firestore;
export const storage = adminApp.storage;

export default adminApp;
