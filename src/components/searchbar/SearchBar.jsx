
import style from './SearchBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchBar = (props) => {

    //const [search, setSearch] = useState([])
    const [inputValue , setInputValue] = useState('')
    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS


    const params = useParams()
    const nav = useNavigate()

    console.log(params)

    const onSearch = (props) => {

        const fetchData = async () => {

            const response = await fetch(`${BACKEND}article/search`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputValue)

        })

            if(response.status === 200){
                const data = await response.json()
                
                console.log(data)
                setInputValue('')
                props.setArticle(data)

            }
            nav('/market')
        }

        fetchData()
    }

    return (
        <section className={style.inputField}>

            <div className={style.searhField}> 
                <input type="search" onChange={(e) => setInputValue(e.target.value)} placeholder='Suche nach Produkt, Kategorie...'/>
                <button type="submit" onClick={() => onSearch(inputValue)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>

            </section>
    )
}

export default SearchBar