import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line import/no-unresolved

const Index = () => (
  <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js with TypeScript example
      </Typography>
    </Box>
  </Container>
);

export default Index;
