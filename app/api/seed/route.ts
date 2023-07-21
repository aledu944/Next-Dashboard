import prisma from '@/src/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 


    await prisma.task.deleteMany();

    const tasks = await prisma.task.createMany({
        data: [
            {
                title: 'Tarea 1',
                description: 'Descripcion de la tarea 1',
            },
            {
                title: 'Tarea 2',
                description: 'Descripcion de la tarea 2',
            },
            {
                title: 'Tarea 3',
                description: 'Descripcion de la tarea 1',
            },
            {
                title: 'Tarea 4',
                description: 'Descripcion de la tarea 4',
            },
            {
                title: 'Tarea 5',
                description: 'Descripcion de la tarea 5',
            }
        ]
    })

    return NextResponse.json({
        tasks
    })
}