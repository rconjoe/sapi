import * as functions from 'firebase-functions';

/**
 * validates data payload of a callable function
 */
export const assert = (data: any, key: string) => {
  if (!data[key]) {
    throw new functions.https.HttpsError('invalid-argument', `function called without ${key} data`);
  } else {
    return data[key];
  }
}

/**
 * validates auth context for callable function
 */
export const assertUID = (context: any) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('permission-denied', 'function called without context.auth');
  } else {
    return context.auth.uid;
  }
}

/**
 * sends a descriptive error response when running a callable function
 */
export const catchErrors = async () => {
  try {
    return await Promise;
  } catch (err) {
    throw new functions.https.HttpsError('unknown', err)
  }
}