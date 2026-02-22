import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const adminUsername = process.env.ADMIN_USERNAME || "admin";
const adminPasswordHash =
  process.env.ADMIN_PASSWORD_HASH ||
  // Default hash for "admin123" — change in production via env vars
  "$2b$10$ew6X8FhYDxoaeTst5q356.i5S4mclBDTb.A/hpNhIgE17urC9T.Su";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        if (credentials.username !== adminUsername) return null;
        const isValid = await bcrypt.compare(
          credentials.password,
          adminPasswordHash
        );
        if (!isValid) return null;
        return { id: "1", name: "Admin", email: "admin@bethesda.org" };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
