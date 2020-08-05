import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 36px;
  color: red;
`;

export default function Index() {
  return (
    <div>
      <Title>Index Page</Title>
      <div>
        <Link href="/example">
          <a>Go to Example Page</a>
        </Link>
      </div>
      {/* <div>
        <Link href="/details">
          <a>Go to Details Page</a>
        </Link>
      </div> */}
      <div>
        <Link href="/list">
          <a>Go to List Page</a>
        </Link>
      </div>
    </div>
  );
}
