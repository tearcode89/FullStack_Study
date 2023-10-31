import {gql, useMutation} from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ # 변수의 타입을 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput){       # 실제 우리가 전달할 변수를 적는 곳
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "아이쇼스피드",
                createProductInput:{
                    name: "유니폼",
                    detail: "호날두유니폼",
                    price: 99000
                }
            }
        })
        console.log(result)
    }


    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> // 한줄일 때는 괄호 ( ) 가 필요없다.
}