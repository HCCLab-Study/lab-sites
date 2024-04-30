import { ResponsiveContainer } from '../../../Responsive';
import Desktop_Section2 from './_section2/desktop_section2';
import Mobile_Section2 from './_section2/mobile_section2';
import Tablet_Section2 from './_section2/tablet_section2';

function Section2() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<Desktop_Section2 />} mobileContainer={<Mobile_Section2 />} tabletContainer={<Tablet_Section2 />} />
		</>
	);
}
export default Section2;
