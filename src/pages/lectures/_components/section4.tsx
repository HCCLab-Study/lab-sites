import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section4 from './_section4/desktop_section4';
import Mobile_Section4 from './_section4/mobile_section4';
import Tablet_Section4 from './_section4/tablet_section4';

function Section4() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section4 />} mobileContainer={<Mobile_Section4 />} tabletContainer={<Tablet_Section4 />} />
		</>
	);
}

export default Section4;
