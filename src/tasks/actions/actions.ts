'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/src/lib/prisma";
import { Task } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const updateTask = async (id: string, complete: boolean): Promise<Task> => {

    const task = await prisma.task.findFirst({ where: { id } });

    if( !task ){
        throw 'Tarea no encontrada'
    }
    
    
    const updatedTask = await prisma.task.update({
        where: { id },
        data: { complete }
    });
    // Revalida solo el path
    revalidatePath('/tasks');
    return updatedTask;
}

export const newTask = async ( title:string, description: string ): Promise<Task> => {
    const session = await getServerSession(authOptions);
    const task = await prisma.task.create({ data: { title, description, userId: session!.user!.id } })
    revalidatePath('/tasks');
    return task;
}

export const deleteTask = async (id: string) => {
    await prisma.task.delete({where: { id }});
    revalidatePath('/tasks');

}