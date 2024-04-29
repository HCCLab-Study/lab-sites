import Desktop_Footer from "./_footer/desktop_footer";
import Mobile_Footer from "./_footer/mobile_footer";
import { ResponsiveContainer } from '../Responsive';
import Tablet_Footer from "./_footer/tablet_footer";

function Footer() {
  return (
    <>
    <ResponsiveContainer desktopContainer={<Desktop_Footer/>} mobileContainer={<Mobile_Footer/>} tabletContainer={<Tablet_Footer />}/>
    </>
  );
}

export default Footer;