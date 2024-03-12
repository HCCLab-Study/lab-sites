import { GraduateStudent, Person, Professor } from '../model/person.type';
import { UndergraduateStudent } from '../model/person.type';

const professor: Professor = {
	name: '박규동',
	position: '공학박사 조교수',
	major: ['인공지능융합대학 정보융합학부', '일반대학원 인공지능응용학과'],
	email: 'kdpark@kw.ac.kr',
	tel: '02-940-5638',
	office: '새빛관 804호',
	lab: '새빛관 808호',
};

const graduateStudents: GraduateStudent[] = [
	{
		name: '곽소정',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Full',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '김주현',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Full',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '김호준',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Full',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '심현',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Full',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '황규민',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Full',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '박교형',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Part',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '강민조',
		course: 'master',
		major: '인공지능응용학과',
		time: 'Part',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
];

const undergraduateStudent: UndergraduateStudent[] = [
	{
		name: '민희원',
		course: 'researcher',
		major: '인공지능응용학과',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
	{
		name: '부형진',
		course: 'researcher',
		major: '인공지능응용학과',
		interest: ['UX/CX', '기획', 'DataAnalytics'],
	},
];

export const people: Person[] = [professor, ...graduateStudents, ...undergraduateStudent];
