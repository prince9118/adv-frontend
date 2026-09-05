type NamePrint={
    name:string;
}

function NamePrint({name}:NamePrint){
    return(
        <div>
            <h1>Name of the Youtuber</h1>
            <h2>{name}</h2>
            
        </div>
    );
}

export default NamePrint