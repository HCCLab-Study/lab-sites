import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section5 from './_section5/desktop_section5';
import Mobile_Section5 from './_section5/mobile_section5';
import Tablet_Section5 from './_section5/tablet_section5';

// 교수님 학력
function Section5() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section5 />} mobileContainer={<Mobile_Section5 />} tabletContainer={<Tablet_Section5 />} />
		</>
	);
}

export default Section5;
