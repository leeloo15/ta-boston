import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Suits">
              Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Shirts">
              Shirts
            </Link>
          </li>

          <li>
            <Link href="/" title="Accessories">
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-secondary">
        <ul>
          <li>
            <Link href="/" title="Glamour suits">
              Glamour suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Wedding suits">
              Wedding suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Office suits">
              Office suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Customize your suits">
              Customize your suits
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
