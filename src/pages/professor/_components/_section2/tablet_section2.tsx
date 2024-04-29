import { professorInfo } from '../../_data/professorInfo';
import { useClipboard } from '../../../../hooks/useClipboard';
function Tablet_Section2() {
    const { copyToClipboard } = useClipboard();

    return (
        <section className='relative w-full h-auto'>
            <div className='relative pb-6 w-full font-roboto text-custom-navy'>
                <p className='relative ml-64 mt-3'>{professorInfo.university} / {professorInfo.undergraduateSchool}</p>
                <div className='mt-5'>
                    <p className='relative ml-64 mr-14'>
                        {professorInfo.description}
                    </p>
                </div>
                <div className='relative left-64 mt-6'>
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

export default Tablet_Section2;
