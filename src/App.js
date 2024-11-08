import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([
    { id: 0, text: 'learn vue', done: false },
    { id: 1, text: 'learn react', done: true },
    { id: 2, text: 'learn php', done: false },
  ]);

  const addItem = () => {
    if (message.trim() !== '') {
      setItems([
        ...items,
        { id: items.length, text: message.trim(), done: false },
      ]);
      setMessage('');
    }
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const doneItems = items.filter((item) => item.done);
  const toDoItems = items.filter((item) => !item.done);

  return (
    <div className="App container is-fluid">
      <div className="columns is-centered">
        <div className="column is-half">
          {}
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem()}
                className="input is-large"
                type="text"
                placeholder="Item to add"
              />
            </div>
            <div className="control">
              <button className="button is-info is-large" onClick={addItem}>
                Add
              </button>
            </div>
          </div>

          {}
          <div className="section">
            <ItemList items={items} title="All items" toggleDone={toggleDone} />
            <ItemList items={doneItems} title="Done items" toggleDone={toggleDone} />
            <ItemList items={toDoItems} title="ToDo items" toggleDone={toggleDone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
