import { sum } from './sum'

test('adds 1 + 2 to equals 3', () => {
  // toBe is called the matcher
  // toBe uses Object.is to check equality
  /** Object.is() 
   * determines whether two values are the same value. Two values are the same if one of the following holds:
   * both undefined
   * both null
   * both true or both false
   * both strings of the same length with the same characters in the same order
   * both the same object (means both object have same reference)*/ 
  expect(sum(1,2)).toBe(3)
})

test ('A test that uses toEqual on an object with name', () => {
  //toEqual recursively checks every field of an object or array.
  expect({name: 'Robert'}).toEqual({name: 'Robert'})
})

/**
 * Use matchers that most defines what I want to do!
 */
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

/** 
 * Testing numbers 
 */

 test('testing numbers with appropriate matchers', () => {
   const value = 2 + 2 
   expect(value).toBeGreaterThan(3)
   expect(value).toBeGreaterThanOrEqual(3.5)
   expect(value).toBeLessThan(5)
   expect(value).toBeLessThanOrEqual(4.5)

   //toBe and toEqual are the same for numbers 
   expect(value).toBe(4)
   expect(value).toEqual(4)
 })

 /** 
  * Testing strings
  */
 test('There is no I in team', () => {
   expect('team').not.toMatch(/I/)
 })

test('But there is a "stop" in Christopher', () => {
  expect('Christopher').toMatch(/stop/)
})
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
]
// You can make sure arrays or iterables have particular values
test('the shopping list has beer in it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer') 
})

// There a different ways to test async data here is a copy from the documentation,
// I prefer this way because I prefer the async/await method

/**
 * test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
 */

 /**
  * Repeating setup for many test we use the beforeEach and afterEach method for teardown
  * I feel personally that test should be done in grouping so I don't see myself 
  * doing using these often.
  * One time setup:
  *   We use beforeAll and afterAll methods
  *   the following code show the flow of execution
  */
 /**
 * there are also describe blocks,
 * this is like a grouping of tests. You can 
 * do beforeAll, afterAll etc inside describe blocks 
 */
 beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

/**
 * A piece of advice from the developers 
 * if a test is failing you can run on that test to see if any other 
 * test externally is making it fail
 * Example:
 * 
 */

test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});