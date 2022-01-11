import { useEffect } from 'react'

import FavoriteProd from '../components/FavoriteProd/FavoriteProd'

function Favorite() {
    useEffect(() => {
        window.scroll(0, 0)
      }, [])
    return <FavoriteProd />
}

export default Favorite
