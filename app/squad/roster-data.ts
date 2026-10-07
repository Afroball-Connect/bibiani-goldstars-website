export type PositionGroup = 'goalkeepers' | 'defenders' | 'midfielders' | 'forwards';

export type SamplePlayer = {
  id: string;
  number: string;
  name: string;
  position: string;
  group: PositionGroup;
  age: number;
  heightCm: number;
  preferredFoot: 'Right-footed' | 'Left-footed';
  favouriteFood: string;
};

export const positionFilters: { key: PositionGroup; label: string }[] = [
  { key: 'goalkeepers', label: 'Goalkeepers' },
  { key: 'defenders', label: 'Defenders' },
  { key: 'midfielders', label: 'Midfielders' },
  { key: 'forwards', label: 'Forwards' },
];

export const samplePlayers: SamplePlayer[] = [
  { id: 'player-01', number: '01', name: 'Kojo Mensima', position: 'Goalkeeper', group: 'goalkeepers', age: 24, heightCm: 184, preferredFoot: 'Right-footed', favouriteFood: 'Jollof rice' },
  { id: 'player-13', number: '13', name: 'Kwesi Asiedu', position: 'Goalkeeper', group: 'goalkeepers', age: 27, heightCm: 188, preferredFoot: 'Left-footed', favouriteFood: 'Waakye' },
  { id: 'player-02', number: '02', name: 'Kweku Attoh', position: 'Full-back', group: 'defenders', age: 22, heightCm: 178, preferredFoot: 'Right-footed', favouriteFood: 'Banku and tilapia' },
  { id: 'player-03', number: '03', name: 'Yaw Tetteh', position: 'Centre-back', group: 'defenders', age: 26, heightCm: 188, preferredFoot: 'Left-footed', favouriteFood: 'Fufu and light soup' },
  { id: 'player-04', number: '04', name: 'Nana Armah', position: 'Centre-back', group: 'defenders', age: 24, heightCm: 182, preferredFoot: 'Right-footed', favouriteFood: 'Red-red' },
  { id: 'player-12', number: '12', name: 'Seth Bediako', position: 'Full-back', group: 'defenders', age: 29, heightCm: 176, preferredFoot: 'Left-footed', favouriteFood: 'Kenkey and pepper' },
  { id: 'player-15', number: '15', name: 'Caleb Dapaah', position: 'Centre-back', group: 'defenders', age: 23, heightCm: 185, preferredFoot: 'Right-footed', favouriteFood: 'Tuo zaafi and ayoyo' },
  { id: 'player-22', number: '22', name: 'Prince Nkrumah', position: 'Wing-back', group: 'defenders', age: 25, heightCm: 180, preferredFoot: 'Right-footed', favouriteFood: 'Kelewele and gizzard' },
  { id: 'player-06', number: '06', name: 'Kwabena Nyarko', position: 'Holding midfielder', group: 'midfielders', age: 28, heightCm: 174, preferredFoot: 'Right-footed', favouriteFood: 'Omo tuo and groundnut soup' },
  { id: 'player-08', number: '08', name: 'Daniel Mireku', position: 'Central midfielder', group: 'midfielders', age: 23, heightCm: 179, preferredFoot: 'Left-footed', favouriteFood: 'Jollof rice' },
  { id: 'player-10', number: '10', name: 'Samuel Kusi', position: 'Attacking midfielder', group: 'midfielders', age: 24, heightCm: 177, preferredFoot: 'Right-footed', favouriteFood: 'Waakye' },
  { id: 'player-14', number: '14', name: 'Richmond Darko', position: 'Central midfielder', group: 'midfielders', age: 27, heightCm: 181, preferredFoot: 'Left-footed', favouriteFood: 'Banku and okra soup' },
  { id: 'player-18', number: '18', name: 'Emmanuel Boadu', position: 'Wide midfielder', group: 'midfielders', age: 22, heightCm: 176, preferredFoot: 'Left-footed', favouriteFood: 'Fried yam and pepper' },
  { id: 'player-24', number: '24', name: 'Kojo Frempong', position: 'Attacking midfielder', group: 'midfielders', age: 25, heightCm: 183, preferredFoot: 'Right-footed', favouriteFood: 'Rice balls and groundnut soup' },
  { id: 'player-07', number: '07', name: 'Felix Kwarteng', position: 'Forward', group: 'forwards', age: 24, heightCm: 180, preferredFoot: 'Right-footed', favouriteFood: 'Fufu and palm-nut soup' },
  { id: 'player-09', number: '09', name: 'Michael Ahenkorah', position: 'Centre-forward', group: 'forwards', age: 28, heightCm: 187, preferredFoot: 'Right-footed', favouriteFood: 'Grilled tilapia and banku' },
  { id: 'player-11', number: '11', name: 'Kofi Sarpong', position: 'Forward', group: 'forwards', age: 23, heightCm: 178, preferredFoot: 'Left-footed', favouriteFood: 'Jollof rice' },
  { id: 'player-17', number: '17', name: 'Abdul Basit', position: 'Winger', group: 'forwards', age: 26, heightCm: 175, preferredFoot: 'Right-footed', favouriteFood: 'Waakye' },
];

export type SampleStaff = { id: string; name: string; title: string; department: string };

export const sampleStaff: SampleStaff[] = [
  { id: 'staff-manager', name: 'Kwame Aboagye', title: 'Manager', department: 'First-team leadership' },
  { id: 'staff-physio', name: 'Esi Badu', title: 'Club Physio', department: 'Player care' },
  { id: 'staff-ceo', name: 'Ama Dede', title: 'Chief Executive Officer (CEO)', department: 'Club leadership' },
];
