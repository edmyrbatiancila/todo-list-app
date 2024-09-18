import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskDelete, setTaskDelete] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data.slice(0, 10)));
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map)
    }
}