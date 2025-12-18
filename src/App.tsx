import { useState } from "react";

function Square({
  value,
  onboxClick,
}: {
  value: string | null;
  onboxClick: () => void;
}) {
  const textColor = value === "X" ? "text-cyan-400" : "text-rose-500";

  return (
    <button
      className={`w-24 h-24 m-1 rounded-xl bg-slate-700 hover:bg-slate-600 shadow-lg transition-all duration-200 text-5xl font-extrabold ${textColor}`}
      onClick={onboxClick}
    >
      {value}
    </button>
  );
}

export default function App() {
  const [value, setValue] = useState<(string | null)[]>(Array(9).fill(null));
  const [op, setOp] = useState<string>("X");

  const calculateWinner = (squares: (string | null)[]) => {
    const valid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of valid) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(value);
  const isDraw = !winner && value.every((square) => square !== null);

  function reset() {
    setValue(Array(9).fill(null));
    setOp("X");
  }

  const HandleClick = (i: number) => {
    if (value[i] !== null || winner) {
      return;
    }
    const newValue = value.slice();
    newValue[i] = op;
    setValue(newValue);
    setOp(op === "X" ? "O" : "X");
  };

  // Common Button Style
  const PlayAgainBtn = () => (
    <button
      className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
      onClick={() => reset()}
    >
      Play New Game
    </button>
  );

  if (winner) {
    return (
      <section className="flex flex-col justify-center items-center h-screen bg-slate-900">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl flex flex-col items-center border border-slate-700">
          <div
            className={`text-6xl font-black mb-4 ${
              winner === "X" ? "text-cyan-400" : "text-rose-500"
            }`}
          >
            {winner} Wins!
          </div>
          <p className="text-slate-400">The game has ended.</p>
          <PlayAgainBtn />
        </div>
      </section>
    );
  }

  if (isDraw) {
    return (
      <section className="flex flex-col justify-center items-center h-screen bg-slate-900">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl flex flex-col items-center border border-slate-700">
          <div className="text-amber-400 text-5xl font-black mb-4">
            It's a Draw!
          </div>
          <p className="text-slate-400">No moves left.</p>
          <PlayAgainBtn />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-slate-900 text-white">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-widest text-slate-100 uppercase">
          Tic Tac Toe
        </h1>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-slate-400 text-sm">Turn:</span>
          <span
            className={`text-2xl font-bold ${
              op === "X" ? "text-cyan-400" : "text-rose-500"
            }`}
          >
            Player {op}
          </span>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-700">
        <div className="grid grid-cols-3 gap-2">
          {value.map((squareValue, index) => (
            <Square
              key={index}
              value={squareValue}
              onboxClick={() => HandleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
