import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Minus, Plus, RotateCcw } from "lucide-react";


function Counter(): React.ReactNode {
    // Declare a state variable "count" with an initial value of 0
    const [count, setCount] = useState<number>(0);

    // Event handlers with proper typing
    const handleIncrement = (): void => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = (): void => {

        setCount(prevCount => prevCount - 1);
    }

    const handleReset = (): void => {
        setCount(0);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="w-80 h-96 flex flex-col items-center justify-center space-y-10 bg-white rounded-xl shadow-lg border border-slate-100">

            <div className="text-7xl font-light text-slate-700 transition-all duration-300 ease-in-out hover:scale-110">
                {count}
            </div>

            <div className="flex space-x-6">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDecrement}
                    className="w-12 h-12 border-2 border-rose-200 text-rose-500 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 rounded-md"
                >
                    <Minus className="h-5 w-5" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleIncrement}
                    className="w-12 h-12 border-2 border-emerald-200 text-emerald-500 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 rounded-md"
                >
                    <Plus className="h-5 w-5" />
                </Button>
            </div>

                <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-300 rounded-md px-4 py-2"
                >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                </Button>
        </Card>
    </div>
  )
}

export default Counter