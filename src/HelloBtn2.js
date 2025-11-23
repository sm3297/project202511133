function HelloBtn2(){
    const message = (name, event) =>{
        alert("안녕: " + name +"//" + event.target.id + "//" + name +"!");
    };

    return(
        <>
        <button id = "btn_2" onClick={(e) => {message("123", e)}}>click</button>
        </>
    );
}

export default HelloBtn2;