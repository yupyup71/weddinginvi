export function Secondtexts(props: {
    blah: string;
    nameus1: string;
    nameus2: string;
    nameus3: string;
    nameus4: string;
}){
    let {blah, nameus1, nameus2, nameus3, nameus4} = props;
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center",
        borderTop:"1.5px solid black", borderBottom:"1.5px solid black", width:"320px", padding: "70px"}}>
        <div style={{fontSize:"20px", fontStyle:"oblique", 
                textAlign:"center", lineHeight:"38px", wordBreak:"keep-all"}}>{blah}</div>
        <br/><br/>
        <div style={{display:"flex", alignItems:"baseline"}}>
            <div style={{fontSize:"20px", textAlign:"center", lineHeight:"38px", padding:"10px"}}>
                {nameus1}
                <br/>
                {nameus3}
            </div>
            <div style={{fontSize:"25px", fontWeight:"bold", textAlign:"center", lineHeight:"40px", padding:"10px"}}>
                {nameus2}
                <br/>
                {nameus4}
        </div>
        </div>

    </div>

}