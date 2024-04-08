import React from 'react';

interface PopupProps {
  onClose: () => void; // 팝업 닫기 이벤트 핸들러
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="w-[50%] h-[80%] bg-white m-4 rounded shadow-md relative">
        {/* 팝업 닫기 버튼 */}
        <button className="text-red-500 hover:text-red-700 absolute top-0 right-0 m-2 bg-sky-500" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* 팝업 내용 */}
        팝업 내용을 여기에 추가하세요.
        <div className="h-fit m-2">
            <div className="py-4 border-2 border-solid border-white border-b-custom-blue" style={{ wordWrap: 'break-word' }}>
                제목 길면 아래로 줄넘김titlesfsdfsdfasdfasdzxcvzxcvdddddddddddddddddddddddddddddddddddd
            </div>
            <div className="py-4 -sky-200 overflow-y-scroll">
                content
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
