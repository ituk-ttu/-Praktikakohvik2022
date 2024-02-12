import { animateCountdown } from './helpers/CountDown.tsx'
import Questions from './components/Questions.tsx'
import Gallery from './components/Gallery.tsx'
import FBEvent from './components/FBEvent.tsx'
import Header from './components/Header.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import GlobalStyle from './GlobalStyle.tsx'
import About from './components/About.tsx'
import Firms from './components/Firms.tsx'
import styled from 'styled-components'
import { useEffect } from 'react'

function App() {
  useEffect( () => { animateCountdown() }, [] )

  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <AppContainer>
        <Header />
        <div className='container-text'>
            <div className='container'>
              <About/>
            </div>
            <div className='text-bg'></div>
        </div>
        <Firms/>
        <div className='container-text'>
            <div className='container'>
              <Questions/>
            </div>
            <div className='text-bg'></div>
        </div>
        <Gallery/>
        <FBEvent/>
        <Footer/>
      </AppContainer>
    </>
  )
}

export default App

const AppContainer = styled.div`
  height: 100%;
  width: 80%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  svg {
    position: absolute;
    z-index: 5;
  }


  .container-text {
    position: relative;
    padding: 40px;
    min-height: 200px;
    display: flex;
    justify-content: center;
  }

  .container {
    position: relative;
    z-index: 2;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  .text-bg {
    position: absolute;
    background: rgb(255,158,56);
    background: linear-gradient(270deg, rgba(255,158,56,1) 10%, rgba(255,103,118,1) 100%);
    top: 0;
    height: 100%;
    width: 100vw;
    z-index: 1;
    overflow-x: hidden;
  }

  @media all and (max-width: 900px){
    width: auto;
    margin: 0;
    padding: 0 10px;

    .container-text {
      padding: 30px 0;
    }

    .container {
      padding: 0;
    }
  }
`
