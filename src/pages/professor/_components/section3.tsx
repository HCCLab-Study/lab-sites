import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section3 from './_section3/desktop_section3';
import Mobile_Section3 from './_section3/mobile_section3';
import Tablet_Section3 from './_section3/tablet_section3';

function Section2() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section3 />} mobileContainer={<Mobile_Section3 />} tabletContainer={<Tablet_Section3 />} />
		</>
	);
}

export default Section2;
