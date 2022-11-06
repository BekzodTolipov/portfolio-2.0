import './under-construction.css';

export default function UnderConstruction() {
  return (
    <>
      <img
        className='under-construction-img'
        src={process.env.PUBLIC_URL + '/images/UnderCOnstruction.png'}
        alt='Under Construction'
      />
      <p className='construction-message'>Under Construction</p>
    </>
  );
}
