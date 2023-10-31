import {gql, useMutation} from "@apollo/client";

const 나의그래프큐엘세팅 = gql`
    mutation {
        createBoard(writer:"호날두",title:"자 다같이 외쳐~!!",contents:"Siuuuu~~"){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage() {

    const [나의함수] = useMutation(나의그래프큐엘세팅)

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }


    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> // 한줄일 때는 괄호 ( ) 가 필요없다.
}