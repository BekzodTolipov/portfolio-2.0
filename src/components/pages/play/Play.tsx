import DataScienceProjects from '../../helper/connection/data_temp/data_science_projects';
import CustomCard from '../../partials/card/CustomCard';
import PageTitle from '../../partials/page-titles/PageTitle';
import './play.css';
const Play = () => {
  return <PageTitle title='Projects' />;
};

const PlayBody = () => {
  let listOfDataScienceProjects = DataScienceProjects();

  return (
    <div className='play-container'>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3'>
        {listOfDataScienceProjects.map((card, index) => {
          return <CustomCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
};

export { Play, PlayBody };
