import jwt from "jsonwebtoken";

const SECRET = process.env.ADMIN_SECRET!;

export function signAdminToken() {
  return jwt.sign({ role: "admin" }, SECRET, { expiresIn: "2h" });
}

export function verifyAdminToken(token: string) {
  return jwt.verify(token, SECRET);
}
