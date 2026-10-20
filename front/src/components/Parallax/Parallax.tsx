import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StlCaixa,Logo,  Container, BtnStl } from '../index';
import styled from 'styled-components';


const ParallaxComp = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1]); // Reduzido para 1.5
  const scale2 = useTransform(scrollY, [0, 1000], [0.5, 1.2]); // Reduzido para 1.2
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Ajustado para 150
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const opacity2 = useTransform(scrollY, [0, 300], [0, 1]);


  return (
    <Container>
      <motion.div style={{ scale, y, opacity, width: '100vw',display: 'flex' ,alignItems: 'center', backgroundColor: 'white', justifyContent: 'center'}}>
        <Stlform>
          <Logo height='150px' width='150px'/>
          <h1 className='title'>Vital-U</h1>

        </Stlform>
      </motion.div>

      <motion.div style={{ scale, y, opacity, marginTop: '20px', fontSize: 40, textAlign: 'center' }}>
        <p>A plataforma que te auxilia no controle calórico!</p>
      </motion.div>

      <img className='img_welcome' src='./foods.png'/>

      <motion.div style={{ scale: scale2, y, opacity: opacity2, textAlign: 'center' }}>
        <Stlform>
          {["Atinja seus objetivos!", "Seu IMC fácil, rápido e ao seu alcance!", "Tenha mais praticidade no seu dia a dia"].map(text => (
            <StlCaixa key={text} height='50px' smlWidth='80%'>
              <p>{text}</p>
            </StlCaixa>
          ))}
        </Stlform>
      </motion.div>

      <motion.div style={{ scale: scale2, y, opacity: 1, textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <Link to='/cadastro'>
          <BtnStl height='75px' width='250px' >Vamos Começar!</BtnStl>
        </Link>
      </motion.div>
    </Container>
  );
};

const Stlform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 100%;
  }
`;


export default ParallaxComp;
