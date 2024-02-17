export type Person = Professor | UndergraduateStudent | GraduateStudent;

interface Student {
	name: string;
	major: string;
	interest: string[];
}

interface GraduateStudent extends Student {
	course: 'master' | 'doctor'; // 석사 | 박사
}

interface UndergraduateStudent extends Student {}

interface Professor {
	name: string;
	position: string; // TODO: 공학박사 조교수 속성명을 좀 더 고민
	major: string[];
	email: string;
	tel: string;
	office: string;
}
