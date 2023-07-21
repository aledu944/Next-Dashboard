import prisma from "@/src/lib/prisma";
import { NewTaskForm, TaskCard } from "@/src/tasks";

export default async function TasksPage() {

    const pendingTasks = await prisma.task.findMany({ where: { complete: false } });
    const completeTasks = await prisma.task.findMany({ where: { complete: true } });


    return (
        <div>
            <h1 className="mb-5">Listado de tareas</h1>
            <NewTaskForm/>

            <h2 className="mb-3">Tareas incompletas</h2>
            {
                pendingTasks.length === 0 
                ? (
                    <p>No hay tareas incompletadas</p>
                )
                : (
                    <div className="tasks__list">
                        {
                            pendingTasks.map( task => (
                                <TaskCard key={ task.id } task={ task }/>
                            ))
                        }
                    </div>
                )
            }

            <h2 className="mt-10 mb-3">Tareas completas</h2>
            {
                completeTasks.length === 0 
                ? (
                    <p>No hay tareas completadas</p>
                )
                : (
                    <div className="tasks__list">
                        {
                            completeTasks.map( task => (
                                <TaskCard key={ task.id } task={ task }/>
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
}