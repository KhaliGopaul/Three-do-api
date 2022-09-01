import { initializeApp, cert, getApps } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export function dbConnect() {
  //returns an array of all of the Firebase services (eg. Firestore) that we are connected to)
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
}
