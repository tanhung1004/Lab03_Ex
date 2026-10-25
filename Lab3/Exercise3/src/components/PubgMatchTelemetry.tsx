
import { useEffect, useState } from "react";
import {
  PUBG_VN_SQUADS,
  type PubgSquad,
} from "../data/pubgSquads";
import { fetchKraftonPubgTelemetry } from "../services/telemetry";

type TelemetryView =
  | { status: "IDLE" }
  | { status: "LOADING" }
  | { status: "SUCCESS"; data: PubgSquad }
  | { status: "ERROR"; error: string };

export default function PubgMatchTelemetry() {
  const [squadId, setSquadId] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const [view, setView] = useState<TelemetryView>({
    status: "IDLE",
  });

  useEffect(() => {
    if (squadId === null) return;

    const controller = new AbortController();

    fetchKraftonPubgTelemetry(squadId, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;

        setView({
          status: "SUCCESS",
          data,
        });
      })
      .catch((error: unknown) => {
        // Canceled requests are not connection failures.
        if (controller.signal.aborted) return;

        if (
          error instanceof Error &&
          error.name === "AbortError"
        ) {
          return;
        }

        setView({
          status: "ERROR",
          error:
            error instanceof Error
              ? error.message
              : "Unknown satellite telemetry error.",
        });
      });

    // Cancel obsolete requests on switch, retry, or unmount.
    return () => controller.abort();
  }, [squadId, retryCount]);

  function handleSelectSquad(id: string) {
    setView({ status: "LOADING" });

    if (id === squadId) {
      // Selecting the same squad must start a new request.
      setRetryCount((count) => count + 1);
    } else {
      setSquadId(id);
    }
  }

  function handleRetry() {
    if (squadId === null) return;

    setView({ status: "LOADING" });
    setRetryCount((count) => count + 1);
  }

  function handleClearSelection() {
    setSquadId(null);
    setView({ status: "IDLE" });
  }

  const selectedSquad = PUBG_VN_SQUADS.find(
    (squad) => squad.id === squadId
  );

  return (
    <section className="telemetry" aria-labelledby="telemetry-title">
      <header className="telemetry__header">
        <p className="telemetry__eyebrow">
          KRAFTON / PUBG VIETNAM SERIES
        </p>

        <h2 id="telemetry-title">
          LIVE MATCH TELEMETRY
        </h2>

        <p className="telemetry__description">
          Satellite-powered squad intelligence. Select a team
          to sync live match statistics.
        </p>
      </header>

      <div className="telemetry__workspace">
        <section
          className="squad-panel"
          aria-labelledby="squad-selector-title"
        >
          <h3 id="squad-selector-title">SELECT YOUR SQUAD</h3>

          <div className="squad-list">
            {PUBG_VN_SQUADS.map((squad) => (
              <button
                key={squad.id}
                type="button"
                className={`squad-button ${
                  squadId === squad.id ? "is-active" : ""
                }`}
                aria-pressed={squadId === squad.id}
                onClick={() => handleSelectSquad(squad.id)}
              >
                <span className="squad-button__code">
                  {squad.id.toUpperCase()}
                </span>

                <span className="squad-button__name">
                  {squad.name}
                </span>

                <span aria-hidden="true">›</span>
              </button>
            ))}
          </div>

          <button
            className="clear-button"
            type="button"
            onClick={handleClearSelection}
          >
            CLEAR SELECTION
          </button>

          <p className="squad-panel__note">
            Simulated telemetry • 35% satellite packet loss
          </p>
        </section>

        <section
          className="telemetry-panel"
          aria-label="Squad telemetry results"
          aria-busy={view.status === "LOADING"}
        >
          <div className="telemetry-panel__top">
            <span className="panel-label">
              SATELLITE / {selectedSquad?.id.toUpperCase() ?? "OFFLINE"}
            </span>

            <span
              className={`status-pill status-pill--${view.status.toLowerCase()}`}
            >
              <span className="status-dot" aria-hidden="true" />
              {view.status}
            </span>
          </div>

          <div className="telemetry-panel__content">
            {view.status === "IDLE" && (
              <div className="idle-state">
                <span className="state-symbol" aria-hidden="true">
                  ◎
                </span>
                <h3>AWAITING SQUAD SELECTION</h3>
                <p>
                  Select CES, TE, or GE to establish a
                  satellite telemetry connection.
                </p>
              </div>
            )}

            {view.status === "LOADING" && (
              <div
                className="blue-zone-skeleton"
                role="status"
                aria-label="Synchronizing PUBG telemetry"
              >
                <div className="skeleton-heading">
                  <span className="skeleton-pulse" aria-hidden="true" />
                  <span>SYNCING BLUE ZONE TELEMETRY...</span>
                </div>

                <div
                  className="skeleton-line skeleton-line--wide"
                  aria-hidden="true"
                />
                <div
                  className="skeleton-line skeleton-line--medium"
                  aria-hidden="true"
                />

                <div className="skeleton-grid" aria-hidden="true">
                  <div className="skeleton-tile" />
                  <div className="skeleton-tile" />
                  <div className="skeleton-tile" />
                </div>

                <span className="skeleton-caption">
                  Establishing secure satellite uplink
                </span>
              </div>
            )}

            {view.status === "SUCCESS" && (
              <article className="success-state">
                <div className="squad-info">
                  <p className="success-state__label">
                    SQUAD CONNECTION ESTABLISHED
                  </p>
                  <h3>{view.data.name}</h3>
                  <p className="squad-status">{view.data.status}</p>
                </div>

                <dl className="stats-grid">
                  <div className="stat-card">
                    <dt>MAP</dt>
                    <dd>{view.data.map}</dd>
                  </div>

                  <div className="stat-card">
                    <dt>ZONE PHASE</dt>
                    <dd>{view.data.phase}</dd>
                  </div>

                  <div className="stat-card">
                    <dt>ALIVE</dt>
                    <dd>{view.data.alive}</dd>
                  </div>

                  <div className="stat-card">
                    <dt>KILLS</dt>
                    <dd>{view.data.kills}</dd>
                  </div>

                  <div className="stat-card stat-card--highlight">
                    <dt>WWCD PROBABILITY</dt>
                    <dd>{view.data.wwcdProb}</dd>
                  </div>
                </dl>
              </article>
            )}

            {view.status === "ERROR" && (
              <div className="error-state" role="alert">
                <span className="state-symbol" aria-hidden="true">
                  ⚠
                </span>

                <h3>SATELLITE CONNECTION LOST</h3>

                <p>{view.error}</p>

                <button
                  type="button"
                  className="retry-button"
                  onClick={handleRetry}
                >
                  ⟳ RECONNECT SATELLITE
                </button>

                <p className="error-state__hint">
                  Connection may recover on the next attempt.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
