import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h3>{people.length} birthdays today</h3>

      <>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button onClick={() => removeItem(id)}>Remove</button>
              </div>
            </article>
          );
        })}
      </>

      <button onClick={() => setPeople([])}>Clear All</button>
    </>
  );
};

export default List;
