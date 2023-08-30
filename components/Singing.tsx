import { useState } from "react"

const Singing = () => {
    const [color1,setColor1]=useState<string>("black")
    const [color2,setColor2]=useState<string>("black")
    const [color3,setColor3]=useState<string>("black")
    const [color4,setColor4]=useState<string>("black")
    const [color5,setColor5]=useState<string>("black")
    const [color6,setColor6]=useState<string>("black")
    const [color7,setColor7]=useState<string>("black")
    const [color8,setColor8]=useState<string>("black")
    const [color9,setColor9]=useState<string>("black")
   



    const one = () =>{

        setColor1("aqua")

        setTimeout(() => {
            setColor1("black");
        }, 500)
        const audio = new Audio('/one.mp3');
        audio.play();
        
    }

    const two = () =>{

        setColor2("aqua")

        setTimeout(() => {
            setColor2("black");
        }, 500)
        const audio = new Audio('/two.mp3');
        audio.play();
        
    }
    const three = () =>{

        setColor3("aqua")

        setTimeout(() => {
            setColor3("black");
        }, 500)
        const audio = new Audio('/three.mp3');
        audio.play();  

    }
    const four = () =>{

        setColor4("megenta")

        setTimeout(() => {
            setColor4("black");
        }, 500)
        const audio = new Audio('/four.mp3');
        audio.play();  

    }
    const five = () =>{

        setColor5("megenta")

        setTimeout(() => {
            setColor5("black");
        }, 500)
        const audio = new Audio('/five.mp3');
        audio.play();  

    }
    const six = () =>{

        setColor6("megenta")

        setTimeout(() => {
            setColor6("black");
        }, 500)
        const audio = new Audio('/six.mp3');
        audio.play();  

    }
    const seven = () =>{

        setColor7("magenta")

        setTimeout(() => {
            setColor7("black");
        }, 500)
        const audio = new Audio('/seven.mp3');
        audio.play();  

    }
    const eight = () =>{

        setColor8("white")

        setTimeout(() => {
            setColor8("black");
        }, 500)
        const audio = new Audio('/eight.mp3');
        audio.play();  

    }
    const nine  = () =>{

        setColor9("white")

        setTimeout(() => {
            setColor9("black");
        }, 500)
        const audio = new Audio('/nine.mp3');
        audio.play();  

    }
    

    return (
        <div className="background">
            <h4 className="text-center head pt-5">Beat The Button</h4>
            <div className="d-flex justify-content-center pt-4">
                <div className="card" style={{ width: "35rem",backgroundColor:"black" }}>


                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid aqua",backgroundColor:color1}}><h2 style={{padding:"28px 36px ",color:"white"}} onClick={one}>A</h2></button>
                   
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid aqua",backgroundColor:color2}}><h2 style={{padding:"28px 39px ",color:"white"}} onClick={two}>S</h2></button>
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid aqua",backgroundColor:color3}}><h2 style={{padding:"28px 36px ",color:"white"}} onClick={three}>D</h2></button>
                            </div>

                        </div> 
                        <div className="row">
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 0, 255)",backgroundColor:color4}}><h2 style={{padding:"28px 38px ",color:"white"}} onClick={four}>F</h2></button>
                   
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 0, 255)",backgroundColor:color5}}><h2 style={{padding:"28px 36px ",color:"white"}} onClick={five}>G</h2></button>
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 0, 255)",backgroundColor:color6}}><h2 style={{padding:"28px 36px ",color:"white"}} onClick={six}>H</h2></button>
                            </div>

                        </div> 
                        <div className="row">
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 0, 255)",backgroundColor:color7}}><h2 style={{padding:"28px 38px ",color:"white"}} onClick={seven}>J</h2></button>
                   
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 255, 255)",backgroundColor:color8}}><h2 style={{padding:"28px 36px ",color:"white"}} onClick={eight}>K</h2></button>
                            </div>
                            <div className="col-lg-4">
                            <button type="button" className="btn mt-3" style={{border:"5px solid rgb(255, 255, 255)",backgroundColor:color9}}><h2 style={{padding:"28px 40px ",color:"white"}} onClick={nine}>L</h2></button>
                            </div>

                        </div> 

                    </div>
                    
                </div>
                
                

            </div>
            


        </div>
    )
}
export default Singing