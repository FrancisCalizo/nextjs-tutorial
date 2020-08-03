import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

const List: NextPage<OwnerVehicles> = ({ ownersList }) => {
  // Using this operates on Client Side, Not SSR
  // const [owners, setOwners] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:3000/api/vehicles');
  //     const data = await res.json();
  //     setOwners(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {ownersList?.map((e, i) => (
        <div key={i}>
          <Link href="/[vehicle]/[person]" as={`/${e.vehicle}/${e.ownerName}`}>
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

List.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const data: OwnersList[] | undefined = await res.json();

  return {
    ownersList: data,
  };
};

export default List;
