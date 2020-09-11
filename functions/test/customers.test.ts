import { fun } from './test-config';
fun.cleanup;

import { getOrCreateCustomer, updateUser } from '../src/customers';

let user: any;

beforeAll(async () => {
  user = { uid: Date.now().toString(), email: 'test@test.com' };
  await updateUser(user.uid, user);
});

test('getOrCreateCustomer creates/retrieves a Stripe Customer', async () => {
  const cust = await getOrCreateCustomer(user.uid);

  expect(cust.id).toContain('cus_');


/* fix this test so you can check metadata against firebase. 
   it's broken because we need to expand the customer object
   to include metadata in the reponse back in customers.ts:


  expect(cust.metadata.firebaseUID).toEqual(user.uid);

  const userDoc = await getUser(user.uid);

  expect(userDoc.stripeCustomerId).toContain('cus_'); */
});



