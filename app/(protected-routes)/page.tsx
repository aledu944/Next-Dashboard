import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function HomePage() {

    const session = await getServerSession(authOptions);

    return (
        <div>
            <h1>Bienvenido { session?.user?.name }</h1>
        </div>
    );
}