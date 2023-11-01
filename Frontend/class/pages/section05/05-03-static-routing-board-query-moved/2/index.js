import {gql, useQuery} from "@apollo/client";

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:19052){
            number
            writer
            title
        contents
    }
}
`
export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    return(
        <>
            <div>2번 게시글 이동이 완료됐어요!!😀😀</div>
            <div>작성자: {data && data.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data? data.fetchBoard?.contents : "로딩중입니다."}</div>
        </>
    )
}