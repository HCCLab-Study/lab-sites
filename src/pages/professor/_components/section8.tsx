import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section8 from './_section8/desktop_section8';
import Mobile_Section8 from './_section8/mobile_section8';
import Tablet_Section8 from './_section8/tablet_section8';

function Section8() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section8 />} mobileContainer={<Mobile_Section8 />} tabletContainer={<Tablet_Section8 />} />
		</>
	);
}

export default Section8;
