import { useClipboard } from '../../../../hooks/useClipboard';
import { professorInfo } from '../../_data/professorInfo';  // Ensure path correctness

function Mobile_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full font-roboto text-custom-navy pb-8'>
                <div className='mt-6'>
                    <p className='relative ml-4 mt-20 mr-4 text-sm'>
                        {professorInfo.bioText[0]}
                        <a href={professorInfo.schoolLink.url} className='text-custom-blue underline font-semibold'>
                            {professorInfo.schoolLink.text}
                        </a>
                        {professorInfo.bioText[1]}
                        <a href={professorInfo.universityLink.url} className='text-custom-blue underline font-semibold'>
                            {professorInfo.universityLink.text}
                        </a>
                        {professorInfo.bioText[2]}
                        <a href={professorInfo.postechLink.url} className='text-custom-blue underline font-semibold'>
                            {professorInfo.postechLink.text}
                        </a>
						{professorInfo.bioText[3]}
                    </p>
                </div>
                <div className='relative ml-8 mt-4'>
                    <ul className='font-semibold list-disc text-sm'>
                        <li>
                            Email: <u className='cursor-pointer' onClick={() => copyToClipboard(professorInfo.email)}>{professorInfo.email}</u>
                        </li>
                        <li>Tel: {professorInfo.telephone}</li>
                        <li>Office: {professorInfo.office}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section2;
