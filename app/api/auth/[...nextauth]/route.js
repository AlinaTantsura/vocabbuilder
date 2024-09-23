import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import bcrypt from "bcryptjs/dist/bcrypt";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (credentials === null) return null;
                const user = await User.findOne({ email: credentials.email });

                if (user) {
                    await User.create(credentials);

                    const isMatch = bcrypt.compare(credentials.password, user.password);

                    if (isMatch) return user
                    else throw new Error("Email or password is incorrect")
                }
                else {
                    throw new Error("User not found")
                }
            }
        })
    ],

});

export { handler as GET, handler as POST };