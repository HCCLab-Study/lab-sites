import { useClipboard } from '../../../../hooks/useClipboard';
import { professorInfo } from '../../_data/professorInfo';

function DeskTop_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-[280px]'>
            <div className='absolute h-[250px] w-[900px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <p className='relative left-48'>{professorInfo.university} / {professorInfo.undergraduateSchool}</p>
                <div className='mt-6'>
                    <p className='relative left-48'>
                        {professorInfo.description}
                    </p>
                </div>
                <div className='relative left-56 mt-6'>
                    <ul className='font-semibold list-disc'>
                        <li>Email: <u className='cursor-pointer' onClick={() => copyToClipboard(professorInfo.contact.email)}>{professorInfo.contact.email}</u></li>
                        <li>Tel: {professorInfo.contact.phone}</li>
                        <li>Office: {professorInfo.contact.office}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default DeskTop_Section2;
