// PopupComponent.tsx

import React from 'react';

interface PopupProps {
  onClose: () => void; // 팝업 닫기 이벤트 핸들러
  name: string | undefined | null; // 이름
  department: string | undefined | null;  // 부서
  interests: string[]; // 관심사
  imageUrl: string; // 사진
  content: string; // 내용
}

export const Mobile_PopupComponent: React.FC<PopupProps> = ({ onClose, name, department, interests, imageUrl, content }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30'>
      <div className='w-gull h-[80%] bg-white m-4 rounded shadow-md relative'>
        {/* 팝업 닫기 버튼 */}
        <button className='text-red-500 hover:text-red-700 absolute top-0 right-0 m-2' onClick={onClose}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        {/* 팝업 내용 */}
        <div className='h-full p-3 flex flex-col justify-center items-center'>
          <div id='title' className='w-full content-center font-roboto text-custom-navy pt-3 pb-5 mx-[5%] border-2 border-solid border-white border-b-custom-blue text-xl flex justify-center items-end' style={{ wordWrap: 'break-word' }}>
              <img src={imageUrl} alt={`${name} 사진`} className='w-[30%] inline-block mr-[5%]'></img>
              <div>
                <p className='font-bold text-lg p-1'>{name}</p>
                <p className='font-medium text-base'>({department})</p>
                <p className='text-base text-font-gray'>{interests.join(' ')}</p>
              </div>
          </div>
          <div id='content' className='w-[90%] font-roboto text-font-gray text-sm py-4 mx-2 flex-1 overflow-y-auto' dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </div>
  );
};
