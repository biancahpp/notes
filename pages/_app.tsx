import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Nav from '../components/nav';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}
