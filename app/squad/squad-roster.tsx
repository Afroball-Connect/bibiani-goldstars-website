'use client';

import { useState, type CSSProperties } from 'react';
import SquadPortrait from './squad-portrait';
import { positionFilters, samplePlayers, sampleStaff, type PositionGroup } from './roster-data';

const allFilter = { key: 'all' as const, label: 'All players' };

function PersonCard({
  id,
  name,
  role,
  number,
  age,
  heightCm,
  preferredFoot,
  favouriteFood,
  group,
  index,
  staff = false,
}: {
  id: string;
  name: string;
  role: string;
  number?: string;
  age?: number;
  heightCm?: number;
  preferredFoot?: 'Right-footed' | 'Left-footed';
  favouriteFood?: string;
  group: string;
  index: number;
  staff?: boolean;
}) {
  const cardStyle = { '--card-delay': `${Math.min(index, 18) * 42}ms` } as CSSProperties;
  return (
    <article
      className={staff ? 'squad-staff-card' : 'squad-player-card'}
      data-testid={staff ? 'squad-staff-card' : 'squad-player-card'}
      data-category={group}
      style={cardStyle}
    >
      <div className="squad-person-art">
        <SquadPortrait id={id} label={staff ? 'SAMPLE STAFF' : 'SAMPLE PLAYER'} delay={index * 42} />
        {number && <span className="squad-shirt-number" aria-label={`Illustrative shirt number ${number}`} data-shirt-number>{number}</span>}
        <span className="squad-person-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="squad-person-copy">
        <p className="squad-card-label">{staff ? 'CLUB STAFF · FICTIONAL' : 'FIRST TEAM · FICTIONAL'}</p>
        <h3 data-testid="squad-person-name">{name}</h3>
        <p className="squad-person-role">{role}</p>
      </div>
      {!staff && age !== undefined && heightCm !== undefined && preferredFoot && favouriteFood && (
        <dl className="squad-profile-facts" data-testid="squad-player-facts" aria-label={`Fictional profile details for ${name}`}>
          <div><dt>Age</dt><dd>{age} years</dd></div>
          <div><dt>Height</dt><dd>{heightCm} cm</dd></div>
          <div><dt>Preferred foot</dt><dd>{preferredFoot}</dd></div>
          <div className="squad-favourite-food"><dt>Favourite food</dt><dd>{favouriteFood}</dd></div>
        </dl>
      )}
    </article>
  );
}

export default function SquadRoster() {
  const [activeFilter, setActiveFilter] = useState<'all' | PositionGroup>('all');
  const filters = [allFilter, ...positionFilters];
  const visiblePlayers = activeFilter === 'all'
    ? samplePlayers
    : samplePlayers.filter((player) => player.group === activeFilter);

  return (
    <>
      <section className="squad-sample-banner" aria-labelledby="squad-sample-title" data-testid="sample-roster-disclosure">
        <span className="squad-sample-icon" aria-hidden="true">!</span>
        <div className="squad-sample-text">
          <p className="eyebrow">DEMO DATA · NOT AN OFFICIAL CLUB ROSTER</p>
          <h2 id="squad-sample-title">Every name and role here is fictional.</h2>
          <p>Names, shirt numbers, positions, ages, heights, preferred feet, favourite foods and staff appointments are invented solely to demonstrate this page. They do not identify or represent current Gold Stars players or employees. Portraits are anonymous silhouettes, not photographs.</p>
        </div>
        <span className="squad-sample-stamp">ILLUSTRATIVE<br />ONLY</span>
      </section>

      <section className="squad-player-section section" aria-labelledby="sample-squad-heading">
        <div className="squad-section-overline">
          <p className="eyebrow">01 / FIRST-TEAM EXAMPLE</p>
          <span>{samplePlayers.length} FICTIONAL PROFILES</span>
        </div>
        <div className="squad-roster-heading">
          <div>
            <h2 id="sample-squad-heading">A SAMPLE <em>SQUAD.</em></h2>
            <p>A fictional line-up to show how a Gold Stars player directory could work.</p>
          </div>
          <div className="squad-filter-list" role="group" aria-label="Filter sample players by position">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                data-filter={filter.key}
                aria-pressed={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
                <span>{filter.key === 'all' ? samplePlayers.length : samplePlayers.filter((player) => player.group === filter.key).length}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="squad-results-count" aria-live="polite">Showing {visiblePlayers.length} fictional {visiblePlayers.length === 1 ? 'player' : 'players'}.</p>
        <div className="squad-player-grid">
          {visiblePlayers.map((player, index) => (
            <PersonCard
              key={player.id}
              id={player.id}
              name={player.name}
              role={player.position}
              number={player.number}
              age={player.age}
              heightCm={player.heightCm}
              preferredFoot={player.preferredFoot}
              favouriteFood={player.favouriteFood}
              group={player.group}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="squad-staff-section" aria-labelledby="sample-staff-heading">
        <div className="squad-staff-inner">
          <div className="squad-section-overline squad-section-overline-light">
            <p className="eyebrow">02 / CLUB STAFF · DEMO ONLY</p>
            <span>THREE FICTIONAL ROLES</span>
          </div>
          <div className="squad-staff-heading">
            <h2 id="sample-staff-heading">THE PEOPLE<br />BEHIND THE <em>TEAM.</em></h2>
            <p>Example backroom and executive roles. These names and appointments are fictional and are not statements about Gold Stars’ current staff.</p>
          </div>
          <div className="squad-staff-grid">
            {sampleStaff.map((member, index) => (
              <PersonCard
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.title}
                group={member.department}
                index={samplePlayers.length + index}
                staff
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
