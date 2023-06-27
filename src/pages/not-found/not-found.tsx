import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="wrap-notfound">
      <div className="container" style={{fontSize: '30px', textAlign: 'center'}}>
        <div className="rows">
          <h1 className="">404</h1>
          <h5 className="">Oops!</h5>
          <p className="mb-4">We are sorry, but the page you requested was not found</p>
              Go to the <Link to="/"><span style={{color: '#525288', fontWeight: 'bold'}}>Main page </span> </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

