import Link from "next/link";

export default function Menu() {
  // const [props, set, stop] = useSpring(() => ({opacity: 1}))
  // set({opacity: 1});
  // stop();

  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/work">
          <a>My work</a>
        </Link>
      </li>

      <style jsx>{`
        ul {
          margin: 5px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          transition: 1s ease-in-ease-out;
        }
        ul li a {
          font-size: 22px;
          color: #111;
          font-weight: 300;
          padding: 5px 2px;
          margin: 0 10px;
          text-decoration: none;
        }
        ul li a:hover {
          padding-bottom: 3px;
          border-bottom: 2px solid #2D3748;
        }
        @media (max-width: 735px) {
          ul {
            display: block;
            margin-top: 20px;
          }
          ul li {
            display: inline-block;
          }
          ul li a {
            font-size: 18px;
          }
        }
      `}</style>
    </ul>
  );
}
