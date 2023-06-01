import PageTitle from '../../partials/page-titles/PageTitle';
import './about.css';

const About = () => {
  return <PageTitle title='About' />;
};

const AboutBody = () => {
  const skillsList = [
    { skill: 'Python', icon: 'fab fa-python' },
    { skill: 'SQL', icon: 'fas fa-database' },
    { skill: 'Java', icon: 'fab fa-java' },
    { skill: 'NumPy', icon: 'fab fa-python' },
    { skill: 'Pandas', icon: 'fab fa-python' },
    { skill: 'React', icon: 'fab fa-react' },
    { skill: 'Node.js', icon: 'fab fa-node-js' },
    { skill: 'AWS', icon: 'fab fa-aws' },
    { skill: 'GIT', icon: 'fab fa-git' },
    { skill: 'Scikit-Learn', icon: 'fas fa-brain' },
    { skill: 'TensorFlow', icon: 'fab fa-tensorflow' },
    { skill: 'PySpark', icon: 'fab fa-python' },
  ];

  const certifications = [
    {
      organization: 'TensorFlow',
      title: 'TensorFlow Developer Certificate',
      date: 'May 2023',
      link: '/certifications/tensorflow-certificate.jpg',
    },
    {
      organization: 'General Assembly',
      title: 'Data Science Immersive',
      date: 'March 2023',
      link: '/certifications/certificate-of-completion-ga.jpg',
    },
    {
      organization: 'HackerRank',
      title: 'SQL (Advanced)',
      date: 'March 2023',
      link: '/certifications/sql_advanced certificate.jpg',
    },
  ];

  const social_media = [
    {
      link: 'mailto:btolipov211@outlook.com',
      icon: 'fa-solid fa-envelope fa-2x',
      className: 'connect-btn',
    },
    {
      link: 'https://github.com/BekzodTolipov',
      icon: 'fa-brands fa-github fa-2x',
      className: 'github-about-icon',
      color: '#43C19F',
    },
    {
      link: 'https://www.linkedin.com/in/bekzod-tolipov',
      icon: 'fa-brands fa-linkedin fa-2x',
      className: 'linkedin-about-icon',
      color: '#43C19F',
    },
  ];

  return (
    <div className='about-container'>
      <section className='into'>
        <div className='row'>
          <div className='about-content col-sm-12 col-md-12 col-lg-8'>
            <div className='row'>
              <div className='col-12'>
                <p className='left-justification'>
                  Hi there! My name is Bekzod “Bek” Tolipov and I am a Data
                  Scientist based in Austin, Texas. I have a passion for
                  learning and am experienced with working on projects across a
                  variety of industries. From transportation to healthcare and
                  everything in between, I have played a key role in developing
                  projects and concepts into real world assets. Angular, Spring
                  Boot, Salesforce, and AWS are just the tip of the iceberg when
                  it comes to what I can do. I enjoy looking deep into data and
                  analyze the story it tells using python. I am excited to start
                  my career in data science and be part of an innovative team to
                  share my skills and knowledge to keep improving the industry.
                </p>

                <a
                  className='resume-link'
                  href={
                    process.env.PUBLIC_URL +
                    '/files/Bekzod_Tolipov_Resume_2023.pdf'
                  }
                  download='Bekzod_Tolipov_Resume_2023.pdf'
                >
                  <i className='fa-solid fa-file-arrow-down file-about-icon'></i>
                  Click here to see my full resume.
                </a>
              </div>
              <div className='about-content col-sm-12'>
                <div className='row'>
                  <section id='skills-content'>
                    <div className='col-sm-12'>
                      <h3 className='skills-header'>Skills</h3>
                    </div>
                    <div className='row'>
                      {skillsList.map((item, index) => (
                        <div className='col-md-4' key={index}>
                          <div className='icon-container'>
                            {item.skill === 'TensorFlow' ? (
                              <img
                                className='tensorflow-icon'
                                src='/images/teslorflow-icon.png'
                                alt='TensorFlow'
                              />
                            ) : (
                              <i className={item.icon}></i>
                            )}
                            <p>{item.skill}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section id='certification-content'>
                    <div className='col-sm-12'>
                      <h3 className='certification-header'>Certifications</h3>
                    </div>
                    <div className='row'>
                      {certifications.map((certification, index) => (
                        <div className='col-md-12 col-lg-6' key={index}>
                          <div className='certification-container'>
                            <div className='certificate-title-sections'>
                              <p>{certification.title}</p>
                              <p>{certification.organization}</p>
                              <p>{certification.date}</p>
                            </div>
                            <img
                              className='img-fluid'
                              src={certification.link}
                              alt='Tensorflow certification'
                              loading='lazy'
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section id='lets-connect-content'>
                    <div className='col-sm-12'>
                      <h3 className='lets-connect'>Let's Connect</h3>
                    </div>

                    <div className='row center'>
                      {social_media.map((icon, index) => (
                        <div className='col-sm-4 col-md-4 col-lg-4' key={index}>
                          <a
                            className={icon.className}
                            href={icon.link}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <i
                              className={icon.icon}
                              style={{ color: icon.color }}
                            ></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className='about-content col-sm-12 col-md-12 col-lg-4'>
            <img
              className='img-fluid headshot'
              src={process.env.PUBLIC_URL + '/images/headshot.jpg'}
              alt='Headshot'
              loading='lazy'
            />
          </div>
        </div>
      </section>

      {/* <section className='projects-intro-container'>
        <h3 className='projects-intro'>Projects Intro</h3>
      </section> */}
    </div>
  );
};

export { About, AboutBody };
