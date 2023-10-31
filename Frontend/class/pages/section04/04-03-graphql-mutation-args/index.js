import {gql, useMutation} from "@apollo/client";

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

    const [나의함수] = useMutation(나의그래프큐엘세팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: "호날두",
                title: "모두다 외쳐",
                contents: "Siuuuu~~~~~~"
            }
        })
        console.log(result)
    }


    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> // 한줄일 때는 괄호 ( ) 가 필요없다.
}