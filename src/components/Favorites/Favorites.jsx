import { useEffect, useState } from "react";

import Phones from "../Phones/Phones";
// import ErrorPage from "../ErrorPage/ErrorPage";




const Favorites = () => {
    const [favorite, setFavorite] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(true)
    const [showError, setShowError] = useState(false)

    const handleDelete = () => {
        localStorage.clear('phones')
        setFavorite([])
        setDeleteBtn(!deleteBtn)
        setShowError(true)
          
    }

    useEffect(() => {
        const storedPhone = JSON.parse(localStorage.getItem('phones'))
        setFavorite(storedPhone)
    }, [])
    // const errorElement = <ErrorPage></ErrorPage>
    return (
        <div className="flex justify-center items-center flex-col">
            {showError ? errorElement : null}
            <button onClick={handleDelete} className={deleteBtn ? `btn btn-outline btn-success mt-12` : `hidden`}>Delete All</button>
            <div className="max-w-screen-md mx-auto grid grid-cols-2 gap-10 mt-12">
                {
                    showAll ? favorite.map(phone => <Phones key={phone.id} phone={phone}></Phones>)
                        : favorite.slice(0, 4).map(phone => <Phones key={phone.id} phone={phone}></Phones>)
                }
            </div>

            {favorite.length > 4 && <button onClick={()=> setShowAll(!showAll)} className="btn btn-success font-bold text-white mt-5 mb-12">{showAll ? 'See Less' : 'Show All'}</button>}

        </div>
    );
};


export default Favorites;