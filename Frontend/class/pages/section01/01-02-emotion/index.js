import {MyEmail, MyEmailInput} from '../../../styles/01-02-emotion'

export default function EmotionPage() {

    return (
        <div>
            <MyEmail>이메일: </MyEmail>
            <MyEmailInput type="text"/>
            <MyEmailInput type="text"/>
            <MyEmailInput type="text"/>
            <MyEmailInput type="text"/>
            <MyEmailInput type="text"/>
            <button>클릭하세요!!</button>
            <br/>
            <img src="/별이3.jpeg" width="300" alt="cat's Image"/>
        </div>
    )
}