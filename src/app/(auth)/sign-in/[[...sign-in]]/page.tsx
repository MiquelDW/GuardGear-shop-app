import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold text-[#2E2A47] dark:text-white">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Glad seeing you! Please login with your account🙂
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center">
          {/* only show sign-up form when Clerk object has fully loaded */}
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          {/* show this loading state while Clerk object is loading */}
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="hidden h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 lg:flex">
        <Image src="/blue-shield-1.png" alt="Logo" height={120} width={120} />
      </div>
    </div>
  );
}
