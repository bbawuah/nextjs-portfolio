import Link from "next/link";
import { useTrail, animated } from "react-spring";

const name = "Brian Bawuah - Javascript Developer";
const arrFromName = name.split(" ");
const config = { mass: 10, tension: 600, friction: 200 };

export default function Logo() {
  const trail = useTrail(arrFromName.length, {
    config,
    opacity: 1,
    x: 20,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <Link href="/">
      <a className="logo">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.span
            key={arrFromName[index]}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            {`${arrFromName[index]} `}
          </animated.span>
        ))}
        <style jsx>{`
          .logo {
            text-decoration: none;
            color: #4a5568;
            font-weight: bolder;
            font-size: 1.5em;
          }
        `}</style>
      </a>
    </Link>
  );
}
