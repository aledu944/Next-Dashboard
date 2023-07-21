'use client'

import { useState } from 'react';
import { newTask } from '../actions/actions';

export const NewTaskForm = () => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form action={ () => newTask( title, description ) } className='task__form'>
            
            <div className='mb-3 flex flex-col min-w-md'>
                <label id='title' className='text-slate-500'>Titulo</label>
                <input 
                    className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500' 
                    name='title' 
                    type="text" 
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='mb-3 flex flex-col min-w-md'>
                <label id='description' className='text-slate-500'>Descripcion</label>
                <input 
                    className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500' 
                    name='description' 
                    type="text" 
                    value={ description }
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            
            <button type='submit' className='btn-primary'>Agregar tarea</button>
        </form>
    )
}
