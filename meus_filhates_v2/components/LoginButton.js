import { signIn } from "next-auth/client";

const LoginButton = () => {
  const handleLogin = () => {
    signIn("google");
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
};

export default LoginButton;
