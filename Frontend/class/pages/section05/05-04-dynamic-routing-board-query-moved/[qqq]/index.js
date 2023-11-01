import {gql, useQuery} from "@apollo/client";
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){ # 1번 게시글 내용에 생략된 내용이 많아서 19047을 1번 게시글로 가정
            number
            writer
            title
        contents
    }
}
`
export default function StaticRoutingMovedPage(){

    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qqq)
        }
    })

    console.log(data)

    return(
        <>
            <div>{router.query.qqq}번 게시글 이동이 완료됐어요!!😀😀</div>
            <div>작성자: {data && data.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data? data.fetchBoard?.contents : "로딩중입니다."}</div>
        </>
    )
}