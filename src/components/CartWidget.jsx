import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function CartWidget (){
    return(
    <>
        <h2 className="d-flex justify-content-around text-black-50"><FontAwesomeIcon icon={faCartShopping} className='mx-2' />2</h2>
        
    </>
)
}