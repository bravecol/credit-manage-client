import { ReactNode } from 'react';
import { Footer } from '../atoms/header/Footer';
import { Header } from '../atoms/header/Header';

interface Props {
  children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
