
import { PUBG_VN_SQUADS } from "../data/pubgSquads";

export default function PubgMatchTelemetry() {
  return (
    <section aria-labelledby="telemetry-title">
      <h2 id="telemetry-title">
        PUBG Vietnam Series — Squad Telemetry
      </h2>

      <p>Available squads: {PUBG_VN_SQUADS.length}</p>

      <ul>
        {PUBG_VN_SQUADS.map((squad) => (
          <li key={squad.id}>
            <article>
              <h3>{squad.name}</h3>

              <dl>
                <dt>Map</dt>
                <dd>{squad.map}</dd>

                <dt>Phase</dt>
                <dd>{squad.phase}</dd>

                <dt>Alive</dt>
                <dd>{squad.alive}</dd>

                <dt>Kills</dt>
                <dd>{squad.kills}</dd>

                <dt>WWCD Probability</dt>
                <dd>{squad.wwcdProb}</dd>

                <dt>Status</dt>
                <dd>{squad.status}</dd>
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
