import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const initialState = [
  {
    id: "1-1",
    clicked: false,
    value: "",
  },
  {
    id: "1-2",
    clicked: false,
    value: "",
  },
  {
    id: "1-3",
    clicked: false,
    value: "",
  },
  {
    id: "2-1",
    clicked: false,
    value: "",
  },
  {
    id: "2-2",
    clicked: false,
    value: "",
  },
  {
    id: "2-3",
    clicked: false,
    value: "",
  },
  {
    id: "3-1",
    clicked: false,
    value: "",
  },
  {
    id: "3-2",
    clicked: false,
    value: "",
  },
  {
    id: "3-3",
    clicked: false,
    value: "",
  },
];

export default function TicTacToe() {
  return (
    <Container fluid>
      <Board />
    </Container>
  );
}

function Board() {
  const [board, setBoard] = useState(initialState);
  const [xIsNext, setXIsNext] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (id: string) => {
    setBoard((prev) => {
      return prev.map((square) => {
        if (square.id === id) {
          if (square.clicked) {
            return square;
          } else {
            setXIsNext(!xIsNext);
            return {
              ...square,
              clicked: true,
              value: xIsNext ? "X" : "O",
            };
          }
        }
        return square;
      });
    });
  };

  useEffect(() => {
    // Win conditions
    const winningCombinations = [
      ["1-1", "1-2", "1-3"],
      ["2-1", "2-2", "2-3"],
      ["3-1", "3-2", "3-3"],
      ["1-1", "2-1", "3-1"],
      ["1-2", "2-2", "3-2"],
      ["1-3", "2-3", "3-3"],
      ["1-1", "2-2", "3-3"],
      ["1-3", "2-2", "3-1"],
    ];
    // Check if won
    for (let i = 0; i < winningCombinations.length; i++) {
      const a = board.findIndex((x) => winningCombinations[i][0] === x.id);
      const b = board.findIndex((x) => winningCombinations[i][1] === x.id);
      const c = board.findIndex((x) => winningCombinations[i][2] === x.id);
      if (
        board[a].clicked &&
        board[b].clicked &&
        board[c].clicked &&
        ((board[a].value === "X" &&
          board[b].value === "X" &&
          board[c].value === "X") ||
          (board[a].value === "O" &&
            board[b].value === "O" &&
            board[c].value === "O"))
      ) {
        setMessage(`${board[a].value} won!`);
      }
    }

    // Check if draw
    if (board.findIndex((x) => x.clicked === false) === -1) {
      setMessage("Draw!");
    }
  }, [board]);

  return (
    <>
      <h1 className="text-center">Tic-Tac-Toe</h1>
      {message != "" ? (
        <>
          <Container className="text-center mt-3">
            <h2 className="text-center mt-5 text-success mb-5">{message}</h2>
            <Button
              onClick={() => {
                setBoard(initialState);
                setMessage("");
              }}
              size="lg"
            >
              New Game?
            </Button>
          </Container>
        </>
      ) : (
        <>
          <p className="text-center fs-3 fw-bold border border-4 border-success">
            {xIsNext ? "X" : "O"}'s turn
          </p>
          <div className="GameBoard">
            {board.map((square) => (
              <div
                key={square.id}
                className="field border"
                style={{ cursor: square.clicked ? "auto" : "pointer" }}
                onClick={() => handleClick(square.id)}
              >
                <div className="square">
                  <h1>{square.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
