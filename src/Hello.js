/*
함수형 컴포넌트 선언해보기
변수를 통해서 함수형 컴포넌트 선언
Arrow function 사용

function Hello(props){
  return(
    <h1>Hello!!! {props.title}!</h1>
  );
}

const Hello = function Hello(props){
  return(
    <h1>Hello!!! {props.title}!</h1>
  );
}
*/

const Hello = (props) =>{
  return(
    <h1>Hello!!! {props.title}!</h1>
  );
}

export default Hello;