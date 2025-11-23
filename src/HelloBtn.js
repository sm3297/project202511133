function HelloBtn(){
    const message = () =>{
        alert("안녕!")
    };

    return(
        <>
        <button onClick={message}>click</button>
        </>
    );
}

export default HelloBtn;