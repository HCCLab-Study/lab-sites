import { Outlet, useLocation, Link } from 'react-router-dom';

export default function Header() {
	// pathname, useLocation을 이용해 클릭 시 경로 표시
	const location = useLocation();
	const isClickActive = (path: string) => location.pathname === path;

	// 경로를 나타내는 스타일 함수로 빼기
	const getLinkStyle = (path: string) => (isClickActive(path) ? 'font-bold underline' : '');

	return (
		<>
			<header className="fixed top-0 flex items-center justify-between w-full z-[999] h-14 bg-gradient-to-r from-sky-500 to-indigo-500">
				<div className="flex items-center ml-32">
					<Link to="home" className="text-white logo">
						<img src="src/assets/images/header/kw-logo.png" alt="KW MARK" className="w-36" />
					</Link>
					<Link to="home" className="ml-4 text-white logo">
						<h3 className="text-xl font-bold">KW-HCC LAB</h3>
					</Link>
				</div>
				<nav className="mr-32">
					<ul className="flex items-center justify-center mr-10 space-x-8 text-white navi">
						<li>
							<Link to='people' className={getLinkStyle('/people')}>
								PEOPLE
							</Link>
						</li>
						<li>
							<Link to='projects' className={getLinkStyle('/projects')}>
								PROJECT
							</Link>
						</li>
						<li>
							<Link to='publications' className={getLinkStyle('/publications')}>
								PUBLICATIONS
							</Link>
						</li>
						<li>
							<Link to='lectures' className={getLinkStyle('/lectures')}>
								LECTURES
							</Link>
						</li>
						<li>
							<Link to='club' className={getLinkStyle('/club')}>
								전공동아리
							</Link>
						</li>
						<div className="relative rounded-full inline-flex mt-1.1">
							<input className="py-2 pl-4 pr-2 text-black rounded-full" type="text" placeholder="Search" />
							<button className="absolute top-0 right-0 mt-2 mr-2">
								<img src='src/assets/images/header/magnifying-glass.png' alt='magnifying-glass' className='w-6'/>
							</button>
						</div>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
