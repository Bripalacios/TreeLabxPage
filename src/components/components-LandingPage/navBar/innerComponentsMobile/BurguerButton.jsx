import { Burger } from "@mantine/core"
import styles from './NavBarMobile.module.css'

export const BurguerButton = ({open}) => {
  return (
    <>
      <div className={styles.alingButton}>
        <Burger size='md' color="white" onClick={open}>
         
        </Burger>

   </div>
    
    </ >
  )
}
