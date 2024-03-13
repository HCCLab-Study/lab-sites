import Section1 from './_components/section1';
import Section2 from './_components/section2';
import Section3 from './_components/section3';

export default function ProjectsPage() {

	// 여기서 쿼리클라이언트 사용하여 Section1, 2, 3에서 사용할 쿼리키를 설정할 수 있음
	// 쿼리키와 그에 맞는 메서드(어떤 데이터를 사용할 지)를 여기서 설정주면 됨
	// useQuery 이용하여 쿼리키별로 어떤 내용을 담을지 어떤 api를 받아올지 키를 설정해주는거..
	// 그럼 이제 Section1, 2, 3에서는 키만 입력해서 원하는 데이터를 받아올 수 있는거임

	return (
		<main className='mt-14'>
			<Section1 />
			<Section2 />
			<Section3 />
		</main>
	);
}
