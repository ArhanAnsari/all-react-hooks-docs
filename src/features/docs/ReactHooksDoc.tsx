import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}


const hooksData = [
  {
    name: "useState",
    description: "Allows functional components to manage state",
    basicExample: `
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
    `,
    BasicPreview: () => {
      const [count, setCount] = useState(0);
      return (
        <div className="text-center">
          <p className="mb-4 text-[#354f52]">Count: {count}</p>
          <Button 
            onClick={() => setCount(count + 1)}
            className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]"
            >Increment</Button>
        </div>
      );
    },
    basicAppPath: "/app/usestate/counter-app",
    realLifeExample: `
      const [todos, setTodos] = useState([]);
      const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }]);
      };
      return (
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTodo(e.target.value);
                e.target.value = '';
              }
            }}
          />

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </div>
      )
    `,
    RealLifePreview: () => {
      const [todos, setTodos] = useState<Todo[]>([]);
      const addTodo = (text: string) => {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
    return (
      <div className="text-[#354f52]">
      <input
        type="text"
        placeholder="New todo"
        className="border border-[#52796f] rounded px-2 py-1 mb-2 w-full"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
    )
    },
    realLifeAppPath: "/app/usestate/todo-app",
  },
  {
    name: "useEffect",
    description: "Handles side effects, such as fetching data or setting timers",
    basicExample: `
      const [count, setCount] = useState(0);
      useEffect(() => {
        document.title = 'Count: ${count}';
      }, [count]);
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    `,
    BasicPreview: () => {
      const [count, setCount] = useState(0);
      useEffect(() => {
        document.title = `Count: ${count}`;
      }, [count]);
      return (
        <div className="text-center">
          <p className="mb-4 text-[#354f52]">Count: {count}</p>
          <Button onClick={() => setCount(count + 1)} className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]">Increment</Button>
        </div>
      );
    },
    basicAppPath: "/app/useeffect/basic-app",
    realLifeExample: `
      const [data, setData] = useState(null);
      useEffect(() => {
        fetch('https://example.org/products.json')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
      return (
        <div>
          <h1>Data: {data ? JSON.stringify(data) : 'Loading...'}</h1>
        </div>
      );
    `,
    RealLifePreview: () => {
      const [data, setData] = useState(null);
      useEffect(() => {
        fetch('(link unavailable)')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
      return (
        <div className="text-[#354f52]">
          <h1>Data: {data ? JSON.stringify(data) : 'Loading...'}</h1>
        </div>
      );
    },
    realLifeAppPath: "/app/useeffect/fetch-data-app",
  },
]


const ReactHooksDoc = () => {
  return (
    <div className="min-h-screen bg-[#cad2c5] p-8">
      <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2f3e46] mb-4">React Hooks Documentation</h1>
            <p className="text-xl text-[#354f52]">Explore important React hooks with basic examples, real-life implementations, and interactive previews</p>
          </header>

          <div className="grid gap-8">
            {hooksData.map((hook) => (
              <Card key={hook.name} className="overflow-hidden border-[#52796f]">

                <CardHeader className="bg-[#84a98c] bg-opacity-20">
                  <CardTitle className="text-2xl font-bold text-[#2f3e46]">{hook.name}</CardTitle>
                  <CardDescription className="text-[#354f52]">{hook.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-0 bg-[#cad2c5]">
                  <Tabs defaultValue="basic" className="w-full">

                    <TabsList className="w-full bg-[#84a98c]">
                      <TabsTrigger value="basic" className="w-1/2 text-[#cad2c5] data-[state=active]:bg-[#52796f] font-semibold">Basic Example</TabsTrigger>
                      <TabsTrigger value="reallife" className="w-1/2 text-[#cad2c5] data-[state=active]:bg-[#52796f] font-semibold">Real-life Implementation</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic" className="p-4">
                      <pre className="bg-[#2f3e46] text-[#cad2c5] p-4 rounded-md overflow-x-auto mb-4"> 
                        <code>{hook.basicExample}</code>
                      </pre>

                      <div className="flex justify-start gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]">
                            Preview Basic Example
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="bg-[#cad2c5] border-[#52796f]">
                          <DialogHeader>
                          <DialogTitle className="text-[#2f3e46]">{hook.name} - Basic Example Preview</DialogTitle>
                          </DialogHeader>

                          <div className="p-4">
                            <hook.BasicPreview />
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Link to={hook.basicAppPath}>
                        <Button className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]">Interact with the App</Button>
                      </Link>

                      </div>
                    </TabsContent>

                    <TabsContent value="reallife" className="p-4">
                      <pre className="bg-[#2f3e46] text-[#cad2c5] p-4 rounded-md overflow-x-auto mb-4"> 
                        <code>{hook.realLifeExample}</code>
                      </pre>

                      <div className="flex justify-start gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]">
                            Preview Real-life Example
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="bg-[#cad2c5] border-[#52796f]">
                          <DialogHeader>
                          <DialogTitle className="text-[#2f3e46]">{hook.name} - Real-life Example Preview</DialogTitle>
                          </DialogHeader>

                          <div className="p-4">
                            <hook.RealLifePreview />
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Link to={hook.realLifeAppPath}>
                        <Button className="bg-[#52796f] hover:bg-[#84a98c] text-[#cad2c5]">Interact with the App</Button>
                      </Link>

                      </div>
                    </TabsContent>

                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
    </div>
  )
}

export default ReactHooksDoc
