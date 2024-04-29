import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section1 from './_section1/desktop_section1';
import Mobile_Section1 from './_section1/mobile_section1';
import Tablet_Section1 from './_section1/tablet_section1';

// 동아리 title
function Section1 () {

	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section1 />} mobileContainer={<Mobile_Section1 />} tabletContainer={<Tablet_Section1 />} />
		</>
	);
}

export default Section1;