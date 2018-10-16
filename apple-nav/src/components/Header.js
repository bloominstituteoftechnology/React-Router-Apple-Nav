import React from 'react'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(faApple, faSearch, faShoppingBag)

const Header = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faApple} />
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faShoppingBag} />
        </div>
    )
}

export default Header
