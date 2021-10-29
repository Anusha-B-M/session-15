const Title=({ title}) => <h1>{title}</h1>;

const GearBox = ({gearBox }) => <p>{gearBox}</p>;

const Car = ({ engine, gearBox,type}) => (
    <div>
        <Title title={'Welcome to ${engine}'} />
        <GearBox gearBox={gearBox} />
    </div>
);

export default function App() {
const Car = {
    engine: "TwinAir",
    gearBox: "AMT",
    type:"Sedan",
    spareWheel:"estepe",
    seatingCapacity:6,
    bhp:1479,
    torque  :300,

};



return (
    <div>
        <Car engine = {car.engine} gearBox={car.gearBox} type={car.type} spareWheel={car.spareWheel} seatingCapacity={car.seatingCapacity} bhp={car.bhp} torque={car.torque}/>
    </div>
);

return (
    <div>
       < Car {...car}/>
    </div>
);
}

const Car = ({engine, ...other}) => (
    <div>
       <Title title={'Welcome to ${engine}'} />
       <GearBox {...other} />
    </div>
);

const Car = ({ engine, gearBox}) => {
    engine = engine || "Introduction" ;
    return(
        <div>
        <Title title={'Welcome to ${engine}'} />
        <GearBox gearBox={gearBox} />  
        </div>
    )
}

const Car = ({ seatingCapacity, spareWheel}) => {
    seatingCapacity = seatingCapacity || "IgnoredProperties" ;
    return(
        <div>
        <Title title={'Welcome to ${seatingCapacity}'} />
        <SpareWheel spareWheel={spareWheel} />  
        </div>
    )
}