import PageTitle from '../../partials/page-titles/PageTitle';
import './about.css';

const About = () => {
  return <PageTitle title='About' />;
};

const AboutBody = () => {
  return (
    <div className='about-container'>
      <div className='row'>
        <div className='about-content col-sm-12 col-md-12 col-lg-8'>
          <div className='row'>
            <div className='col-12'>
              <p className='left-justification'>
                Hi there! My name is Bekzod “Bek” Tolipov and I am a Data
                Scientist based in Austin, Texas. I have a passion for learning
                and am experienced with working on projects across a variety of
                industries. From transportation to healthcare and everything in
                between, I have played a key role in developing projects and
                concepts into real world assets. Angular, Spring Boot,
                Salesforce, and AWS are just the tip of the iceberg when it
                comes to what I can do. I enjoy looking deep into data and
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
                <div className='col-sm-12'>
                  <h3 className='lets-connect'>Let's Connect</h3>
                </div>

                <div className='row center'>
                  <div className='col-sm-4 col-md-4 col-lg-4'>
                    {/* Email */}
                    <a
                      className='connect-btn'
                      href='mailto:btolipov211@outlook.com'
                    >
                      <i className='fa-solid fa-envelope fa-2x'></i>
                    </a>
                  </div>
                  <div className='col-sm-4 col-md-4 col-lg-4'>
                    {/* Github */}
                    <a
                      className='github-about-icon'
                      href='https://github.com/BekzodTolipov'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i
                        className='fa-brands fa-github fa-2x'
                        style={{ color: '#43C19F' }}
                      ></i>
                    </a>
                  </div>
                  <div className='col-sm-4 col-md-4 col-lg-4'>
                    {/* Linkedin */}

                    <a
                      className='linkedin-about-icon'
                      href='https://www.linkedin.com/in/bekzod-tolipov'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i
                        className='fa-brands fa-linkedin fa-2x'
                        style={{ color: '#43C19F' }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-content col-sm-12 col-md-12 col-lg-4'>
          <img
            className='headshot'
            src={process.env.PUBLIC_URL + '/images/headshot.jpg'}
            alt='Headshot'
          />
        </div>
      </div>
    </div>
  );
};

export { About, AboutBody };
