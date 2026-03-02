// ════════════════════════════════════════════════════════
// NEXT-GEN CREATIVE — FIREBASE REALTIME DATABASE CONFIG
// ════════════════════════════════════════════════════════
// 
// INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing
// 3. Create a Realtime Database
// 4. Copy your database URL below
// 5. Replace YOUR-PROJECT with your actual project ID
//
// Example URL format:
// https://your-project-name-default-rtdb.firebaseio.com
//
// The URL will be shown in Firebase Console under:
// Project → Realtime Database → (Copy URL from the top)

// ⚠️ CHANGE THIS TO YOUR FIREBASE DATABASE URL
const FIREBASE_URL = "https://YOUR-PROJECT-default-rtdb.firebaseio.com";

// ════════════════════════════════════════════════════════
// IMPORTANT SETUP STEPS:
// ════════════════════════════════════════════════════════
//
// 1. DATABASE CREATION:
//    - Firebase Console → Realtime Database
//    - Select "Start in test mode"
//    - Location: Choose closest to your users
//
// 2. SECURITY RULES:
//    - Go to Rules tab in Realtime Database
//    - Update rules for your domain
//    - Enable CORS for your domain
//
// 3. ENABLE CORS:
//    - Project Settings → Authorized domains
//    - Add your domain (e.g., yoursite.com)
//
// 4. TEST CONNECTION:
//    - Open admin panel (/admin/)
//    - You should see "✅ Database connected" or error if not configured
//
// ════════════════════════════════════════════════════════
// EXAMPLE SECURITY RULES (Copy to Firebase Console):
// ════════════════════════════════════════════════════════
//
// {
//   "rules": {
//     "site-config": {
//       ".read": true,
//       ".write": false  // Only via backend
//     },
//     "designs": {
//       ".read": true,
//       ".write": false  // Only via backend
//     },
//     "orders": {
//       ".read": true,
//       ".write": true  // Public write (can add own security)
//     }
//   }
// }
//
// ════════════════════════════════════════════════════════
// BACKEND API (Node.js example):
// ════════════════════════════════════════════════════════
//
// const admin = require('firebase-admin');
// admin.initializeApp({
//   databaseURL: "https://YOUR-PROJECT-default-rtdb.firebaseio.com"
// });
//
// // Update site config
// app.post('/api/config', async (req, res) => {
//   await admin.database().ref('site-config').set(req.body);
//   res.json({success: true});
// });
//
// // Update designs
// app.post('/api/designs', async (req, res) => {
//   await admin.database().ref('designs').set(req.body);
//   res.json({success: true});
// });
//
// ════════════════════════════════════════════════════════
// TROUBLESHOOTING
// ════════════════════════════════════════════════════════
//
// Q: Getting "Firebase not configured" message?
// A: Update FIREBASE_URL above with your actual URL
//
// Q: Getting CORS errors?
// A: Add your domain to Firebase Authorized Domains
//
// Q: Data not saving?
// A: Check Firebase security rules allow writes
//
// Q: Still not working?
// A: Check browser console (F12) for error messages
//
// ════════════════════════════════════════════════════════
