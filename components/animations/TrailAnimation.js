import { Fragment } from "react";
import { useTrail, animated } from "react-spring";


export default function Trail({ str }) {
  const title = str.split(" ");
  const config = { mass: 10, tension: 1100, friction: 100 };

  const trail = useTrail(title.length, {
    config,
    opacity: 1,
    x: 20,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <Fragment>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.span
          key={title[index]}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0, ${x}px,0)`)
          }}
        >
          {`${title[index]} `}
        </animated.span>
      ))}
    </Fragment>
  );
}
