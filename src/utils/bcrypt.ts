import { compare, hash } from 'bcrypt';

/**
 * hash password using bcrypt
 * @param password {string} input password
 * @returns hashed password as string
 */
export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 10);
}

/**
 * compare passwords to check if they are the same
 * @param password {string} input password
 * @param hash {string} hashed password
 * @returns boolean as True or False
 */
export async function comparePassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return await compare(password, hash);
}
