import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '../Logo/Logo';
import { StlCaixa } from '../box/white_box';
import  Styled  from 'styled-components';
import Btn from '../Button/Button';

const ParallaxComp = () => {
  // obter o valor de rolagem
  const { scrollY } = useScroll();
// Tamanho dos elementos parametro 1 valor do scroll, tamanho base, tamanho final
  const scale = useTransform(scrollY, [0, 500], [1, 2]); 
  const scale2 = useTransform(scrollY, [0,1000], [0.5, 1.4])
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Movimento vertical dos elementos
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Opacidade dos selementos
  const opacity2 = useTransform(scrollY, [0, 300], [0, 1]);
  const opacity3 = useTransform(scrollY, [0,300],[0,1]);
  return (
    <div style={{ height: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
      <motion.div style={{ scale, y, opacity, marginTop: '100px', display:'flex', flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'}}>
        <Logo/>
        <h1>Vital-U</h1>
      </motion.div>

      <motion.div style={{ scale, y, opacity, marginTop: '100px', display:'flex', flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', fontSize:50}}>
        <p>A plataforma que te auxilia na perda de peso</p>
      </motion.div>

      <motion.img
          src='peixe.png'
          alt="Imagem Exemplo"
          style={{scale:5, opacity:opacity3, width: '300px', marginTop: '200px', height: 'auto', marginBottom: '200px', display:'flex' }}
        />

      <motion.div
        style={{  scale: scale2, y, opacity: opacity2, textAlign: 'center', padding: '20px' }}
      >
        <Stlform>
          <StlCaixa height='50px' smlWidth='70%'>
        <p> Controle suas calorias com facilidade e alcance seus objetivos! </p>
          </StlCaixa>
          <StlCaixa height='50px' smlWidth='70%'>
        <p> Seu IMC em menos de 60 segundos: fácil, rápido e ao seu alcance! </p>
          </StlCaixa>
          <StlCaixa height='50px' smlWidth='70%'>
        <p> Tenha mais praticidade no seu dia a dia </p>
          </StlCaixa>
        </Stlform>
      </motion.div>
      <motion.div
        style={{  scale: scale2, y, opacity: opacity2, textAlign: 'center', padding: '20px', marginTop:'300px' }}
      >
          <Btn height='75px' width='250px' conteudo='Vamos Começar!' link='/cadastro'/>

      </motion.div>
    
    </div>
  );
};


export default ParallaxComp;

const Stlform = Styled.div`
  // media para Celular
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    grid-gap:10%;
  }
  // media para Computador

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    grid-gap:10%;
    
`
