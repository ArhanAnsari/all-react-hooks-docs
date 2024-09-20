import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, Trash2, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for a Task
type Task = {
    id: number;
    text: string;
    completed: boolean;
}


function ToDoApp() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState<string>("");

    // Handle adding a new task
    const handleAddTask = (): void => {
        if(taskInput.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: taskInput,
                completed: false,
            }
            setTasks([...tasks, newTask]);
            setTaskInput("");
        }
    }

    // Handle completion of a task
    const toggleTaskCompletion  = (taskId: number): void => {
        const updatedTasks = tasks.map(task => (
            task.id === taskId ? {...task, completed: !task.completed} : task
        ));

        setTasks(updatedTasks);
    }

    // Handle removing a task
    const handleRemoveTask = (taskId: number): void => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
      
      {/* Input Field and Button */}
      <div className="flex space-x-2 mb-4">
          <Input 
            type="text" 
            placeholder="Add a new task"
            value={taskInput} 
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            className="flex-grow bg-gray-50 border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out placeholder-gray-400 text-gray-700"
          />

          <Button onClick={handleAddTask} className="bg-green-500 hover:bg-green-600 text-white">
            <Plus className="w-5 h-5" />
            <span className="sr-only">Add Task</span>
          </Button>
      </div>

      {/* Task List */}
      <AnimatePresence>
        {tasks.map(task => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`flex items-center justify-between p-3 mb-2 rounded-md ${
              task.completed ? "bg-green-100" : "bg-blue-100"
            }`}
          >
              <span className={`flex-grow ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                {task.text}
              </span>

              <div className="flex space-x-2">
                <Button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`${task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"} text-white`}
                >
                  {task.completed ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  <span className="sr-only">{task.completed ? "Undo Complete" : "Complete"}</span>
                </Button>

                <Button onClick={() => handleRemoveTask(task.id)} className="bg-red-500 hover:bg-red-600 text-white">
                  <Trash2 className="w-4 h-4" />
                  <span className="sr-only">Remove Task</span>
                </Button>
              </div>
          </motion.div>
        ))}
      </AnimatePresence>


      {/* <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  )
}

export default ToDoApp