import React from 'react';
import './App.css';

const Cell = (props) => {
  return <td className={props.display}></td>;
};

const Board = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Cell key={1} display={''} />
          <Cell key={2} display={'vertical'} />
          <Cell key={3} display={''} />
        </tr>
        <tr>
          <Cell key={4} display={'horizontal'} />
          <Cell key={5} display={'horizontal vertical'} />
          <Cell key={6} display={'horizontal'} />
        </tr>
        <tr>
          <Cell key={7} display={''} />
          <Cell key={8} display={'vertical'} />
          <Cell key={9} display={''} />
        </tr>
      </tbody>
    </table>
  );
};

const Status = (props) => {
  return (
    <>
      <div className={'status ' + props.status}>{props.status}</div>
    </>
  );
};

const Reset = () => {
  return <button className={'reset'}>Reset</button>;
};

const Game = () => {
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board />
      <Status status={'match tie'} />
      <Reset />
    </div>
  );
};

const App = () => {
  return <Game />;
};

export default App;
