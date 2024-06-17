import { ReactNode } from 'react';
import { Header } from '../atoms/header/Header';

interface Props {
  children: ReactNode;
}

export const HeaderOnly: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
