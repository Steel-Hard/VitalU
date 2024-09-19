import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '../Logo/Logo';
import { StlCaixa } from '../box/white_box';
import Styled from 'styled-components';
import Btn from '../Button/Button';

const ParallaxComp = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]); // Reduzido para 1.5
  const scale2 = useTransform(scrollY, [0, 1000], [0.5, 1.2]); // Reduzido para 1.2
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Ajustado para 150
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const opacity2 = useTransform(scrollY, [0, 300], [0, 1]);
  const opacity3 = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <Container>
      <motion.div style={{ scale, y, opacity, marginTop: '50px', textAlign: 'center' }}>
        <Logo />
        <h1>Vital-U</h1>
      </motion.div>

      <motion.div style={{ scale, y, opacity, marginTop: '20px', fontSize: 40, textAlign: 'center' }}>
        <p>A plataforma que te auxilia na perda de peso</p>
      </motion.div>

      <motion.div style={{ scale, y, opacity: opacity3, marginTop: '20px', display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', fontSize: 40, backgroundColor: '#43aa84', width: '100%' }}>
        <p>Stay Fit</p>
      </motion.div>

      <motion.div style={{ scale: scale2, y, opacity: opacity2, textAlign: 'center' }}>
        <Stlform>
          {["Controle suas calorias com facilidade e alcance seus objetivos!", "Seu IMC em menos de 60 segundos: fácil, rápido e ao seu alcance!", "Tenha mais praticidade no seu dia a dia"].map(text => (
            <StlCaixa key={text} height='50px' smlWidth='80%'>
              <p>{text}</p>
            </StlCaixa>
          ))}
        </Stlform>
      </motion.div>

      <motion.div style={{ scale: scale2, y, opacity: 1, textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <Btn height='75px' width='250px' conteudo='Vamos Começar!' link='/cadastro' />
      </motion.div>
    </Container>
  );
};

const Container = Styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Mantido no topo
  width: 100%;
  overflow: hidden; 
  box-sizing: border-box; 
`;

const Stlform = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 100%;
  }
`;

export default ParallaxComp;
