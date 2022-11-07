import PageTitle from '../../partials/page-titles/PageTitle';
import './play.css';

const Play = () => {
  return <PageTitle title='Play' />;
};

const PlayBody = () => {
  return (
    <div className='play-container'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img
              className='card-picture'
              src={process.env.PUBLIC_URL + '/images/jiu-jitsu.png'}
              alt='Headshot'
            />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Try project
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img
              className='card-picture'
              src={process.env.PUBLIC_URL + '/images/jiu-jitsu.png'}
              alt='Headshot'
            />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Try project
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img
              className='card-picture'
              src={process.env.PUBLIC_URL + '/images/jiu-jitsu.png'}
              alt='Headshot'
            />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Try project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Play, PlayBody };
