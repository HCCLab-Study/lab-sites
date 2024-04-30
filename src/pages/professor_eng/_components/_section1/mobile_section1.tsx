import { Link } from 'react-router-dom';
import { professorProfile } from '../../_data/professorProfile';

function Mobile_Section1() {
	return (
        <section className='relative w-full h-[250px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue'>
            <div className='absolute bottom-10 inset-x-0 font-roboto font-bold text-4xl leading-6 flex items-center justify-center text-white mb-14'>
				Director
			</div>
            <div className='absolute h-[200px] w-[150px] top-[150px] left-2 flex justify-center items-center'>
			<img
                    src={professorProfile.imagePath}
                    alt={professorProfile.imageAlt}
                    className='w-[150px] h-[150px] object-cover'
                />
			</div>
            <div className='relative pt-48 ml-36 py-2'>
                <p className='font-semibold text-white text-sm ml-5 mt-2'>{professorProfile.name}</p>
			</div>
            <Link
                to={professorProfile.linkTo}
                className='absolute right-[12px] bottom-16 mb-5 px-2 py-2 bg-white font-semibold text-sm shadow-md hover:bg-gray-100 rounded-3xl'>
                {professorProfile.linkText}
            </Link>
		</section>
	);
}

export default Mobile_Section1;
