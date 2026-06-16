import { useSpring, animated } from "react-spring";
import useOnScreen from "../lib/useOnScreen";
import { useRef } from "react";

// One digit = one hook scope. Calling hooks per-child (instead of inside a
// .map() in the parent) keeps us compliant with the Rules of Hooks under React 18.
const Digit = ({ value, delay }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "0px");
  const animation = useSpring({
    number: value,
    from: { number: 0 },
    config: { tension: 40, friction: 20, precision: 0.1 },
    delay,
    reset: onScreen,
    reverse: !onScreen
  });

  return (
    <animated.span ref={ref} style={animation}>
      {animation.number.to(x => x.toFixed())}
    </animated.span>
  );
};

const AnimatedNumber = ({ delay = 0, children }) =>
  String(children)
    .split("")
    .map((char, i) =>
      /\d/.test(char) ? (
        <Digit key={`digit-${i}`} value={parseInt(char, 10)} delay={delay} />
      ) : (
        <span key={`char-${i}`}>{char}</span>
      )
    );

export default AnimatedNumber;
