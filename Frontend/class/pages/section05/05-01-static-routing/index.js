import {useRouter} from 'next/router'

export default function StaticRoutingPage() {

    const router = useRouter()

    const movingPage = () => {
        router.push('/section05/05-01-static-routing-moved/')
    }

    return <button onClick={movingPage}>페이지 이동하기</button>
}