import { Journals, Publication, Conferences } from '../model/publication.type';

const journals: Journals[] = [
	{
		journals:
			'Kim, H., Gwak, S., Hwang, H., Yoon, J., Park, K.*, "Enhancing Communication and Social Inclusion for Hearing-Impaired Users: Usability Evaluation and Design Recommendations for Assistive Applications", Minor revision in a SCIE Journal.',
	},
	{
		journals:
			'Cho, M., Kim, J., Kim, J., Park, K.*, (2024) "Integrating Business Analytics in Educational Decision-Making: A Multifaceted Approach to Enhance Learning Outcomes in EFL Contexts", Mathematics, SCIE.',
	},
	{
		journals:
			'Kim, D., Ryoo, D., Park, K., (2024) "Design of a Personalized AI-based Synchronous Online Education Feedback System using Eye Tracking Data and Evaluation of Intention to Use", The Journal of Korean Association of Computer Education, 27(2), KCI. Best Paper Award.',
	},
	{
		journals:
			'Gwak, S., Park, K.*, (2023) "Designing Effective Visual Feedback for Facial Rehabilitation Exercises: Investigating the Role of Shape, Transparency, and Age on User Experience", Healthcare, 11 (13), 1835. SSCI.',
	},
	{
		journals:
			'Shin, K., Lee, J., Park, K.*, (2023) "Hands-free Presentation Tool with Co-speech Gesture Interactions: A Wizard-of-Oz Study", Human-centric Computing and Information Sciences, 13. SCIE.',
	},
	{
		journals:
			'Lee, J., Park, K., & Cho, M. (2022). Exploring the relationship between bias and user satisfaction in recommendation systems: A systematic literature review, Journal of Digital Contents Society, 23 (9), 1823-1832. KCI',
	},
	{
		journals:
			'Park, K., Han, S. H., Lee, H., & Kwahk, J. (2021). Shared steering control: How strong and how prompt should the intervention be for a better driving experience?. International Journal of Industrial Ergonomics, 86, 103213. SSCI',
	},
	{
		journals:
			'Kim, A., Yun, S. J., Sung, K. S., Kim, Y., Jo, J. Y., Cho, H., Park, K., ... & Seo, H. G. (2021). Exercise Management Using a Mobile App in Patients With Parkinsonism: Prospective, Open-Label, Single-Arm Pilot Study. JMIR mHealth and uHealth, 9(8), e27662. SCIE',
	},
	{
		journals:
			'Lee, J., So, H.-J.*, Ha, S., Kim, E., & Park, K. (2021). Unpacking Academic Emotions in Asynchronous Video-based Learning: Focusing on Korean Learners Affective Experiences, The Asia-Pacific Education Researcher, 30(3), 247-261. SSCI',
	},
	{
		journals:
			'Park, K., Han, S. H.*, & Kwahk, J. (2021). Toward trustworthy and comfortable lane keeping assistance system: an empirical study of the level of haptic authority, International Journal of Human-Computer Interaction, 37(14), 1347-1363. SSCI',
	},
	{
		journals:
			'Park, K., Kim, D., & Han, S. H.* (2020). Usability of the size, spacing, and operation method of virtual buttons with virtual hand on head-mounted displays, International Journal of Industrial Ergonomics, 76, 102939. SSCI',
	},
	{
		journals:
			'Lee, M., Kwahk, J.*, Han, S. H., Jeong, D., Park, K., Oh, S., & Chae, G. (2020). Developing personas & use cases with user survey data: A study on the millennials media usage. Journal of Retailing and Consumer Services, 54, 102051. SSCI',
	},
	{
		journals:
			'Park, K., So, H. J.*, & Cha, H. (2019). Digital equity and accessible MOOCs: Accessibility evaluations of mobile MOOCs for learners with visual impairments. Australasian Journal of Educational Technology, 35(6), 48-63. SSCI',
	},
	{
		journals:
			'Park, K., Kwahk, J.*, Han, S. H., Song, M., Choi, D. G., Jang, H., ... & Jeong, I. S. (2019). Modelling the intrusive feelings of advanced driver assistance systems based on vehicle activity log data, International journal of automotive technology, 20(3), 455-463. SCIE',
	},
	{
		journals:
			'Park, K., Kwahk, J.*, Han, S. H., Song, M., Choi, D. G., Jang, H., & Kim, D. (2018). Measuring the intrusive feeling of a LKAS. Journal of the Ergonomics Society of Korea, 37(4), 459-473. KCI',
	},
	{
		journals:
			'Jeong, D. Y., Han, S. H.*, Kwahk, J., Park, J., Lee, M., Park, K., … & Jeong, D. (2017). Suggesting Pedestrian Experience Principles of the Mobility Handicapped. The Japanese Journal of Ergonomics, 53(Sup.), 412-415.',
	},
	{
		journals:
			'Lee, M., Kwahk, J.*, Han, S. H., Jeong, D., Park, K., Kim, J. H., & Chae, G. (2017). A Survey on the Multi-device Media Usage of Millennials”, Journal of the Ergonomics Society of Korea, 36(6), 645-663. KCI',
	},
];

