import { useRouter } from 'next/router';
import { Context } from 'vm';
import { NextPageContext } from 'next';

export default function Person({ ownersList }: OwnerVehicles) {
  // const router = useRouter();

  return <h2>{ownersList?.[0].details}</h2>;
}

Person.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const data: OwnersList[] = await res.json();

  const {
    query: { person, vehicle },
  } = ctx;

  const ownersList = data.filter((e) => {
    return e.ownerName === person && e.vehicle === vehicle;
  });

  return {
    ownersList: ownersList,
  };
};
