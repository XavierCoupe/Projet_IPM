import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Auth from '../sharedComponent/Auth';

function Connection(){
    const navigate = useNavigate();

    const handleConnect = () => {
        localStorage.setItem('isConnected', 'true');
        navigate('/');
    }

    if(Auth()){
        navigate('/');
    }

    return (
        <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        <button onClick={handleConnect}>click to switch page</button>
        </>
    )
}

export default Connection;