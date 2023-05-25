import { signIn, signOut, useSession } from "next-auth/client";

export default function AuthPage() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    );
  }

  return (
    <div>
      <p>Signed in as {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
