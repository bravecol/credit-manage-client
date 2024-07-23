import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header: React.FC = () => {
  return (
    <SHeader>
      <SLink to="/">ホーム</SLink>
      <SLink to="/upload">アップロード</SLink>
      <SLink to="/manage">利用明細管理</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #81a0ff;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
