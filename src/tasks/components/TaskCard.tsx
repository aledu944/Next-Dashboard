'use client'

import { type Task } from "@prisma/client";
import { deleteTask, updateTask } from "../actions/actions";

interface Props{
    task: Task;
}
export const TaskCard = ({ task }: Props) => {
    return (
        <div className="task__card">
            <h3>{ task.title }</h3>
            <p>{ task.description }</p>
            <p>{ JSON.stringify( task.createdAt ) }</p>
            <div className="flex items-center gap-3">
                <button className="btn-primary" onClick={() => updateTask( task.id, !task.complete )}>
                    { task.complete ? 'No completo' :'Completar' }
                </button>
                <button className="btn-primary hover:bg-red-500" onClick={() => deleteTask( task.id )}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
