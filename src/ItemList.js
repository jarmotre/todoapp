import React from 'react';

function ItemList({ items, title, toggleDone }) {
  return (
    <div className="box">
      <div className="is-flex is-align-items-center">
        <h3 className="title is-4 mr-3">{title}</h3>
      </div>

      {}
      <ul>
        {items.map((item) => (
          <li key={item.id} className="is-flex is-align-items-center mb-2">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(item.id)}
              className="mr-3"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
