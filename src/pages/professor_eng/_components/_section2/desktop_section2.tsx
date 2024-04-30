import { useClipboard } from '../../../../hooks/useClipboard';
import { professorInfo } from '../../_data/professorInfo';  // Ensure path correctness

function DeskTop_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-[280px] left-0 right-0'>
            <div className='absolute h-[250px] w-[900px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='mt-6'>
                    <p className='relative left-48'>
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
                <div className='relative left-56 mt-6'>
                    <ul className='font-semibold list-disc'>
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

export default DeskTop_Section2;
