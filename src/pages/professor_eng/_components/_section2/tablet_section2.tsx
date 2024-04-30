import { useClipboard } from '../../../../hooks/useClipboard';
import { professorInfo } from '../../_data/professorInfo';  // Ensure path correctness

function Tablet_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative pb-6 w-full font-roboto text-custom-navy'>
                <div className='mt-3'>
                    <p className='relative ml-64 mr-1'>
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
                <div className='relative ml-64 mt-6'>
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

export default Tablet_Section2;
