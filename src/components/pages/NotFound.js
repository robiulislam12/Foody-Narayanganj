import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Img from '../../assets/free.svg';

export default function NotFound() {
    const history= useHistory();

    const backToHome = () =>{
        history.push('/')
    }
    const back = () =>{
        history.goBack()
    }
    return (
        <div className='py-5 not-found'>
         <div>
             <h2>কই যাবেন ভাই 🙂</h2>
             <img className="w-75" src={Img} alt="Not Found Img" />
             <h2>Page তো নাই 🙂</h2>
         </div>
        <div className='pt-3'>
        <Button onClick={backToHome} variant="danger">Back to Home</Button> 
        
        <Button className="ms-2 " onClick={back} variant="success">Go Back</Button> 
        </div>
        </div>
    )
}