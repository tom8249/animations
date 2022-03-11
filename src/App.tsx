import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: #f499e6;
  border-radius: 30px;
  height: 250px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Circle = styled(motion.div)`
  background-color: purple;
  height: 80px;
  width: 80px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
`;

const Button = styled(motion.button)`
  border-radius: 10px;
  border: none;
  font-size: 18px;
  background-color: white;
  color: blue;
  padding: 10px;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  const [id, setId] = useState<String | null>(null);

  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          id="1"
          layoutId={"1"}
          whileHover={{
            scale: 1.1,
          }}
        ></Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          onClick={() => setId("2")}
          id="2"
          layoutId={"2"}
          whileHover={{
            scale: 1.1,
          }}
        ></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 250,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button
        onClick={toggleClicked}
        whileTap={{ scale: 1.2, color: "green", fontSize: "20px" }}
      >
        Swtich!
      </Button>
    </Wrapper>
  );
}
export default App;
