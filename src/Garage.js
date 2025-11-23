/*
하나의 파일 내에 여러가지 컴포넌트 선언 가능!
*/ 

function Car(props){
    return(
        <h1>I am a {props.brand}</h1>
    );
}

function Car2(props){
    return(
        <h1>I am a {props.brand.name}! ~~ {props.brand.model} </h1>
    );
}

// arrry.map 사용을 위한 함수 ---------------
function Car3(props){
    return(
        <li>I am a {props.brand} </li>
    );
}

// key 값을 주기 위한 거
function Car4(props){
    return(
        <li>I am a {props.brand} </li>
    );
}
// --------------------------------------

function Garage(props){
    let carName = "Ford!";
    let carInfo = {
        name: "Ford!!"
        ,model: "Mustang"
    };
    // array.map 사용 예제-----------------------------
    let temp_array = [1, 3, 6, 10];
    let temp_array2 = temp_array.map((x) => (x*2));

    console.log(JSON.stringify(temp_array2));


    let array_car = [
        {id: 1, name: "ford"}
        ,{id: 2, name: "honda"}
        ,{id: 3, name: "audi"}
        ,{id: 4, name: "m~"}
    ];
    /*
        let cars = ["ford", "honda", "audi", "m~"];
        {cars.map((each) => <Car3 brand={each} />)}
    */
    // ----------------------------------------------
    return(
        <div>
            Who lives in my garage?
            <Car brand="Ford"/>
            <Car brand={carName} />
            <Car2 brand={carInfo} />
            {array_car.map((x) => <Car4 key={x.id} brand = {x.name}/>)}
        </div>
    );
}

export default Garage;