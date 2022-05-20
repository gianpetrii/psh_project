import React from 'react';
import 'bootstrap';
import DataTable from 'react-data-table-component';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';

const columnas = [
    {
        name: 'Hackathon', //texto de la columna
        selector: 'title',//debe machear al nombre de la propiedad
        sortable: true, // para sortear en base a esto
    },
    {
        name: 'First Place',
        selector: 'developers[0]',
        sortable: true,
    },
    {
        name: 'Second Place',
        selector: 'developers[1]',
        sortable: true,
    },
    {
        name: 'Third Place',
        selector: 'developers[2]',
        sortable: true,
    },
]

const paginacionOpciones = {    // para la paginacion en español
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}



const TopDevelopers = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/hacklist")
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);     //la lista vacia es para que solo haga la accion una vez

    
    const customStyles = {
        table: {
            style: {
                backgroundColor: "#EDE6DB",
            },
        },
    };

    const { isAuthenticated } = useAuth0(); //usaria esto para determinar si esta loggeado
    // muestro la info de hacklist mientras que de no estarlo se pide que se loggee para ver info
    


    return ( 
        <>
            {/*{isAuthenticated ? (
                ACA IRIA TODO LO QUE ESTA DENTRO DEL MAIN
            ) : (
                ACA IRIA UN TEXTO DICIENDO QUE DEBES LOGGEARTE PARA PODER VISUALIZAR INFO
            )} */}
            <main className='table-responsive'>
                <DataTable
                customStyles={customStyles}
                columns={columnas}
                data={posts}
                title="Top Developers Ranking"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight='600px'
                />
            </main>
        </>
    );
}


export default TopDevelopers;

