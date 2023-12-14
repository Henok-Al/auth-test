// The next step is to create an API route that can handle authentication requests from NextAuth.
//We’ll use the NextAuth() method to create an API handler and then export it as GET and POST functions for use in our application

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
