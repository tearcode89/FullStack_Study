import {gql, useMutation} from "@apollo/client";
import {useRouter} from "next/router";

const 나의그래프큐엘세팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage() {

    const router = useRouter()

    const [나의함수] = useMutation(나의그래프큐엘세팅)

    const onClickSubmit = async () => {

        try{
            // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨.

            const result = await 나의함수({
                variables: {
                    writer: "호날두",
                    title: "모두다 외쳐",
                    contents: "Siuuuu~~~~~~"
                }
            })
            //console.log("result 값은 다음과 같습니다", result)
            //console.log("동적라우팅 주소는 number라고 지칭했고 다음과 같아요", result.data.createBoard.number)
            // router.push('/section05/05-05-dynamic-routing-board-mutation-moved' + result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)

        }catch (error){
            alert(error.message)
        }
    }
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> // 한줄일 때는 괄호 ( ) 가 필요없다.
}