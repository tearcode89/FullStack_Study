import {useRouter} from 'next/router'

export default function StaticRoutingPage() {

    const router = useRouter()

    const movingPage1 = () => {
        router.push('/section05/05-04-dynamic-routing-board-query-moved/1')
    }

    const movingPage2 = () => {
        router.push('/section05/05-04-dynamic-routing-board-query-moved/2')
    }

    const movingPage3 = () => {
        router.push('/section05/05-04-dynamic-routing-board-query-moved/3')
    }

    return(
        <>
            <button onClick={movingPage1}>1번 게시글로 이동하기</button>
            <button onClick={movingPage2}>2번 게시글로 이동하기</button>
            <button onClick={movingPage3}>3번 게시글글 이동하기</button>
        </>
    )
}