import { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default MyApp;
