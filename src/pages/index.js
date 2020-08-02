import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Index Page</h1>
      <div>
        <Link href="/example">
          <a>Go to Example Page</a>
        </Link>
      </div>
      <div>
        <Link href="/details">
          <a>Go to Details Page</a>
        </Link>
      </div>
    </div>
  );
}
