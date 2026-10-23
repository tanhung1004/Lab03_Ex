
import { useState } from "react";
import SkillBadge from "./SkillBadge";

// Developer data model
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
  // Remember the image URL that failed to load
  const [failedAvatarUrl, setFailedAvatarUrl] = useState<string | null>(
    null
  );

  // Generate initials from developer's name
  const initials = developer.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  // Avatar URL will be provided later
  const avatarUrl = developer.avatarUrl?.trim() ?? "";

  // Only accept HTTPS image URLs
  const isValidAvatar = avatarUrl.startsWith("https://");

  // Show initials if the image is missing or failed
  const showAvatar =
    isValidAvatar && failedAvatarUrl !== avatarUrl;

  return (
    <article aria-label={`${developer.name}'s profile`}>
      <header>
        {/* Avatar with fallback */}
        {showAvatar ? (
          <img
            src={avatarUrl}
            alt={`${developer.name}'s avatar`}
            width={120}
            height={120}
            onError={() => setFailedAvatarUrl(avatarUrl)}
          />
        ) : (
          <span
            role="img"
            aria-label={`${developer.name}'s initials`}
          >
            {initials || "?"}
          </span>
        )}

        {/* Developer identity */}
        <hgroup>
          <h2>{developer.name}</h2>
          <p>{developer.role}</p>
        </hgroup>

        <p>@{developer.gamerTag}</p>
      </header>

      {/* Developer information */}
      <section aria-label="Developer information">
        <dl>
          <dt>Location</dt>
          <dd>{developer.location}</dd>

          <dt>Experience</dt>
          <dd>{developer.experience} years</dd>
        </dl>
      </section>

      {/* Technical skills */}
      <section aria-label="Technical skills">
        <h3>Skills</h3>

        <ul>
          {developer.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </ul>
      </section>
    </article>
  );
}
