// ######## styled-components ###################################################################################################
// npm i styled-components
// npm install styled-components@^5.0.0 react@^16.8 react-dom@^16.8 react-is@^16.8  // 위에거 안되면 업데이트

// ######## GSAP (ScrollTrigger 애니메이션) #####################################################################################################
// npm i gsap
// npm i gsap --legacy-peer-deps  // 위에거 안되면
// https://greensock.com/docs/v3/Plugins/ScrollTrigger  // ScrollTrigger docs및 참고 자료

// ######## three js #########################################################################################################
// npm install three @react-three/fiber
// npm install @react-three/drei
// --legacy-peer-deps // 위에거 안되면 이거 붙여서

// https://threejs.org/ // docs
// https://www.npmjs.com/package/@react-three/fiber
// https://www.npmjs.com/package/@react-three/drei

// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction  // react-three/fiber docs
// https://github.com/pmndrs/drei   // react-three/drei docs

// https://github.com/pmndrs/gltfjsx    // glb 파일 입력방법
// https://sketchfab.com/feed // 3d파일 다운로드 (glb 파일)

// 3d glb파일 public폴더에 저장 -> cmd에서 public폴더로 -> npx gltfjsx apple_iphone_13_pro_max.glb     // npx gltfjsx (다운받은 glb or gltf  파일).glb | .gltf
// JS파일 3d파일(glb파일) 둘다 필요


// ######## Styled-components 기본 시작 #######################################################################################################
// ################ styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf";
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf";

export const GlobalStyle = createGlobalStyle`     // 스타일컴포넌트 글로벌css 양식
*,*::before,*::after{ // 전체 지정
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'Source Sans Pro light';
    src: local('Source Sans Pro light'), url(${fontLight}) format("truetype") ;
    font-display:swap;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${fontRegular}) format("truetype") ;
    font-display:swap;
    font-style: normal;
}

body{
    font-family: "Source Sans Pro", sans-serif;
    overflow-x: hidden;
}

// 자주쓸것 변수에 저장
:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #0071e3;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";
  
  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
}
`

// ################ App.jsx
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle'; //  GlobalStyle 전체 적용

function App() {
  return (
    <>
    {/* GlobalStyle 전체 적용 */}
      <GlobalStyle />
      <Quote />
    </>
  )
}

export default App

// ################ Quote.jsx
import styled, { keyframes } from 'styled-components';

// 스타일 컴포넌트 양삭
const Section = styled.section` // styled.태그 -> 컴포넌트생성
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
`;

const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;
  
  span {
    position: absolute;
    transform: translateY(3rem);
    animation: ${moveUp} 2.5s ease forwards;
    animation-delay: ${({ delay }) => delay};   // 컴포넌트에 delay prop을 받아서 적용
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient)); // 45도 꺽어서 그라데이션
    /* 텍스트 그라데이션 하는방법 */
    background-clip: text;
    -webkit-background-clip: text;  // 텍스트 부분만 잘라냄
    -webkit-text-fill-color: transparent;   // 텍스트에도 배경 컬러를 입힘
  }
  `

export default function Quote() {
  return (
    // 컴포넌트로 감싼부분들 적용
    <Section>
        <TextContainer>
            <Text delay="0s"><span>&#8220; You can't connect the dots looking forward;</span></Text>      {/* Prop을 전달해줘서 Styled-components css효과를 줌 */}
            <Text delay="0.4s"><span>&nbsp;&nbsp;&nbsp;you can only connect them looking backward.</span></Text>
            <Text delay="0.8s"><span>&nbsp;&nbsp;&nbsp;so you have to trust that the dots</span></Text>
            <Text delay="1.2s"><span> &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;</span></Text>
            <Text delay="1.6s"><span>&#x23AF; Steve Jobs</span></Text>
        </TextContainer>
    </Section>
  )
}

// ################ HeroSection.jsx
import React from 'react'
import styled from "styled-components";
import backgroundVideo from "../assets/video/Ink - 21536.mp4";  // 비디오 사용

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
`
const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(45deg, var(--gradient));
  z-index: 1;
  // 색 그라데이션
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span{
    font-size: var(--fontxxxl);
    text-transform: uppercase;  // 대문자로
    font-weight: 600;
    padding: 2rem;
  }
