import { Container } from './styles';
import Lottie from 'react-lottie';
import loadingAnimation from '../../../public/images/animations/loading.json';

export function Loading() {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={250}
        width={250}
      />
    </Container>
  );
}
