import React from 'react';
import './App.css';

const Cell = () => {
  return <td></td>;
};

const Board = () => {
  return (
    <table>
      <tr>
        <Cell />
        <Cell />
        <Cell />
      </tr>
      <tr>
        <Cell />
        <Cell />
        <Cell />
      </tr>
      <tr>
        <Cell />
        <Cell />
        <Cell />
      </tr>
    </table>
  );
};

const App = () => {
  return (
    <>
      <h1>Tic Tak Toe</h1>
      {/* <table>
        <tr>
          <td></td>
          <td class="vertical"></td>
          <td></td>
        </tr>
        <tr>
          <td class="horizontal"></td>
          <td class="vertical horizontal"></td>
          <td class="horizontal"></td>
        </tr>
        <tr>
          <td></td>
          <td class="vertical"></td>
          <td></td>
        </tr>
      </table> */}
      <Board />
    </>
  );
};

export default App;
