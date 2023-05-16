export function Weddingdate(props: {
    yearDate: string;
    monthDate: string;
    dayDate: string;
}){
    let {yearDate, monthDate, dayDate} = props;

    return <div style={{display: "flex", justifyContent:"flex-start",
                        borderLeft: "1px solid black", fontSize:"25px", width:"400px"}}>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", padding:"0px 10px"}}>
            <div>{yearDate}</div>
            <div>{monthDate}</div>
            <div>{dayDate}</div>
        </div>
    </div>
}