import {useMutation} from "@apollo/client";
import {useState} from "react";
import {나의그래프큐엘세팅} from "./BoardWrite.queries"; // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; // export default로 한개만 가져오기
// import asdfljlkenvllle from "./BoardWrite.presenter"; // export default로 이름 변경해서 가져요기
// import asdfljlkenvllle, {나의그래프큐엘세} from "./BoardWrite.presenter"; // export default와 export로 되어있는 것들을 한번에 가져오기
// import * as QQQ from './BoardWrite.styles' // export를 한방에 다 가져오기
// QQQ.BlueButton
// QQQ.RedInput

export default function BoardWrite() {

    const [isActive, setIsActive] = useState(false)

    const [나의함수] = useMutation(나의그래프큐엘세팅)

    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value && title && contents){
            setIsActive(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value && event.target.value && contents){
            setIsActive(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer && title && event.target.value){
            setIsActive(true)
        }
    }

    return(
        <>
            <div>%%%%%%%%%%%%여기는 컨테이너 입니다%%%%%%%%%%%%%%%</div>
                <BoardWriteUI
                    onClickSubmit={onClickSubmit}
                    onChangeWriter={onChangeWriter}
                    onChangeTitle={onChangeTitle}
                    onChangeContents={onChangeContents}
                    isActive={isActive}
                />
            <div>%%%%%%%%%%%%여기는 컨테이너 입니다%%%%%%%%%%%%%%%</div>
        </>
    )
}