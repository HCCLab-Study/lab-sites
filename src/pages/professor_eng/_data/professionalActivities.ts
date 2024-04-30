// 특정 항목의 속성에 접근할 수 없다는 오류를 해결하기 위해 인터페이스 정의
export interface BaseRole {
    role: string;
    organization?: string;
}

export interface ReviewRole {
    journal: string;
    category: string;
}

export interface ActivityCategory {
    name: string;
    items: Array<BaseRole | ReviewRole>;
}

export const professionalActivities: { categories: ActivityCategory[] } = {
    categories: [
        {
            name: 'Organization Committee',
            items: [
                { role: 'Program Committee', organization: 'IEA 2024 (22nd Triennial Congress of the International Ergonomics Association)' },
                { role: 'Associate Editor', organization: 'Communications of the Korean Institute of Information Scientists and Engineers (KIISE)' },
                { role: 'Associate Editor', organization: 'Journal of Information Processing Systems, (JIPS)' },
                { role: 'Program Committee Chair', organization: 'HCI Korea 2022 Conference' },
                { role: 'Doctoral Consortium Committee', organization: 'International Conference on Computers in Education 2014' }
            ]
        },
        {
            name: 'Member',
            items: [
                { role: 'ACM SIGCHI Member' },
                { role: 'Ergonomics Society of Korea' },
                { role: 'HCI Society of Korea' },
                { role: 'Korean Institute of Industrial Engineers' },
                { role: 'Korean Society of Augmentative and Alternative Communication' }
            ]
        },
        {
            name: 'Reviewer',
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