`

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default function HeroSection() {
  return (
    <Section>
        <VideoContainer>
        <video src={backgroundVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <Title> IPhone 14 Pro Max </Title>
      <TextContainer>
        <span>So.Cold.</span>
        <span>So.Bold.</span>
      </TextContainer>
    </Section>
  )
}

// ######## three js 기본  ################################################################################################################
// ################ PhoneModel.jsx
import React from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;

export default function PhoneModel() {
  return (
    <Container id="phone-model">
        <Canvas>
            {/* 3D 밝기 // 적용안하면 그냥 검하게 보임 */}
            <ambientLight intensity={0.8} /> 
            {/* 빛이 비추는 방향 position={[우,위,앞]} (디폴트: 위) */}
            <directionalLight position={[1,0,0]} />
            <mesh>
                {/* 3d 구현 할 박스생성 */}
                <boxGeometry />
                {/* 기하학적으로 그림그리기 위한것 */}
                <meshStandardMaterial color="red" />
            </mesh>
            {/* 3d 형태 뷰 구현 */}
            <OrbitControls />
        </Canvas>
    </Container>
  )
}


// ################ 3d 다운받아 JS파일로 만들기
// https://github.com/pmndrs/gltfjsx    // glb 파일 입력방법
// https://sketchfab.com/feed // 3d파일 다운로드 (glb 파일)

// 3d glb파일 public폴더에 저장 -> cmd에서 public폴더로 -> npx gltfjsx apple_iphone_13_pro_max.glb     // npx gltfjsx (다운받은 glb or gltf  파일).glb | .gltf
// JS파일 3d파일(glb파일) 둘다 필요

// ################ PhoneModel.jsx (3d파일 불러오기, 주변환경, 처음 Zoom크기)
import React from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from './../../public/Apple_iphone_13_pro_max';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;

export default function PhoneModel() {
  return (
    <Container id="phone-model">
      {/* Canvas // camera={{fov: 14}} 는 처음 Zoom크기 */}
        <Canvas camera={{fov: 14}}>
            <ambientLight intensity={1.25} /> 
            <directionalLight intensity={0.4} position={[1,0,0]} />
            {/* 다운받은 3D 생성 */}
              <Model />
            {/* 주변환경 세팅  https://github.com/pmndrs/drei#environment  */}
              <Environment preset='night' />
            <OrbitControls />
        </Canvas>
    </Container>
  )
}

// ######## GSAP (ScrollTrigger) ################################################################################################################
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

// ################ Quote.jsx
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

// ... 생략...
export default function Quote() {
  gsap.registerPlugin(ScrollTrigger);  // gsap에 ScrollTrigger 사용한다고 선언 (플러그인)
  const sectionRef = useRef(null);

  useLayoutEffect(()=>{
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,  // 같이 움직일 Dom
      start: "top+=200 top",  // 시작 포인트 ("trigger태그부분 화면부분")
      end: "bottom-=500",   // 끝 포인트    ("trigger태그부분 화면부분")
      pin: true,  // 같이 움직이도록 고정
      markers: true,  // start end 포인트 표시 (개발자용)
      pinSpacing: false,
    });

    return () => {
      if(trigger) trigger.kill();
    }
  }, [])

  return (
    // 컴포넌트로 감싼부분들 적용
    <Section ref={sectionRef}>
        <TextContainer>
            <Text delay="0s"><span>&#8220; You can't connect the dots looking forward;</span></Text>
            <Text delay="0.4s"><span>&nbsp;&nbsp;&nbsp;you can only connect them looking backward.</span></Text>
            <Text delay="0.8s"><span>&nbsp;&nbsp;&nbsp;so you have to trust that the dots</span></Text>
            <Text delay="1.2s"><span> &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;</span></Text>
            <Text delay="1.6s"><span>&#x23AF; Steve Jobs</span></Text>
        </TextContainer>
    </Section>
  )
}


// ################ Model.jsx

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useThree } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/apple_iphone_13_pro_max.glb')

  const group = useRef()
  let camera = useThree(state => state.camera) // useThree(state)의  state는 3d 정보

  useLayoutEffect(() => {
    let t1 = gsap.timeline({    // timeline의 scrollTrigger는 말그대로 이 기간동안 fromTo, to, from을 함
      scrollTrigger:{
        trigger:"#phone-model", // html Id처럼 dom불러오기 가능
        start:"top+=100 top",   // ("trigger태그부분 화면부분" -> 요 두부분이 맞닿을때 시작)
        end:"bottom bottom",    // ("trigger태그부분 화면부분"> 요 두부분이 맞닿을때 끝)
      }
    })
    t1.fromTo(camera.position, {y:2}, {y:0})  // 스크롤이 start 포인트닿을때 camera.position을 변경시킴
  },[])

  return (
          // ... 생략 ...
      )
}

useGLTF.preload('/apple_iphone_13_pro_max.glb')

// ################ DesignSection.jsx
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  background-color: var(--white);
  overflow: hidden;
`

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);
  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
`

const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);
  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
    align-self: flex-end;
    text-align: right;
  }
`

export default function DesignSection() {
    const container = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);

    useLayoutEffect(() => {
        let t1 = gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top-=400 top",
              end: "bottom top",
              scrub: 1, // 부드럽게 스크러빙, 1초가 걸립니다.
            },
          })
          .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
          .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");
    
        return () => {
          if (t1) t1.kill();
        };
      }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Flaw-less design with strong durability.</span>
        </TextContainer>
        <TextContainer2 ref={textTwo}>
        <span>Flat-edge design with toughest smartphone glass.</span>
        </TextContainer2>
    </Section>
  )
}

// ################ BatterySection.jsx
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from 'gsap';
// ... 생략 ...
export default function BatterySection() {
    const battery = useRef(null);
    let elements = gsap.utils.selector(battery) // battery 돔안의 태그를 배열로 가져올 함수

    useLayoutEffect(()=>{
        let t1 = gsap.timeline({});

        elements("li").forEach((el) => {  // 배열안에 모든 태그들을 timeline으로 사용
            t1.to(el,
                {
                    scrollTrigger: {
                        trigger: el,
                        start:"top center",
                        end: "bottom center",
                        scrub: true,
                    }, opacity: 1,
                }
                )
        })
    },[])

  return (
    <Section id="battery">
      <Title>Go all day with single charge...</Title>
      <Battery ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Battery>
    </Section>
  )
}

// #########################################################################################################################################################
