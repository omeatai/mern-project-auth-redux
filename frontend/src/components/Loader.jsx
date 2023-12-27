import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner
            animation='border'
            variant="success"
            // size="sm"
            role='status'
            style={ {
                width: '50px',
                height: '50px',
                margin: 'auto',
                display: 'block',
            } }
        ></Spinner>
    );
};

export default Loader;