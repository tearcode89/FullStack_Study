import {useState} from "react";

export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState('')
    function onChangeEmail(event) {
        console.log(event) // 나의 행동
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) // 작동된 태그에 입력된 값

        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }
    function onClickSignup(){
        console.log(email) // 진짜 포장이 잘 됐는지 확인해보기
        console.log(password) // 진짜 포장이 잘 됐는지 확인해보기

        // 1. 검증하기
        if(email.includes('@') === false){
            // alert('이메일이 올바르지 않습니다 @가 없네요')
            // document.getElementById('myerror').innerText = '이메일이 올바르지 않습니다. @가 입력되지 않았습니다!!' ==> 옛날방식
            setEmailError('이메일이 올바르지않습니다 @가 빠졌어요 !!')
        } else {
            // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 즉, API)

            // 3. 성공알림 보여주기
            alert('회원가입을 축하합니다!!')
        }
    }

    return(
        <>
            <div>
                이메일: <input id='qqq' type="text" onChange={onChangeEmail}/>
                {/*<div id='myerror'></div> ==> 옛날방식 */}
                <div>{emailError}</div>
                비밀번호: <input type="password" onChange={onChangePassword}/>
                <button onClick={onClickSignup}>회원가입</button>
            </div>
        </>
    )
}