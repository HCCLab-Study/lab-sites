import { professorInfo } from '../../_data/professorInfo';
import { useClipboard } from '../../../../hooks/useClipboard';

function Mobile_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative w-full font-roboto text-custom-navy pb-6'>
                <p className='relative ml-44 mt-2 text-sm'>{professorInfo.university} <br />/ {professorInfo.undergraduateSchool}</p>
                <div className='mt-6'>
                    <p className='relative top-4 pl-3 pr-2 text-sm'>
                        {professorInfo.description}
                    </p>
                </div>
                <div className='relative ml-8 mt-7'>
                    <ul className='font-semibold list-disc text-sm'>
                        <li>Email: <u className='cursor-pointer' onClick={() => copyToClipboard(professorInfo.contact.email)}>{professorInfo.contact.email}</u></li>
                        <li>Tel: {professorInfo.contact.phone}</li>
                        <li>Office: {professorInfo.contact.office}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Mobile_Section2;
