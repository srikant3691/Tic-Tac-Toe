
import {useState} from "react";



function Square({ value, onboxClick }: { value: string | null; onboxClick: () => void }) {
  // const [value, setValue] = useState<string | null>(null);
  
  return (
    <>
      <button className="border square w-15 h-15 m-2 bg-white hover:bg-gray-100" onClick={onboxClick}>{value}</button>
    </>
  )
}

export default function App() {
  const [value, setValue] = useState<(string | null)[]>(Array(9).fill(null));
  const [op, setOp] = useState<string>("X");

  function HandleClick(i: number) {
    if (value[i] !== null) {
      return;
    }
    const newValue = value.slice();
    newValue[i] = op;               
    setValue(newValue);             // Update board state

    // 4. Flip the turn
    if (op === "X") {
      setOp("O");
    } else {
      setOp("X");
    }
  }
  return (
    <section className=" flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-green-200 h-100 w-100 m-10 p-10 rounded-md shadow-md">
          <div className="flex items-center justify-center w-57 h-15 m-2">
            <Square value= {value[0]} onboxClick={() => HandleClick(0)} />
            <Square value={value[1]} onboxClick={() => HandleClick(1)} />
            <Square value={value[2]} onboxClick={() => HandleClick(2)} />
          </div>
          <div className="flex items-center justify-center w-57 h-15 m-2">
            <Square value= {value[3]} onboxClick={() => HandleClick(3)} />
            <Square value={value[4]} onboxClick={() => HandleClick(4)} />
            <Square value={value[5]} onboxClick={() => HandleClick(5)} />
          </div>
          <div className="flex items-center justify-center w-57 h-15 m-2">
            <Square value= {value[6]} onboxClick={() => HandleClick(6)} />
            <Square value={value[7]} onboxClick={() => HandleClick(7)} />
            <Square value={value[8]} onboxClick={() => HandleClick(8)} />
          </div>
      </div>
    </section>
  );
}
