import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track my order">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns*">
              Free Returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & Tricks">
              Tips & Tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">
              Loyalty programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the simons">
              Sign up to the simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About us">
              About us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our story">
              Our story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & culture">
              Art & culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <p>
          <span>Thread affair</span> Milano
        </p>

        <p>Largo Augusto 3, Milano, 20122, Milano, IT</p>

        <p>
          <a href="tel:+0039 02 760 003 66" title="Call us">
            Tel: 0039 02 760 003 66
          </a>
        </p>

        <p>
          <a href="mailto:office@thread-affair.com">office@thread-affair.com</a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+0741123456" title="Support">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a href="" title="Chat">
              <i className="fa-solid fa-comments"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto:office@traidaffairs.com" title="Email">
              <i className="fa-solid fa-envelope-open-text"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
