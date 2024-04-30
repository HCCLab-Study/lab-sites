import { ResponsiveContainer } from '../../../Responsive';
import DeskTop_Section7 from './_section7/desktop_section7';
import Mobile_Section7 from './_section7/mobile_section7';
import Tablet_Section7 from './_section7/tablet_section7';

function Section7() {
	return (
		<>
			<ResponsiveContainer desktopContainer={<DeskTop_Section7 />} mobileContainer={<Mobile_Section7 />} tabletContainer={<Tablet_Section7 />} />
		</>
	);
}

export default Section7;
