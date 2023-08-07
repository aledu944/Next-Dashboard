import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LoginForm } from "@/src/auth";
import { getServerSession } from "next-auth";

export default async function SignInPage() {     
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full">
                <h1 className="text-center">Inicia sesion</h1>
                <LoginForm/>
            </div>
        </main>
    );
}