
import SkillBadge from "./SkillBadge";

type Developer = {
  name: string;
  gamerTag: string;
  role: string;
  location: string;
  experience: number;
  skills: string[];
};

type DeveloperCardProps = {
  developer: Developer;
};

export default function DeveloperCard({
  developer,
}: DeveloperCardProps) {
  return (
    <article aria-label={`${developer.name}'s profile`}>
      <header>
        <hgroup>
          <h2>{developer.name}</h2>
          <p>{developer.role}</p>
        </hgroup>
        <p>@{developer.gamerTag}</p>
      </header>

      <section aria-label="Developer information">
        <dl>
          <dt>Location</dt>
          <dd>{developer.location}</dd>

          <dt>Experience</dt>
          <dd>{developer.experience} years</dd>
        </dl>
      </section>

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
