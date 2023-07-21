import prisma from '@/src/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments{
    params: { id: string }
}

export async function GET(request: Request, segments: Segments) { 
    const { id } = segments.params

    const task = await prisma.task.findFirst({
        where: {
            id
        }
    }); 

    if( !task ){
        return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }  

    return NextResponse.json( task );
}


// VALIDATION
const taskValidationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
});

export async function PUT(request: Request, segments: Segments) { 

    const { id } = segments.params

    const task = await prisma.task.findFirst({ where: { id } });

    if( !task ){
        return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }
    

    try {
        const body = await request.json();
        await taskValidationSchema.validate( body );
    
        await prisma.task.update({
            where: { id },
            data: { ...body }
        });
    
        return NextResponse.json({ message: 'Tarea actualizada' });
    } catch (error) {
        return NextResponse.json( error, { status: 400 })
    }

}