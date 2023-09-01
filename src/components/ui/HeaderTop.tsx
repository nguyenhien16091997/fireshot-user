import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
export default function HeaderTop() {
  return (
    <Container
      maxWidth={false}
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
        minHeight: '3rem',
        justifyContent: 'space-between',
      })}
    >
      <Typography variant="h6">
        Get 10% OFF at the Porto GIFTs Selection - <Link>Button Link</Link>
      </Typography>
      <Box
        sx={(theme) => ({
          typography: 'body2',
          '& > :not(style) ~ :not(style)': {
            ml: 4,
          },
          color: theme.palette.common.white,
        })}
      >
        <Link underline="none">Sign in</Link>
        <Link underline="none">Contact us</Link>
        <Link underline="none">Create an Account</Link>
      </Box>
    </Container>
  );
}
