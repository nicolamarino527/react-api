import { useEffect, useState } from "react"
import axios from "axios"

export default function PostList() {
    // inizzializziamo i dati dei post iniziali come array vuoto
    const initialPostData = [];

    // settiamo l use state per la gestio ne dei post 
    const [posts, setPosts] = useState(initialPostData);

    // settiamo lo usestate per la gestione de dati di axios


    // gestiamo la ciamata api
    function fetchPosts() {
        // impostiamo la rotta da dove prendiamo i dati relativi ai posts
        axios.get('http://localhost:3000/posts')
            // gestiamo la risposta
            .then((res) => {
                console.log(res.data)
                setPosts(res.data)
            })
            // gestiamo l errore della chiamata
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            })

    }

    useEffect(fetchPosts, [])

    return (
        <div>

        </div>
    )
}