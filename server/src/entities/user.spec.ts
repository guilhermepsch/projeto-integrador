import { expect, test } from "vitest";
import { User } from "./user";
import { Hash } from "crypto";

test('create an user', () => {
  const user = new User(
    'John Doe',
    'johndoe@gmail.com', 
    '123456'
  );

  expect(user.getName).toBe('John Doe');
  expect(user.getIsSuperUser).toBe(false);
});

test('cannot have updatedAt with a date before than createdAt', () => {
  const user = new User(
    'John Doe',
    'johndoe@gmail.com',
    '123456'
  );

  const createdAt = user.getCreatedAt;
  const updatedAt = user.getUpdatedAt;

  expect(createdAt).toBeInstanceOf(Date);
  expect(updatedAt).toBeInstanceOf(Date);

  expect(updatedAt.getTime()).toBeGreaterThanOrEqual(createdAt.getTime());
});