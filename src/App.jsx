import { useState } from 'react'
import styled from 'styled-components';
import MainScream from './components/MainScream';
import Welcome from './components/Welcome'



export default function App() {
  const [start, setStart] = useState(false);

  return (
    <Screem>
      <Welcome start={start} setStart={setStart} />
      <MainScream start={start} />
    </Screem>
  )
}

const Screem = styled.div`

    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color:#FB6B6B;

`;
