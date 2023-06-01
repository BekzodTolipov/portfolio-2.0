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

interface CustomCardProps {
  card: CardDetails;
}

export default function CustomCard(props: CustomCardProps) {
  const [isEllipses, setEllipses] = useState(true);

  return (
    <div className={props.card.cardClassName}>
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
            src={process.env.PUBLIC_URL + props.card.cardPhoto}
            alt='Card Details'
            loading='lazy'
          />
          <h5 className={props.card.cardTitleClassName}>
            {props.card.cardTitle}
          </h5>
          <div className='card-body'>
            <p
              className={
                isEllipses
                  ? props.card.cardTextClassName +
                    ' collapse-text' +
                    ' text-height-in'
                  : props.card.cardTextClassName + ' text-height-out'
              }
            >
              {props.card.cardText}
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
                href={props.card.cardGithubButtonHref}
                className='custom-project-btn'
              >
                {props.card.cardGithubButtonText}
              </a>
              {props.card.cardButtonHref.length > 0 && (
                <a
                  onClick={() => {
                    return false;
                  }}
                  href={props.card.cardButtonHref}
                  className={props.card.cardButtonClass}
                >
                  {props.card.cardButtonText}
                  {props.card.cardButtonHref.length === 1 ? (
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
