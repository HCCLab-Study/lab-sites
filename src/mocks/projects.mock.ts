import { Project } from '../model/projects.type';

const on_going_projects: Project[] = [
    {
        date: '2023.10 - 2025.09',
        description: ' 머신러닝 기반 파킨슨병 환자의 변화 지표 모니터링과 맞춤형 자조관리 시스템',
        organization: '중소벤처기업부',
    },
    {
        date: '2022.08 - 2024.07',
        description: '파킨슨병 환자의 신체기능 모니터링 및 운동관리를 위한 스마트폰 어플리케이션 개발 및 임상시험',
        organization: '서울대학교병원',
    },
    {
        date: '2022.07 - 2025.02',
        description: '실시간 온라인교육에서 학습몰입과 참여를 강화하기 위한 AI 알고리즘 기반 맞춤형 피드백 시스템 개발',
        organization: 'National Research Foundation of Korea, 한국연구재단',
    },
    {
        date: '2021.03 - 2024.02',
        description: '신뢰 조절을 활용한 자율주행시스템의 운전자 경험 설계 및 모델링 Experience Design and Modeling of Autonomous Driving System using Trust Calibration',
        organization: 'National Research Foundation of Korea, 한국연구재단',
    },
];

const finished_projects: Project[] = [
    {
        date: '2021.04 - 2023.12',
        description: '청각보조기기 현장 실증 및 사용성 평가 Development of hearing aids that conveniently receive sound and subtitles',
        organization: '보건복지부',
    },
    {
        date: '2021.09 - 2023.11',
        description: '의료적 관리가 필요한 장애인을 위한 재활운동기기 개발 및 임상 중개 연구-상지운동기기',
        organization: '국립재활원',
    },
    {
        date: '2023.06 - 2023.08',
        description: '당뇨 환자 눈 관리 시스템의 사용자 인터페이스 및 사용자 경험 설계',
        organization: '주식회사 클롭',
    },
    {
        date: '2022.04 - 2023.03',
        description: '인공지능 기반 파킨슨병 환자의 자가 훈련과 모니터링 솔루션 개발 및 사업화  Development and Commercialization of AI-based Self-training and Monitoring Solutions for Patients with Parkinsonism',
        organization: 'IITP, 정보통신기획평가원',
    },
    {
        date: '2022.02 - 2022.07',
        description: '웹 쇼핑몰의 고객 경험 분석 및 그로스해킹 컨설팅',
        organization: 'Designovel, 디자이노블',
    },
    {
        date: '2022.02 - 2022.06',
        description: '브랜드 악용 탐지 솔루션의 대시보드 설계 및 개발',
        organization: 'S2W, 에스투더블유',
    },
    {
        date: '2021.09 - 2022.02',
        description: '지능형 로봇을 위한 기초수학 분야의 학습 패턴 분석 및 교육 개선안 도출 : 데이터 애널리틱스 활용 사례 연구',
        organization: '한양대학교 산학협력단',
    },
    {
        date: '2021.01 ~ 2021.12',
        description: '발달장애인의 의사소통 효율성 증대를 위한 AAC 검색 기능 및 표현 예측 알고리즘 개발',
        organization: 'SOVORO, 소리를보는통로',
    },
    {
        date: '2020.07 - 2020.09',
        description: '파킨슨병환자를 위한 운동 처방 및 관리 어플리케이션 개발 Development of Exercise Prescription and Management Application for Parkinson\'s disease',
        organization: 'Seoul National University Hospital, 서울대학교병원',
    },
    {
        date: '2020.02 - 2020.08',
        description: '데이터 기반 UX/CX 분석 방법론 개발 Data-driven UX/CX Analysis methodology',
        organization: 'Samsung SDS',
    },
    {
        date: '2019.07 - 2019.11',
        description: '컨택센터의 CX 연구 방법론 설계 CX Research methodology in Contact Center',
        organization: 'Samsung Electronics America & Samsung SDS America',
    },
    {
        date: '2018.08 - 2018.12',
        description: 'Blockchain Platform with Business Models towards Cross-domain Interoperability',
        organization: 'Ministry of Science and ICT, 미래창조과학부',
    },
    {
        date: '2018.01 - 2018.09',
        description: '모바일 뱅킹앱에 대한 사용성 평가 Usability Evaluation for Financial Mobile Applications and its Digital Strategy',
        organization: 'BNK Financial Group, BNK금융그룹',
    },
    {
        date: '2017.07 - 2017.11',
        description: '프로세스마이닝 기반 시스템 로그와 UX 분석 모델 개발 Development of System Log and UX analysis Model based on Process Mining',
        organization: 'Samsung Heavy Industries, 삼성중공업',
    },
    {
        date: '2016.06 - 2017.07',
        description: 'Development of supportive tools for enhancing pedestrian experience of the mobility handicapped based on IoT',
        organization: 'National Research Foundation of Korea, 한국연구재단',
    },
    {
        date: '2016.05 - 2017.07',
        description: 'Development of a statistical analysis program for LKAS (Lane Keeping Assist System) performance evaluation',
        organization: 'Hyundai Motor Company, 현대자동차',
    },
    {
        date: '2016.06 - 2016.10',
        description: 'A Study on the Multi-Device Usage of Millennials',
        organization: 'Samsung Electronics, 삼성전자',
    },
    {
        date: '2016.03 - 2016.08',
        description: 'User experience evaluation system for consumer electronic products to enhance competitiveness of small and medium enterprises',
        organization: 'Ministry of Trade, Industry and Energy, 산업통상자원부',
    },
    {
        date: '2015.07 - 2016.02',
        description: 'Research on the Development of Embodied Participatory Simulation and its Effects from Embodied Cognition Perspectives',
        organization: 'National Research Foundation of Korea, 한국연구재단',
    },
    {
        date: '2014.07 - 2016.02',
        description: 'POA: Designing a Gamification-Based Social Learning Application',
        organization: '미래IT융합연구소',
    },
    {
        date: '2014.03 - 2014.10',
        description: 'Web-page Clustering Method focusing on Similarity Measures',
        organization: 'National Security Research Institute, 국가보안기술연구소',
    },
];

export const project: Project[] = [...on_going_projects, ...finished_projects];
