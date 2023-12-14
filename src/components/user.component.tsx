"use client";

import { useSession } from "next-auth/react";

//Now, we’ll create a new component that will allow us to use the useSession hook to retrieve the session data and display it on the client-side
export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};
