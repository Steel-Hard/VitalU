import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '../Logo/Logo';

const ParallaxComp = () => {
  // obter o valor de rolagem
  const { scrollY } = useScroll();
// Tamanho dos elementos parametro 1 valor do scroll, tamanho base, tamanho final
  const scale = useTransform(scrollY, [0, 500], [1, 2]); 
  const scale2 = useTransform(scrollY, [0,1000], [0.5, 2])
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Movimento vertical dos elementos
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Opacidade dos selementos
  const opacity2 = useTransform(scrollY, [0, 300], [0, 1]);
  return (
    <div style={{ height: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
      <motion.div style={{ scale, y, opacity, marginTop: '100px', display:'flex', flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'}}>
        <Logo/>
        <h1>Vital-U</h1>
      </motion.div>

      <motion.img
          src="https://via.placeholder.com/300"
          alt="Imagem Exemplo"
          style={{scale, opacity, width: '300px', marginTop: '200px', height: 'auto', marginBottom: '200px' }}
        />

      <motion.div
        style={{  scale: scale2, y, opacity: opacity2, textAlign: 'center', padding: '20px' }}
      >
        <p>Primeiro </p>
        <p>Segundo </p>
        <p>Terceiro </p>
      </motion.div>

      
      <motion.div
        style={{ scale: scale2, y, opacity: opacity2, textAlign: 'center', padding: '20px' }}
      >
        <p>Primeiro </p>
        <p>Segundo </p>
        <p>Terceiro </p>
      </motion.div>
    </div>
  );
};

export default ParallaxComp;

