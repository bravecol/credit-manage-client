import styled from '@emotion/styled';

export const Footer: React.FC = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #81a0ff;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
