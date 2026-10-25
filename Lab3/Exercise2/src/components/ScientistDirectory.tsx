
import { useId, useState } from "react";
import {
  SMART_PEOPLE,
  type Scientist,
} from "../data/smartPeople";

type SortBy = "iq-desc" | "age-asc";

export default function ScientistDirectory() {
  // Raw data: single source of truth
  const [people] = useState<Scientist[]>(
    () => SMART_PEOPLE.map((person) => ({ ...person }))
  );

  // Independent input states
  const [query, setQuery] = useState("");
  const [minIq, setMinIq] = useState(0);
  const [sortBy, setSortBy] = useState<SortBy>("iq-desc");

  // Accessible and stable input IDs
  const searchId = useId();
  const iqId = useId();
  const sortId = useId();

  // Derived state: calculated during rendering
  const visiblePeople = people
    .filter((person) => {
      const matchesName = person.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      const matchesIq = person.iq >= minIq;

      return matchesName && matchesIq;
    })
    .toSorted((a, b) => {
      if (sortBy === "iq-desc") {
        return b.iq - a.iq;
      }

      return a.age - b.age;
    });

  return (
    <section aria-labelledby="directory-title">
      <h2 id="directory-title">
        Scientist & Pioneer Directory
      </h2>

      <p>
        Explore scientists by name, IQ and age.
      </p>

      {/* Search and filter controls */}
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={searchId}>
          Search by Name
        </label>

        <input
          id={searchId}
          type="search"
          placeholder="Enter a scientist's name"
          value={query}
          onChange={(event) =>
            setQuery(event.currentTarget.value)
          }
        />

        <label htmlFor={iqId}>
          Minimum IQ
        </label>

        <input
          id={iqId}
          type="number"
          min="0"
          value={minIq}
          onChange={(event) => {
            const value = event.currentTarget.valueAsNumber;

            setMinIq(
              Number.isNaN(value) ? 0 : Math.max(0, value)
            );
          }}
        />

        <label htmlFor={sortId}>
          Sort By
        </label>

        <select
          id={sortId}
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.currentTarget.value as SortBy)
          }
        >
          <option value="iq-desc">
            IQ: High to Low
          </option>

          <option value="age-asc">
            Age: Young to Old
          </option>
        </select>
      </form>

      {/* Derived results */}
      <ul>
        {visiblePeople.map((person) => (
          <li key={person.id}>
            <strong>{person.name}</strong>
            {" — "}
            Age: {person.age}
            {" | "}
            IQ: {person.iq}
          </li>
        ))}
      </ul>

      {visiblePeople.length === 0 && (
        <p>No matching scientists found.</p>
      )}
    </section>
  );
}