const conferences: Conferences[] = [
	{
		conferences:
			'김주현, 김호준, 박규동, 박재성 (2024) Wifi 신호를 활용한 혀 움직임 감지 시스템. 한국HCI학회 학술대회.',
	},
	{
		conferences:
			'곽소정, 김현수, 박규동 (2023) ASMR에서의 사회적 현존감, 인지적 스트레스 및 생체 반응 탐구: 사회적 상호작용 유형에 대한 비교 분석. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'김주현, 박규동 (2023) 고객 경험 향상을 위한 인공지능 활용 연구 동향 조사: 체계적 문헌 고찰을 중심으로. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'김호준, 김주현, 황희태, 박규동 (2023) 스마트폰 카메라를 활용한 상지 재활 운동 동작 분석과 안정적인 신체 부위 식별. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'이단비, 김가영, 김현경, 박규동 (2023) 가상현실 면접 상황의 아바타 유형 비교 분석. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'황희태, 김주현, 김호준, 민희원, 박규동 (2023) 운전자 행동 분석을 통한 조건부 자율주행 차량에서의 운전자 신뢰 조절 모델링. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'신정훈, 박규동 (2023) 구성 요소 분해 방식을 활용한 한자 교육 웹 서비스 개발. 한국디지털콘텐츠학회 추계종합학술대회. 은상 수상',
	},
	{
		conferences:
			'김형빈, 박규동 (2023) 오픈소스를 활용한 프로세스 모델의 3차원 시각화 시스템 개발. 한국디지털콘텐츠학회 하계종합학술대회',
	},
	{
		conferences:
			'황희태, 곽소정, 김주현, 박규동 (2023) 멀티 모달리티 기반 감정 분류 모델의 성능과 효과적인 Fusion 방식에 대한 비교 연구. 한국데이터마이닝학회 하계학술대회',
	},
	{
		conferences:
			'황희태, 곽소정, 김주현, 박규동 (2023) 감정 인식을 위한 멀티모달 모델: Early Fusion과Late Fusion 방식 비교를 중심으로. 한국정보과학회 한국컴퓨터종합학술대회',
	},
	{
		conferences:
			'황희태, 박규동 (2023) 청각장애인을 위한 실시간 통역 자막 애플리케이션의 사용자 경험 평가 : 강의실 환경을 중심으로. 한국재활복지공학회. 장려상 수상',
	},
	{
		conferences: '이영현, 박규동 (2023) 피트니스 센터 O2O 플랫폼에 대한 사용성 평가 연구. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'이규민, 박미현, 변유진, 이지은, 박규동 (2023) 막대그래프 왜곡 탐지 및 교정 시스템. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'김현수, 곽소정, 황희태, 박규동 (2023) 청각장애인을 위한 실시간 통역 자막 어플리케이션의 사용성 평가. 한국HCI학회 학술대회',
	},
	{
		conferences: '김주현, 박규동 (2023) 감성 분석과 토픽 모델링을 통한 주식 게시판 분석 연구. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'곽소정, 박규동 (2023) 파킨슨병 환자의 음성 특징 및 이미지를 활용한 분류 모델 설계. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'박규동, 김현수 (2023) Designing Visual Feedback to Assist Facial Exercises in Patients with Parkinsonism. International Conference on Computer Graphics and Image Processing (CGIP 2023)',
	},
	{
		conferences:
			'오수빈, 방성진, 이유진, 김재윤, 이민구, 박규동, 이상민 (2022) 장애인 재활운동을 위한 인공지능 서비스 플랫폼 및 기반기술 개발. 대한산업공학회 추계학술대회 논문집',
	},
	{
		conferences:
			'방성진, 이민구, 박규동, 이상민 (2022) 사람 자세 추정 기반 데이터의 클래스 불균형 문제 해결을 위한 데이터 증강 기법. 대한산업공학회 추계학술대회 논문집',
	},
	{
		conferences:
			'김종민, 박규동 (2022) Online Learning Pattern Analysis using Clustering Techniques. Asia Pacific Industrial Engineering & Management Systems Conference (APIEMS 2022).',
	},
	{
		conferences:
			'곽소정, 박규동 (2022) A Study on User Experience by Visual Feedback Design of Facial Recognition Application. Asia Pacific Industrial Engineering & Management Systems Conference (APIEMS 2022).',
	},
	{
		conferences:
			'곽소정, 김종민, 김주현, 신수빈, 이규민, 박규동 (2022) 표정 인식 모바일 어플리케이션의 피드백 디자인에 따른 사용자 경험 연구. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'김현수, 신수빈, 박규동 (2022) 인공지능 기반 의사결정지원시스템의 사용자 경험 디자인 사례 연구. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'김종민, 조민수, 박규동. (2022) 계층적 클러스터링 기법을 이용한 온라인 학습 패턴 분석 및 모델링. 한국데이터마이닝학회 하계학술대회',
	},
	{
		conferences:
			'이영현, 김채현, 신수빈, 이규민, 채수지, 박규동. (2022) 파킨슨병의 재활 운동 보조를 위한 모바일 응용프로그램 설계 및 구현. 한국디지털콘텐츠학회 하계종합학술대회. 금상 수상',
	},
	{
		conferences:
			'김주현, 이영현, 김종민, 곽소정, 박규동. (2022) 프로세스 마이닝을 이용한 이커머스 고객 행동 분석. 한국디지털콘텐츠학회 하계종합학술대회. 동상 수상',
	},
	{
		conferences:
			'김현수, 박규동. (2022) 기계학습을 이용한 파킨슨병 탐지의 연구 동향 분류기 및 음성 파라미터를 중심으로. 한국디지털콘텐츠학회 하계종합학술대회',
	},
	{
		conferences:
			'권나은, 김종민, 조민수, 박규동. (2022) 프로세스 마이닝 기반 Felder-Silverman 학습패턴 데이터 분석 방법 개발. 대한산업공학회 춘계학술대회 논문집',
	},
	{
		conferences:
			'최은영, 김가영, 김종훈, 이현빈, 신유안, 박규동. (2022) 가상현실 기반 산후조리원 퇴소 교육 시스템 설계 및 구현. 한국정보처리학회 춘계학술대회',
	},
	{
		conferences:
			'권나은, 이규민, 이지윤, 채수지, 박규동, 이상민. (2022) 효과적인 상지 재활을 위한 운동 어플리케이션 개발: 게이미피케이션 적용을 중심으로. 한국정보처리학회 춘계학술대회. 장려상 수상',
	},
	{
		conferences:
			'김현수, 곽소정, 정범영, 박규동. (2022) 벽걸이형 청각보조기기의 사용자 평가: 사용자 만족도 및 음질을 중심으로. 대한인간공학회 춘계학술대회',
	},
	{
		conferences:
			'권준혁, 소현수, 장석원, 손재성, 박규동. (2022) 음악 커버 영상 제작을 위한 애플리케이션 설계 및 개발. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'이재은, 이지은, 임예희, 박규동, 조민수. (2022) 자연어처리 기술을 활용한 유튜브 악성 댓글 자동 블라인드 시스템. 한국HCI학회 학술대회',
	},
	{
		conferences:
			'이영현, 김현수, 박규동. (2021) 게임화를 활용한 재활 운동의 연구 동향: 사용자의 동기부여를 중심으로. 대한인간공학회 추계학술대회',
	},
	{
		conferences:
			'채수지, 박규동 (2021) Design and Evaluation of Exercise Management Application for Patients with Parkinsonism. International Conference on ICT Convergence (ICTC 2021)',
	},
	{
		conferences:
			'정범영, 박규동 (2021) Heuristic Evaluation for Augmentative and Alternative Communication Application: A Case Study. International Conference on ICT Convergence (ICTC 2021)',
	},
	{
		conferences:
			'정범영, 박규동. (2021) 문자 통역 기술을 적용한 AAC 어플리케이션의 평가. 한국보완대체의사소통학회 추계학술대회',
	},
	{
		conferences:
			'채수지, 박규동. (2021) 파킨슨병 환자의 재활을 위한 모바일 어플리케이션 설계. 대한인간공학회 춘계학술대회.',
	},
	{
		conferences:
			'정범영, 박규동. (2021) 보완대체의사소통 (AAC) 모바일 애플리케이션에 대한 조사. 대한인간공학회 춘계학술대회.',
	},
	{
		conferences:
			'조형준, 김예원, 유찬영, 최인아, 한준아, 박규동. (2021) 디자인 사고를 활용한 시각장애인용 프로그래밍 도구 설계, 대한인간공학회 춘계학술대회.',
	},
	{
		conferences:
			'Park, K., Han, S. H., & Kwahk, J. “The Effects of Steering Control Strategy in a Lane Keeping Assistance System on the Driving Experience”, HCI International 2018, Las Vegas, USA (2018).',
	},
	{
		conferences:
			'Cho, H., Park, K., & Choi, S. “Equal-Level Interaction: A Case Study for Improving User Experiences of Visually-Impaired and Sighted People in Group Activities”, IEEE Haptic, Audio and Visual Environments and Games (HAVE 2018), Dalian, China (2018).',
	},
	{
		conferences:
			'Park, K., & Han, S. H. “An eye movement analysis with process mining techniques for usability evaluation”, Ergonomics Society of Korea (2017 ESK fall conference), Hoengseong, Korea (2017) -Excellent student paper award.',
	},
	{
		conferences:
			'Park, K., Kwahk, J., & Han, S. H. “Designing a Feeding Support System for Infants using IoT”, Advances in Computer-Human Interactions (ACHI 2017), Nice, France (2017).',
	},
	{
		conferences:
			'Oh, S., Park, K., Kwon, S., & So, H.-J. “Designing a multi-user interactive simulation using AR glasses”, ACM Tangible, Embeded, and Embodied Interaction (TEI 2016), Eindhoven, Netherlands (2016).',
	},
	{
		conferences:
			'Kwon, S., Oh, S., Park, K., Kim, S., & So, H.-J. “Children as Participatory Designers of a New Type of Mobile Social Learning Application”, ACM MobileHCI 2015, Copenhagen, Denmark (2015).',
	},
	{
		conferences:
			'Kim, S., So, H.-J., Kwon, S., Oh, S., Park, K., Ko, M., ... & Oh, K. “Towards Designing a Mobile Social Learning Application with Meaningful Gamification Strategies”, IEEE Advanced Learning Technologies (ICALT 2015), Hualien, Taiwan (2015).',
	},
	{
		conferences:
			'Oh, S., Park, K., & So, H.-J. “From Crowdsourcing to Crowdlearning through a Pin-based Annotation System”, Computer Supported Collaborative Learning (CSCL 2015) workshop, Gothenburg, Sweden (2015).',
	},
	{
		conferences:
			'So, H.-J., Kwon, S., Oh, S., Park, K., & Kim, S. “Designing a Mobile Social Learning Application for Childrens Transformative Play”, ACM CHI 2015 workshop, Seoul, Korea (2015).',
	},
	{
		conferences:
			'Park, K., Goh, T., & So, H.-J. “Toward accessible mobile application design: developing mobile application accessibility guidelines for people with visual impairment”, ACM HCI Korea 2015, Seoul, Korea (2015) - Best paper award.',
	},
	{
		conferences:
			'So, H.-J., Yoon, H.-G., Choi, H.-S., Lee, H.-C. & Park, K. “Identifying User Perceptions Toward Integrating Mobile Applications in Science Education”, Computers in Education (ICCE 2014), Nara, Japan (2014).',
	},
	{
		conferences:
			'Park, K., Oh, S., Lee, H.-C., & So, H.-J. “Dynamic Feedback Mechanism for Maximizing Interaction in Online Social Network Services”, IEEE/ACM Advances in Social Networks Analysis and Mining (ASONAM 2014), Beijing, China (2014).',
	},
];

export const publication: Publication[] = [...journals, ...conferences];
