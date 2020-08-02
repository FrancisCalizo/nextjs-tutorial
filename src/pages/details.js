import Link from 'next/link';

const people = [
  { vehicle: 'car', name: 'Bruno' },
  { vehicle: 'bike', name: 'Randy' },
  { vehicle: 'plane', name: 'Steve' },
];

export default function Details() {
  return (
    <div>
      {people.map((e, i) => (
        <div key={i}>
          <Link href="/[vehicle]/[person]" as={`/${e.vehicle}/${e.name}`}>
            <a>
              Navigate to {e.name}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
