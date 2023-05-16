export function Weddingdate(props: {
    yearDate: string;
    monthDate: string;
    dayDate: string;
}){
    let {yearDate, monthDate, dayDate} = props;

    return <div style={{display: "flex", justifyContent:"flex-start", padding: "0px 10px",
                        borderLeft: "1px solid black", fontSize:"30px"}}>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <div>{yearDate}</div>
            <div>{monthDate}</div>
            <div>{dayDate}</div>
        </div>
    </div>
}