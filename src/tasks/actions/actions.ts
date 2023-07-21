'use server'

import prisma from "@/src/lib/prisma";
import { Task } from "@prisma/client";
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
    const task = await prisma.task.create({ data: { title, description } })
    revalidatePath('/tasks');
    return task;
}

export const deleteTask = async (id: string) => {
    await prisma.task.delete({where: { id }});
    revalidatePath('/tasks');

}