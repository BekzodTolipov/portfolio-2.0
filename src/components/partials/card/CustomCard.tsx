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
        <div className='card text-white bg-success mb-3'>
          <img
            className='card-image'
            src={process.env.PUBLIC_URL + props.cardPhoto}
            alt='Card Details'
          />
          <div className='card-body'>
            <h5 className={props.cardTitleClassName}>{props.cardTitle}</h5>
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
            ​{/* Read More logic */}
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
                className={props.cardGithubButtonClass}
              >
                {props.cardGithubButtonText}
              </a>
              {props.cardButtonHref && (
                <a
                  href={props.cardButtonHref}
                  className={props.cardButtonClass}
                >
                  {props.cardButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
