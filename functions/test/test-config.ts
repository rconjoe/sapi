import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyAYHQBqD9KxqZFvXDThwoFbf4eG-VdmKiU",
  authDomain: "stripe-500c8.firebaseapp.com",
  databaseURL: "https://stripe-500c8.firebaseio.com",
  projectId: "stripe-500c8",
  storageBucket: "stripe-500c8.appspot.com",
  messagingSenderId: "650441918600",
  appId: "1:650441918600:web:b467d9df4b5ffa82c8f73d",
  measurementId: "G-4VV0DMPS4C"
};

const envConfig = { stripe: { secret: 'sk_test_51HJUgfGoIl5NLNcQ8xzPwo3tXqwoaGym8ZXwPBxbVWuOEEdCQxst4ORTV9x8GU4k4TK9uyFFiB9zLHMvDMLSV9UW00N8C4ejVB' } };

const fun = TestFunctions(firebaseConfig, 'service-account.json');

fun.mockConfig(envConfig);

export { fun };