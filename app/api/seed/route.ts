import prisma from '@/src/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) { 


    await prisma.task.deleteMany();
    await prisma.user.deleteMany();


    const user = await prisma.user.create({
        data: {
            email: 'admin@innovacode.online',
            password: bcrypt.hashSync('123456'),
            name: 'Innova Code',
            image: 'https://lh3.googleusercontent.com/a/AAcHTtfNj1wKEavkDynCql_1qI9opNtoUTDJr1uOfHYtbCCCmw=s96-c',
            tasks: {
                create: {
                    title: 'Servidor Discord',
                    description: 'Crear servidos y canales de Discord'
                }
            }
        }
    })
    return NextResponse.json({
        user
    })
}