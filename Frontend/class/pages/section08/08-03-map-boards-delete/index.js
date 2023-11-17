import {gql, useMutation, useQuery} from "@apollo/client";
import {Fragment} from "react";

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`


export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    const mystyles = {
        margin: '10px',
        color: 'red'
    }

    const onClickDelete = (event) => {
        Number(event.target.id)
        deleteBoard({
            variables:{number: Number(event.target.id)},
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return(
        <div>
            {/* 특별한 이유가 없으면? Fragment로 감싸자 !! <div>는 <div>요소를 한번 그려야 하기 떄문에 성능상 다소 손해를 볼 수 있다.*/}
            {data?.fetchBoards.map((el,index) => (
                // 1. 프레그먼트란 ? <></> , <Fragment></Fragment> 두개로 표현 가능하며 서로 같다.
                // 2. 프레그먼트에 key를 입력하는 방법 <Fragment key={el.number}></Fragment>
                <div key={el.number}>{/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게됨. 즉, 유일하지 않고 해당 index가 유지되니까 삭제되지 않은 걸로 판단되는 문제가 있다*/}
                    <span>
                        <input type="checkbox"/>
                    </span>
                    <span style={{margin: "10px"}}>{el.number}</span>
                    <span style={mystyles}>{el.title}</span>
                    <span style={mystyles}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
        </div>
    )
}