import UnderConstruction from '../../partials/page-fails/under-construction/UnderConstruction';
import './play.css';

const Play = () => {
  return (
    <div className='play-container'>
      <UnderConstruction />
      {/* <PageTitle title='Play' /> */}
    </div>
  );
};

const PlayBody = () => {
  return <div></div>;
};

export { Play, PlayBody };
