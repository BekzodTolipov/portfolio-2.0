import { useState } from 'react';
import './custom-card.css';
export type CardDetails = {
  cardPhoto: string;
  cardClassName: string;
  cardBodyClassName: string;
  cardTitleClassName: string;
  cardTitle: string;
  cardTextClassName: string;
  cardText: string;
  cardButtonText: string;
  cardButtonHref: string;
  cardButtonClass: string;
  cardGithubButtonHref: string;
  cardGithubButtonClass: string;
  cardGithubButtonText: string;
};

export default function CustomCard(props: CardDetails) {
  const [isEllipses, setEllipses] = useState(true);

  return (
    <div className={props.cardClassName}>
      <div className='col mb-4'>
        <div
          className={
            isEllipses
              ? 'card text-white mb-3'
              : 'card text-white mb-3 card-box-shadow'
          }
        >
          <img
            className='card-image'
            src={process.env.PUBLIC_URL + props.cardPhoto}
            alt='Card Details'
          />
          <h5 className={props.cardTitleClassName}>{props.cardTitle}</h5>
          <div className='card-body'>
            <p
              className={
                isEllipses
                  ? props.cardTextClassName +
                    ' collapse-text' +
                    ' text-height-in'
                  : props.cardTextClassName + ' text-height-out'
              }
            >
              {props.cardText}
            </p>
            {/* ​Read More logic */}
            {isEllipses ? (
              <p className='read-more' onClick={() => setEllipses(!isEllipses)}>
                Read More
                <span className='one'>.</span>
                <span className='two'>.</span>
                <span className='three'>.</span>
              </p>
            ) : (
              <p className='read-more' onClick={() => setEllipses(!isEllipses)}>
                Show Less
              </p>
            )}
            <div className='card-action-buttons'>
              <a
                href={props.cardGithubButtonHref}
                className='custom-project-btn'
              >
                {props.cardGithubButtonText}
              </a>
              {props.cardButtonHref.length > 0 && (
                <a
                  onClick={() => {
                    return false;
                  }}
                  href={props.cardButtonHref}
                  className={props.cardButtonClass}
                >
                  {props.cardButtonText}
                  {props.cardButtonHref.length === 1 ? (
                    <div className='hide'>Project simulation coming soon</div>
                  ) : (
                    ''
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
