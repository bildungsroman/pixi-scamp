import { useReducer, useRef } from "react";
import { Container, SimpleMesh, Sprite, Stage, useTick } from "@inlet/react-pixi";
import scamp from "./scampface.png";
import "./App.css";

const App= () => {
  const reducer = (_: any, { data }: any) => data;
  const Scamp = () => {
    const [motion, update] = useReducer(reducer);
    const iter = useRef(0);
    useTick((delta) => {
      const i = (iter.current += 0.05 * delta);
      update({
        type: "update",
        data: {
          x: Math.sin(i) * 100,
          y: Math.sin(i / 1.5) * 100,
          rotation: Math.sin(i) * Math.PI,
          anchor: Math.sin(i / 2),
        },
      });
    });
    return (
      <Sprite
        image={scamp}
        scale={{ x: 0.1, y: 0.1 }}
        {...motion}
      />
    );
  };
  return (
    <Stage width={1400} height={800} options={{ backgroundColor: 0xeef1f5 }}>
      <Container x={300} y={300}>
        <Scamp />
      </Container>
    </Stage>
  );
};

export default App;
