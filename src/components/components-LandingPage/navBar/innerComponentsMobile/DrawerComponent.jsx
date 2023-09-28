import { useDisclosure } from '@mantine/hooks';
import { BurguerButton } from "./BurguerButton";
import { Button, Divider, Drawer } from '@mantine/core';
import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
} from '@tabler/icons-react';
import styles from './NavBarMobile.module.css'


  const content = [
    { title: 'INICIO', to:''},
    { title: 'NOSOTROS', to:''},
    { title: 'SERVICIOS', to: '' },
    { title: 'CONTACTO', to: '' }]




export const DrawerComponent = () => {

  const [opened, { open, close }] = useDisclosure(false);

  // const content = Array(10)
  //   .fill(0)
  //   .map((_, index) => <p key={index}>Drawer with scroll</p>);

  const MainContent = content.map(el => (
      <Button 
      key={el.title}
      variant='transparent'
      size='sm'
      color="rgba(255, 255, 255, 1)"
      className={styles.letra}>
      {el.title}
      </Button>
    
    ))
  
  

  
  const Icons = []
  return (
    <>
      <div className={styles.letra}>
      <Drawer
        opened={opened}
        onClose={close}
        size="60%">
        
          <Divider />
          <div >
        {MainContent}
          </div>
      </Drawer>
      </div>
   <BurguerButton open={open}/> 
    </>
  )
}
