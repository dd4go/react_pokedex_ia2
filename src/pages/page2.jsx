import { useParams } from 'react-router-dom';

function Page2(){

    const { param } = useParams();

    let productos = [
        { id: 1, nombre: "Monster" },
        { id: 2, nombre: "Redbull" },
        { id: 3, nombre: "Energety" },
    ];

    let currentObject = productos[param - 1];

    return (
        <>
            {typeof currentObject  != "undefined" ? 
                (
                    <>  
                        {currentObject.nombre}
                    </>
                )
            :
                (<p>No existe</p>)
            }   
        </>
    )

}

export default Page2