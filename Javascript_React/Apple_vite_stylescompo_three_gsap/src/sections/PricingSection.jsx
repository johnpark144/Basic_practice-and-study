import React, { Suspense, useContext, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model3 } from './../../public/Apple_iphone_13_pro_max3';
import styled from 'styled-components';
import { ColorContext } from './../context/ColorContext';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: "#9BB5CE";
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({color}) => color};
  margin: 0.5rem 0;
  border: 1px solid var(--dark);

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;

export default function PricingSection() {
  const sectionRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext) // Context API

  // useContext에서 변경된 currentColor가 있으면 실행
  useEffect(() => {
    sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`
  }, [currentColor]);

  // useContext에 함수로 currentColor변경
  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };

    changeColorContext(colorObj)
  };

  return (
    <Container>
      <Section ref={sectionRef}>
      <Phone>
      <IndicatorText>360&deg; &#x27F2; </IndicatorText>
        {/* 핸드폰 */}
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>
          <Environment preset="night" />
          <OrbitControls enableZoom={false} />
        </Canvas>
        {/* 색상변경 */}
        <Colors>
          <Color color='#9BB5CE' onClick={()=>updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")} />
          <Color color='#F9E5C9' onClick={()=>updateColor("#F9E5C9", "Gold", "249, 229, 201")} />
          <Color color='#505F4E' onClick={()=>updateColor("#505F4E", "Alpine Green", "80, 95, 78")} />
          <Color color='#574f6f' onClick={()=>updateColor("#574f6f", "Deep Purple", "87, 79, 111")} />
          <Color color='#A50011' onClick={()=>updateColor("#A50011", "Red", "165, 0, 17")} />
          <Color color='#215E7C' onClick={()=>updateColor("#215E7C", "Blue", "33, 94, 124")} />
        </Colors>
      </Phone>
      {/* 아이폰 디테일 */}
      <Details>
        <SubTitle>IPhone</SubTitle>
        <Title>14 Pro Max</Title>
        <SubTitle>From $1099*</SubTitle>
        <ButtonContainer>
          <Btn>Buy</Btn>
          <BtnLink href="#">Learn More &#x2192;</BtnLink>   
        </ButtonContainer>
      </Details>
      </Section>
    </Container>
  );
}
