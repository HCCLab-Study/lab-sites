import { Outlet, useLocation } from 'react-router-dom';

export default function Header() {
	// pathname, useLocation을 이용해 클릭 시 경로 표시
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<>
			<header className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500 items-center fixed top-0 w-full flex justify-between'>
				<div className='flex items-center ml-32'>
				<a href='home' className='logo text-white'>
						<img src='src/assets/images/main/kwmark.jpeg' alt='KW MARK' className='w-36' />
					</a>
					<a href='home' className='logo text-white ml-4'>
						<h3 className='text-xl font-bold'>KW-HCC LAB</h3>
					</a>
				</div>
				<nav className='mr-32'>
					<ul className='navi flex space-x-8 justify-center items-center mr-10 text-white'>
						<li><a href='people' className={`${isActive('/people') ? 'font-bold underline' : ''}`}>PEOPLE</a></li>
						<li><a href='projects' className={`${isActive('/projects') ? 'font-bold underline' : ''}`}>PROJECT</a></li>
						<li><a href='#' className={`${isActive('/#') ? 'font-bold underline' : ''}`}>PUBLICATIONS</a></li>
						<li><a href='#' className={`${isActive('/#') ? 'font-bold underline' : ''}`}>LECTURES</a></li>
						<li><a href='#' className={`${isActive('/#') ? 'font-bold underline' : ''}`}>전공동아리</a></li>
						<div className='relative rounded-full inline-flex mt-1.1'>
							<input className='rounded-full pl-4 pr-2 py-2 text-black' type='text' placeholder='Search' />
							<button className='absolute right-0 top-0 mt-2 mr-2'>
								🔍
							</button>
						</div>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
