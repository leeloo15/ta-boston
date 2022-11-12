import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="header-logo">
        <Link href="/" title="Thread affair">
          <img src="/images/logo.jpg" alt="Thread affair - Logo" />
        </Link>
      </div>

      <div className="header-search d-block d-lg-none mt-lg-5">
        <ul>
          <li>
            <Link href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="Search">
              <i className="fa-solid fa-search"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <a href="tel:+0741123456" title="Call us">
              <i className="fa-solid fa-phone"></i>
              Toll Free 1-877-666-1840
            </a>
          </li>

          <li>
            <a href="mailto:wtf@pixellab.ro" title="Email us">
              office@traidaffairs.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <Link href="/" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="qty d-none d-lg-flex">3</span>
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
