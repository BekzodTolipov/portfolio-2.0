import './page-title.css';
import PagePicker from './PagePicker';

type pageTitleContent = {
  title: string;
};

export default function PageTitle(props: pageTitleContent) {
  return (
    <div className='page-title-container'>
      <h1 className='page-title'>{props.title}</h1>

      <div className='page-picker-container'>
        <PagePicker title={props.title} />
      </div>
    </div>
  );
}
