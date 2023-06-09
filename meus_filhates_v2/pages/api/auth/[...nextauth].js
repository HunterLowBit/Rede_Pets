import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";

dotenv.config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
