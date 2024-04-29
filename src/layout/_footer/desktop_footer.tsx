import { Outlet } from 'react-router-dom';

export default function Desktop_Footer() {
	return (
		<>
			<footer className='bg-custom-navy border border-black h-20 flex items-center justify-center'>
				<p className='text-white'>Copyright © HCC Lab. All rights reserved.</p>
			</footer>
			<Outlet />
		</>
	);
}

