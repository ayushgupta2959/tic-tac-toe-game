import React, { useState } from 'react';
import './App.css';

const Cell = (props) => {
  return (
    <td className={props.cellStyle} onClick={() => props.onClick(props.index)}>
      {props.content}
    </td>
  );
};

const Board = () => {
  const [cellsValue, setCellsValue] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState(true);
  const [status, setStatus] = useState('Player - A turn');
  const [gameOver, setGameOver] = useState(false);

  const checkWinStatus = (curCellsValues) => {
    if (
      curCellsValues[0] != '' &&
      curCellsValues[0] === curCellsValues[1] &&
      curCellsValues[1] === curCellsValues[2]
    )
      return 1;
    if (
      curCellsValues[3] !== '' &&
      curCellsValues[3] === curCellsValues[4] &&
      curCellsValues[4] === curCellsValues[5]
    )
      return 1;
    if (
      curCellsValues[6] !== '' &&
      curCellsValues[6] === curCellsValues[7] &&
      curCellsValues[7] === curCellsValues[8]
    )
      return 1;
    if (
      curCellsValues[0] !== '' &&
      curCellsValues[0] === curCellsValues[3] &&
      curCellsValues[3] === curCellsValues[6]
    )
      return 1;
    if (
      curCellsValues[1] !== '' &&
      curCellsValues[1] === curCellsValues[4] &&
      curCellsValues[4] === curCellsValues[7]
    )
      return 1;
    if (
      curCellsValues[2] !== '' &&
      curCellsValues[2] === curCellsValues[5] &&
      curCellsValues[5] === curCellsValues[8]
    )
      return 1;
    if (
      curCellsValues[0] !== '' &&
      curCellsValues[0] === curCellsValues[4] &&
      curCellsValues[4] === curCellsValues[8]
    )
      return 1;
    if (
      curCellsValues[6] !== '' &&
      curCellsValues[6] === curCellsValues[4] &&
      curCellsValues[4] === curCellsValues[2]
    )
      return 1;
    if (!curCellsValues.includes('')) return 0;
    else return -1;
  };

  const reflectChange = (index) => {
    if (cellsValue[index] !== '' || gameOver) return;
    const newCellsValue = [...cellsValue];
    turn ? (newCellsValue[index] = 'X') : (newCellsValue[index] = 'O');
    setCellsValue(newCellsValue);
    const winStatus = checkWinStatus(newCellsValue);
    if (winStatus === 1) {
      turn ? setStatus('Player - A wins') : setStatus('Player - B wins');
      setGameOver(true);
      return;
    }
    if (winStatus === 0) {
      setStatus('match tie');
      setGameOver(true);
      return;
    }
    turn ? setStatus('Player - B turn') : setStatus('Player - A turn');
    setTurn(!turn);
  };
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Cell index={0} onClick={reflectChange} cellStyle={''} content={cellsValue[0]} />
            <Cell
              index={1}
              onClick={reflectChange}
              cellStyle={'vertical'}
              content={cellsValue[1]}
            />
            <Cell index={2} onClick={reflectChange} cellStyle={''} content={cellsValue[2]} />
          </tr>
          <tr>
            <Cell
              index={3}
              onClick={reflectChange}
              cellStyle={'horizontal'}
              content={cellsValue[3]}
            />
            <Cell
              index={4}
              onClick={reflectChange}
              cellStyle={'horizontal vertical'}
              content={cellsValue[4]}
            />
            <Cell
              index={5}
              onClick={reflectChange}
              cellStyle={'horizontal'}
              content={cellsValue[5]}
            />
          </tr>
          <tr>
            <Cell index={6} onClick={reflectChange} cellStyle={''} content={cellsValue[6]} />
            <Cell
              index={7}
              onClick={reflectChange}
              cellStyle={'vertical'}
              content={cellsValue[7]}
            />
            <Cell index={8} onClick={reflectChange} cellStyle={''} content={cellsValue[8]} />
          </tr>
        </tbody>
      </table>
      <Status status={status} />
    </>
  );
};

const Status = (props) => {
  return (
    <>
      <div className={'status ' + props.status}>{props.status}</div>
    </>
  );
};

const Reset = (props) => {
  return <button className={'reset'}
    onClick={props.onClick}
  >Reset</button>;
};

const Game = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board key={gameId} />
      <Reset onClick={()=>setGameId(1-gameId)}/>
    </div>
  );
};

const App = () => {
  return <Game />;
};

export default App;
