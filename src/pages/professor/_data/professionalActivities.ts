// 특정 항목의 속성에 접근할 수 없다는 오류를 해결하기 위해 인터페이스 정의
export interface Society {
    role: string;
    organization: string;
}

export interface Review {
    journal: string;
    category: string;
}

export const professionalActivities = {
    categories: [
        {
            name: '활동 학회',
            items: [
                { role: '운영이사', organization: '한국정보과학회 Computer Graphics & Interaction Society' },
                { role: '프로그램위원장 (기술분야)', organization: 'HCI Korea 2022 학술대회' },
                { role: '박사컨소시엄위원회', organization: 'International Conference on Computers in Education 2014' },
                { role: 'Associate Editor', organization: 'Journal of Information Processing Systems' },
                { role: 'Member', organization: 'ACM SIGCHI' },
                { role: '종신회원, 평의원', organization: '대한인간공학회' },
                { role: '종신회원', organization: '한국HCI학회' },
                { role: '정회원', organization: '한국컴퓨터교육학회' },
                { role: '정회원', organization: '대한산업공학회' },
                { role: '정회원', organization: '한국정보과학회' },
                { role: '정회원', organization: '한국재활복지공확회' }
            ]
        },
        {
            name: '심사활동',
            items: [
                { journal: 'IEEE Transactions on Software Engineering', category: 'SCIE' },
                { journal: 'Behavior & Information Technology', category: 'SSCI' },
                { journal: 'Mobile Information Systems', category: 'SCIE' },
                { journal: 'International Review of Research in Open and Distributed Learning', category: 'SSCI' },
                { journal: 'International Journal of Automotive Technology', category: 'SCIE' },
                { journal: 'Applied Sciences', category: 'SCIE' },
                { journal: 'Universal Access in the Information Society', category: 'SSCI' }
            ]
        }
    ]
};
