// 컴포넌트 위에 만든 이유: 컴포넌트가 리렌더링이 되어도 다시 안만들어짐 => 효율적이다.
const IVE = [
    { number: 1, title: "안유진"},
    { number: 2, title: "가을"},
    { number: 3, title: "레이"},
    { number: 4, title: "장원영"},
    { number: 5, title: "리즈"},
    { number: 6, title: "이서"},
]

export default function MapGirlGroupPage() {
    // 1. 가장 기본 예제
    const aaa = [<div>1 장원영</div>, <div>2 강해린</div>, <div>3 사쿠라</div>]

    // 2. 실무 백엔드 데이터 예제
    const bbb = IVE.map((el) => <div>{el.number}. {el.title}</div>)

    return (
        <>
            <div>{aaa}</div>
            ===============================================
            <div>{bbb}</div> {/* 이렇게 작성하면 bbb가 뭐인지 찾으러 위쪽으로 코드를 살펴봐야해서 비효율적이다.*/}
            ===============================================
            <div>
                {/*3. 실무 효율적인 예제 => map으로 뿌려주려는 코드를 바로 작성한다.*/}
                {IVE.map((el) => <div>{el.number}. {el.title}</div>)}
            </div>
        </>
    )
}