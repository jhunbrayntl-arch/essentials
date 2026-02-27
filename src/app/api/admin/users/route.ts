import { NextRequest, NextResponse } from 'next/server';
import admin from '@/lib/firebaseAdmin';

// Example: Get all users (Admin operation)
export async function GET(request: NextRequest) {
  try {
    const userList = await admin.auth().listUsers();
    
    return NextResponse.json({
      users: userList.users.map(user => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        createdAt: user.metadata.creationTime,
      })),
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// Example: Create a custom token for a user
export async function POST(request: NextRequest) {
  try {
    const { uid } = await request.json();
    
    if (!uid) {
      return NextResponse.json(
        { error: 'UID is required' },
        { status: 400 }
      );
    }
    
    // Create custom token
    const customToken = await admin.auth().createCustomToken(uid);
    
    return NextResponse.json({
      customToken,
      message: 'Custom token created successfully',
    });
  } catch (error) {
    console.error('Error creating custom token:', error);
    return NextResponse.json(
      { error: 'Failed to create custom token' },
      { status: 500 }
    );
  }
}
