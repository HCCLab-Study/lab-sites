export type Person = Professor | UndergraduateStudent | GraduateStudent;

interface Student {
	name: string;
	major: string;
	interest: string[];
}

export interface GraduateStudent extends Student {
	course: 'master' | 'doctor'; // 석사 | 박사
	time: 'Full' | 'Part';
}

export interface UndergraduateStudent extends Student {
	course: 'researcher' | 'intern'; // 연구생 | 인턴
}

export interface Professor {
	name: string;
	position: string; // TODO: 공학박사 조교수 속성명을 좀 더 고민
	major: string[];
	email: string;
	tel: string;
	office: string;
	lab: string;
}
