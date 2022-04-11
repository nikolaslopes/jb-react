import { useNavigate } from 'react-router-dom';
import { Home, Projects } from 'grommet-icons';
import { Avatar, Box, Button, Grid, Main, Nav, Sidebar } from 'grommet';

import { LayoutProps } from './types/LayoutProps';

import avatarImage from '../../assets/Icons/avatar.jpg';
import './styles.scss';

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <Grid
      rows={['100vh']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        {
          name: 'main',
          start: [1, 0],
          end: [1, 0],
        },
      ]}
    >
      <Box gridArea="nav" margin="small">
        <Sidebar
          background="brand"
          round="small"
          header={<Avatar src={avatarImage} />}
        >
          <Nav gap="small">
            <Button icon={<Home />} onClick={() => navigate('/')} />
            <Button icon={<Projects />} onClick={() => navigate('/products')} />
          </Nav>
        </Sidebar>
      </Box>
      <Box gridArea="main" background="light-2" margin="small">
        <Main pad="large">{children}</Main>
      </Box>
    </Grid>
  );
}
