// initialize firebase admin
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// initialize firestore db
export const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// env variables
export const stripeSecret = functions.config().stripe.secret;

// instantiate and export stripe - include api versioning
import Stripe from 'stripe'; 
export const stripe = new Stripe(stripeSecret, {
    apiVersion: '2020-08-27',
});
