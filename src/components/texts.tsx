export function Texts(props: {
    textyouWant: string;
    weddingtime: string;
    place: string;
}){
    let {textyouWant, weddingtime, place} = props;
    return <div style={{display: "flex", flexDirection:"column", alignItems:"end",
            width:"400px"}}>
            <div style={{fontSize:"30px", letterSpacing:"10px", marginRight:"-10px", paddingBottom:"5px"}}>{textyouWant}</div>
            <div style={{fontSize:"25px"}}>{weddingtime}</div>
            <div style={{fontSize:"25px"}}>{place}</div>
        </div>
}