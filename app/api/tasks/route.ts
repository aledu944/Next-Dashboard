import prisma from '@/src/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const offset = searchParams.get('offset') ?? '10'
    const skip = searchParams.get('skip') ?? '0'

    if( isNaN(+offset || +skip) ){
        return NextResponse.json({ message: 'Error params' }, { status: 400 })
    }

    const tasks = await prisma.task.findMany({
        take: +offset,
        skip: +skip
    }); 
    
    return NextResponse.json( tasks )
}

// VALIDATION
const taskValidationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
});

export async function POST( request: Request ) {
    try {
        const body =   await request.json();
        await taskValidationSchema.validate( body );
        
        const task = await prisma.task.create({ data: body })
        return NextResponse.json( task )
        
    
    
    } catch (error) {
        return NextResponse.json( error, { status: 400 })
    }

}

