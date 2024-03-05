import { Outlet, useLocation, Link } from 'react-router-dom';

export default function Header() {
	// pathname, useLocation을 이용해 클릭 시 경로 표시
	const location = useLocation();
	const isClickActive = (path: string) => location.pathname === path;

	// 경로를 나타내는 스타일 함수로 빼기
	const getLinkStyle = (path: string) => isClickActive(path) ? 'font-bold underline' : '';

	return (
		<>
			<header className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500 items-center fixed top-0 w-full flex justify-between'>
				<div className='flex items-center ml-32'>
				<Link to='home' className='logo text-white'>
						<img src='src/assets/images/header/kw-logo.png' alt='KW MARK' className='w-36' />
					</Link>
					<Link to='home' className='logo text-white ml-4'>
						<h3 className='text-xl font-bold'>KW-HCC LAB</h3>
					</Link>
				</div>
				<nav className='mr-32'>
					<ul className='navi flex space-x-8 justify-center items-center mr-10 text-white'>
						<li><Link to='people' className={getLinkStyle('/people')}>PEOPLE</Link></li>
						<li><Link to='projects' className={getLinkStyle('/projects')}>PROJECT</Link></li>
						<li><Link to='#' className={getLinkStyle('/#')}>PUBLICATIONS</Link></li>
						<li><Link to='#' className={getLinkStyle('/#')}>LECTURES</Link></li>
						<li><Link to='#' className={getLinkStyle('/#')}>전공동아리</Link></li>
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
