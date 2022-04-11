import { Avatar, Box, Grid, Sidebar } from 'grommet';

import { LayoutProps } from './types/LayoutProps';

import avatarImage from '../assets/Icons/avatar.jpg';

export function Layout({ children }: LayoutProps) {
  return (
    <Grid
      rows={['100vh']}
      columns={['auto', 'flex']}
      areas={[{ name: 'nav', start: [0, 0], end: [0, 0] }]}
    >
      <Box gridArea="nav" margin="small">
        <Sidebar
          background="brand"
          round="small"
          header={<Avatar src={avatarImage} />}
        ></Sidebar>
      </Box>
      {children}
    </Grid>
  );
}
