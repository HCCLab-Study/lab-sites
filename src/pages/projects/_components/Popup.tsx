// PopupComponent.tsx

import React from 'react';

interface PopupProps {
  onClose: () => void; // 팝업 닫기 이벤트 핸들러
  title: string | undefined | null; // 제목
  date: string | undefined | null;
  organization: string | undefined | null;
  content: string; // 내용
}

const PopupComponent: React.FC<PopupProps> = ({ onClose, title, date, organization, content }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="w-[50%] h-[80%] bg-white m-4 p-4 rounded shadow-md relative">
        {/* 팝업 닫기 버튼 */}
        <button className="text-red-500 hover:text-red-700 absolute top-0 right-0 m-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="h-full p-3 flex flex-col">
          <div id='title' className="font-roboto text-custom-navy font-bold	py-4 mx-2 border-2 border-solid border-white border-b-custom-blue text-xl" style={{ wordWrap: 'break-word' }}>
              {title} <span className="font-medium text-lg">({date}, {organization})</span>
          </div>
          <div id='content' className="font-roboto text-font-gray py-4 mx-2 flex-1 overflow-y-auto" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
