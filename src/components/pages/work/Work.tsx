import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../helper/connection/user-api-calls';
import { getStorageValue, setToStorage } from '../../helper/LocalStorage';
import PageTitle from '../../partials/page-titles/PageTitle';
import './work.css';

const Work = () => {
  return <PageTitle title='Experience' />;
};

const WorkBody = () => {
  const [data, setData] = useState(() => {
    return getStorageValue('projects', {
      projects: [],
      education: [],
      isFetched: false,
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataStorage = getStorageValue('projects', null);

      if (dataStorage === null) {
        const projects = await axios.get(baseUrl + 'projects');
        const education = await axios.get(baseUrl + 'educations');

        setToStorage(
          'projects',
          JSON.stringify({
            projects: projects.data,
            education: education.data,
            isFetched: true,
          })
        );

        setData({
          projects: projects.data,
          education: education.data,
          isFetched: true,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className='work-container'>
      {data.projects.length > 0 ? (
        <table className='table'>
          <tbody>
            {data.projects.map((project: any) => {
              return (
                <tr key={project._id} className='project-row'>
                  <td className='project-section'>
                    <h3 className='project-section-title'>
                      <a
                        className='project-link'
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {project.title}
                        <i className='fa-solid fa-up-right-from-square'></i>
                      </a>
                    </h3>
                    <ul className='project-list'>
                      {project.content.map(
                        (bodyContent: string, index: number) => {
                          return (
                            <li
                              key={project._id + index}
                              className='project-list-content'
                            >
                              {bodyContent}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className='loader-container'>
          <h1>Please Wait, backend server is very slow, thank you!</h1>
          <div className='spinner'></div>
        </div>
      )}
    </div>
  );
};

export { Work, WorkBody };
