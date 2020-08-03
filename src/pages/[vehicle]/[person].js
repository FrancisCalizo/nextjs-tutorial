import { useRouter } from 'next/router';

export default function Person({ ownersList }) {
  // const router = useRouter();

  return <h2>{ownersList[0].details}</h2>;
}

Person.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const data = await res.json();

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
