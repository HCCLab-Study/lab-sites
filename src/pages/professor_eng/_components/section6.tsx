import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section6 from './_section6/desktop_section6';
import Mobile_Section6 from './_section6/mobile_section6';
import Tablet_Section6 from './_section6/tablet_section6';

function Section6() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section6 />} mobileContainer={<Mobile_Section6 />} tabletContainer={<Tablet_Section6 />} />
		</>
	);
}

export default Section6;
