import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import { useAuth0 } from '@auth0/auth0-react';


const HackList = () => {
    const [active, setActive] = useState(0);

    const handleMoreInfo = (id) => {
        if (active == id) {
            setActive(0);
            console.log("puse active igual a 0");
        } else {
            setActive(id);
            console.log("puse active igual a el post id");
        }
    };



    const [posts, setPosts] = useState([]);     //cuantos posts esoty manejando
    
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



    const [visible, setVisible] = useState(5);  // cuantos posts estan en display
    
    const showMorePosts = () => {
        setVisible((prevValue) => prevValue + 5);
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
            <main className='HackList'>
                <h3 className='title'>All Hackathons</h3>
                <div className='accordion'>
                        <div className='contentBox'>
                            {posts.slice(0,visible).map(post => (
                            <div key={post.id}>
                                <div className='label'>
                                    <div className='intro'>
                                        <div className='hackTitle'>{post.title}</div>
                                        <h5 className='hackDate'>Fecha: {post.date}</h5> 
                                        <h5 className='hackPlace'>Ubicacion: {post.place}</h5>
                                    </div>
                                    <button onClick={() => handleMoreInfo(`${post.id}`)} className='moreInfoBtn'>MORE INFO</button>
                                </div>

                                {active === `${post.id}` && (
                                    <ul className='content'>
                                        {post.development.map(development => <li>{development}</li>)}
                                    </ul>
                                )}
                            </div>
                            ))}
                            
                        </div>
                        <button onClick={showMorePosts} className='loadMoreBtn'>Load More Hackathons</button>
                </div>
            </main>
        </>
    );
    
};

 
export default HackList;
