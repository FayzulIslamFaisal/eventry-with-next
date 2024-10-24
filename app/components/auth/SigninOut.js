"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2"> {auth?.name}</span>
          <span className="mx-2">|</span>
          <a
            className="cursor-pointer bg-gray-800 px-3 py-1 text-white capitalize font-semibold"
            onClick={logout}
          >
            Logout
          </a>
        </>
      ) : (
        <Link
          className="bg-gray-800 px-3 py-1 text-white capitalize font-semibold "
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default SignInOut;
