export function Coverphoto(props: {
    coverPhoto: string; 
}){
    let {coverPhoto} = props;

    return <div style={{padding: "20px 0px 10px"}} >
         <img src={coverPhoto} style={{border:"0.5px solid grey", width:"400px"}}></img>
    </div>
}