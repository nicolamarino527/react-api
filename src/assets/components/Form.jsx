import { useState } from 'react';
import PostList from './PostList';
import axios from 'axios';


export default function Form() {

    // inizzializziamo il contenuto di form data
    const initialFormData = {
        title: '',
        content: '',
        tags: '',
        image: '',
    }

    // costante per la gestione de input del form
    const [formData, setFormData] = useState(initialFormData);



    // creiamo la funzione aggiornare al cambiamento dei dati tramite imput
    const handleInputChange = (e) => {
        // settiamo un target al nome e valore all input del form
        const { name, value } = e.target

        // aggiorniamo lo stato dei dati del 
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // funzione per il submit del form
    const handleSubmit = (e) => {

        // impostiamo la chiamata
        axios.post('http://localhost:3000/posts', formData)
            .then(response => {
                axios.get('http://localhost:3000/posts')
                    // gestiamo la risposta
                    .then((res) => {
                        setPosts(res.data)
                    })


            })
            .catch(error => {
                setErrorMessage("Errore nella creazione del post.");
            })

    }



    return (
        <div className="form">
            <h1 className="new-post">Aggiungi un nuovo post</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Nome post</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Titolo del post"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="content" className="form-label">Contenuto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        name="content"
                        placeholder="Descrivi il post"
                        value={formData.content}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tags"
                        name="tags"
                        placeholder="Inserisci i tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="image" className="form-label">Immagine</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        placeholder="Inserisci immagine"
                        value={formData.image}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Invia</button>
                </div>
            </form>
        </div>
    )
}