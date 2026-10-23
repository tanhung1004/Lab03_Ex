
import { useState } from "react";
import SkillBadge from "./SkillBadge";
import styles from "./DeveloperCard.module.css";

type Developer = {
  name: string;
  gamerTag: string;
  role: string;
  location: string;
  experience: number;
  skills: string[];
  avatarUrl?: string;
};

type DeveloperCardProps = {
  developer: Developer;
};

export default function DeveloperCard({
  developer,
}: DeveloperCardProps) {
  const [failedAvatarUrl, setFailedAvatarUrl] =
    useState<string | null>(null);

  const initials = developer.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  const avatarUrl = developer.avatarUrl?.trim() ?? "";

  const isValidAvatar = avatarUrl.startsWith("https://");

  const showAvatar =
    isValidAvatar && failedAvatarUrl !== avatarUrl;

  return (
    <article
      className={styles.card}
      aria-label={`${developer.name}'s profile`}
    >
      <header className={styles.header}>
        <span className={styles.coverLabel}>
          ✦ Developer / Gamer
        </span>

        {showAvatar ? (
          <img
            className={styles.avatar}
            src={avatarUrl}
            alt={`${developer.name}'s avatar`}
            width={104}
            height={104}
            onError={() => setFailedAvatarUrl(avatarUrl)}
          />
        ) : (
          <span
            className={styles.avatarFallback}
            role="img"
            aria-label={`${developer.name}'s initials`}
          >
            {initials || "?"}
          </span>
        )}

        <hgroup className={styles.identity}>
          <h2 className={styles.name}>{developer.name}</h2>
          <p className={styles.role}>{developer.role}</p>
        </hgroup>

        <p className={styles.gamerTag}>
          @{developer.gamerTag}
        </p>
      </header>

      <section
        className={styles.infoSection}
        aria-label="Developer information"
      >
        <dl className={styles.infoList}>
          <dt>Location</dt>
          <dd>{developer.location}</dd>

          <dt>Experience</dt>
          <dd>{developer.experience} years</dd>
        </dl>
      </section>

      <section
        className={styles.skillsSection}
        aria-label="Technical skills"
      >
        <h3 className={styles.skillsTitle}>
          Technical Skills
        </h3>

        <ul className={styles.skillsList}>
          {developer.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </ul>
      </section>
    </article>
  );
}
