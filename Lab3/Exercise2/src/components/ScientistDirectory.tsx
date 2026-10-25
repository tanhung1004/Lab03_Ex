
import { useState } from "react";
import {
  SMART_PEOPLE,
  type Scientist,
} from "../data/smartPeople";

export default function ScientistDirectory() {
  const [people] = useState<Scientist[]>(
    () => SMART_PEOPLE.map((person) => ({ ...person }))
  );

  return (
    <section aria-labelledby="directory-title">
      <h2 id="directory-title">
        Scientist & Pioneer Directory
      </h2>

      <p>
        Original dataset with stable IDs.
      </p>

      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <strong>{person.name}</strong>
            {" — "}
            Age: {person.age}
            {" | "}
            IQ: {person.iq}
          </li>
        ))}
      </ul>
    </section>
  );
}
