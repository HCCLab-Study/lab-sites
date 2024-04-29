import { useState, useEffect } from 'react';

export const useClipboard = () => {
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(() => {
        if (copySuccess !== '') {
            alert(copySuccess);
        }
    }, [copySuccess]);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess('메일주소가 클립보드에 복사되었습니다.');
        } catch (error) {
            console.error('클립보드 복사 실패', error);
            setCopySuccess('클립보드 복사 실패');
        }
    };

    return { copyToClipboard };
};

