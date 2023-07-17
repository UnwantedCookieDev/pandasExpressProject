import {Card} from 'react-bootstrap'

function SingleProduct(props){
    return(<div>
        {props.customers.slice(0,7).map(
    (customer, index) => {
        return <Card key={index} >
            <Card.Img variant='top' src={customer.img} alt={customer.name}></Card.Img>

            
            </Card>
    }
)}
        
    </div>)
}

// {props.customers.slice(0,7).map(
//     (customer, index) => {
//         return <li key={index} >
//             {customer.id} - {customer.first_name} - {customer.last_name}</li>
//     }
// )}
export default SingleProduct;