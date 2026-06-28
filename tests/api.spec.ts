import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

test('GET /products/1 returns expected product data', async ({ request }) => {
  const endpoint = 'https://fakestoreapi.com/products/1';
  const response = await request.get(endpoint);
  const body = await response.json();

  expect(response.status()).toBe(200);

  const requiredKeys = ['id', 'title', 'price', 'category', 'description'];
  for (const key of requiredKeys) {
    expect(body, `Response should contain the '${key}' field`).toHaveProperty(key);
  }

  const schema = {
    type: 'object',
    required: requiredKeys,
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' },
    },
    additionalProperties: true,
  };

  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(body);

  expect(isValid, JSON.stringify(validate.errors, null, 2)).toBeTruthy();

  console.log(`Product title: ${body.title}`);
  console.log(`Product price: ${body.price}`);
});
