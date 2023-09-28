import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { LandingPage } from "./Pages/LandingPage"




export const App = () => {
  return (
    <>
    <MantineProvider defaultColorScheme="dark">
    <LandingPage/>
    </MantineProvider>
    </>
  )
}
