
import { NavBarMobile } from './innerComponentsMobile/NavBarMobile'
import { NavBarDesktop } from './innerComponentsDesktop/NavBarDesktop'

export const IndexNavBar = () => {
  return (
    <>
      <NavBarMobile />
      <NavBarDesktop/>
    </>
  )
}
