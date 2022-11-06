import { AboutBody } from '../../pages/about/About';
import { PlayBody } from '../../pages/play/Play';
import { WorkBody } from '../../pages/work/Work';

type PageBodyPicker = {
  title: string;
};

export default function PagePicker(props: PageBodyPicker) {
  switch (props.title.toString().toLowerCase()) {
    case 'work':
      return <WorkBody />;
    case 'play':
      return <PlayBody />;
    case 'about':
      return <AboutBody />;

    default:
      return <></>;
  }
}
