import prisma from "@/src/lib/prisma";
import bcrypt from "bcryptjs";


export const signInEmailPassword = async ( email: string, password: string ) => {
    if( !email|| !password ) return null;

    const user = await prisma.user.findUnique({ where: { email } });

    // if( !user ){
    //     createUser(email, password, 'Juan')
    // }

    if( !bcrypt.compareSync( password, user!.password ?? '' )){
        return null;
    }

    return user;

}


export const createUser = async ( email: string, password: string, name: string ) => {
    //? Install BcryptJS
    const user = await prisma.user.create({ 
        data:  {
            email, 
            password: bcrypt.hashSync(password),
            name: name.trim(),
        } 
    });

    return user;
};