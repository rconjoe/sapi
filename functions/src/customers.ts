import { assert } from './helpers';
import {db, stripe } from './config';

/**
 * read the user doc from firestore
 */
export const getUser = async (uid: string) => {
  return await db.collection('users').doc(uid).get().then(doc => doc.data());
}

/**
 * gets a customer from stripe
 */
export const getCustomer = async (uid: string) => {
  const user = await getUser(uid);
  return assert(user, 'stripeCustomerId');
}

/**
 * updates the user document
 */
export const updateUser = async(uid: string, data: Object) => {
  return await db.collection('users').doc(uid).set(data, { merge: true })
}

/**
 * takes a firebase user and creates a stripe customer account
 */

export const createCustomer = async (uid: any) => {
  const customer = await stripe.customers.create({
     metadata: { firebaseUID: uid }
  })
  
  await updateUser(uid, { stripeCustomerId: customer.id })

  return customer;
}
 
/**
 * read the stripe customer ID from firestore, of create a new one if missing
 */
export const getOrCreateCustomer = async (uid: string) => {

  const user = await getUser(uid);
  const customerId = user && user.stripeCustomerId;

  // if missing customerID, create it
  if (!customerId) {
    return createCustomer(uid);
  } else {
    return stripe.customers.retrieve(customerId);
  }
}