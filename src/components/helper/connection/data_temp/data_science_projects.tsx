import { CardDetails } from '../../../partials/card/CustomCard';

const DataScienceProjects = () => {
  let listOfCardDetails: CardDetails[] = [
    {
      cardPhoto: '/images/food-vision.jpg',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Food Vision With Deep Learning',
      cardTextClassName: 'card-text ',
      cardText:
        'Food Vision is a deep learning project that aims to classify food images into different categories. The project uses the EfficientNetB0 architecture and the Food101 dataset. The model was trained and evaluated using TensorFlow and Keras. The project achieved an accuracy of approximately 75.3% on the test set. The model is capable of recognizing a variety of food categories, including sushi, pizza, and steak.',
      cardButtonText: 'Try Project',
      cardButtonHref:
        'https://bekzodtolipov-food-vision-app-y8dlog.streamlit.app/',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref: 'https://github.com/BekzodTolipov/Food-Vision',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/austin-housing.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Austin House Prediction',
      cardTextClassName: 'card-text ',
      cardText:
        'I created house prediction model using XGboost for Austin area. User can interact with model and provide house characteristics to see estimated price for their house',
      cardButtonText: 'Try Project',
      cardButtonHref:
        'https://bekzodtolipov-austin-housing-price-prediction-app-3mqp00.streamlit.app/',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref:
        'https://github.com/BekzodTolipov/Austin-Housing-Price-Prediction',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/breast_xception_vision_2.jpg',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Breast Cancer Detection',
      cardTextClassName: 'card-text ',
      cardText:
        'The Radiological Society of North America (RSNA) hosting a competition to improve patient care and health care delivery through eduction, research and technological innovation. The goal of this competition is to identify breast cancer with screening mammograms obtained from regular screening',
      cardButtonText: 'Try Project',
      cardButtonHref: '#',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref:
        'https://github.com/BekzodTolipov/RSNA-Screening-Mammography-Breast-Cancer-Detection',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/wildfire-acreage-prediction.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Wildfire Acreage Prediction',
      cardTextClassName: 'card-text ',
      cardText:
        'As part of a team of 3, built a wildfire acreage prediction model using meteorological and land vegetation datasets',
      cardButtonText: 'Try Project',
      cardButtonHref: '#',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref:
        'https://github.com/General-Assembly-Group-Project/Wild-Fire-Analysis',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/reddit-nlp.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Reddit: Web API & NLP',
      cardTextClassName: 'card-text ',
      cardText:
        'Built a Natural Language Processing (NLP) techniques, including CountVectorizer, TfidfVectorizer to classify new posts between 2 subreddits',
      cardButtonText: 'Try Project',
      cardButtonHref: '#',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref:
        'https://github.com/BekzodTolipov/Reddit-Web-API-NLP',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/fresh-app.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Fresh App',
      cardTextClassName: 'card-text ',
      cardText:
        'As a group we found a way to ease consumers day-to-day food recipe challenges where they can choose from the list of recipes offered and order the ingredients needed',
      cardButtonText: 'Try Project',
      cardButtonHref: '',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref: 'https://github.com/zegster/fresh',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/c-plus-plus.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Program Translation',
      cardTextClassName: 'card-text ',
      cardText:
        'This project is build to demonstrate how SCANNER tokenize words and passes it to PARSER to check if given program follows given BNF grammar. Then, it semantics will be checked based on the tree has been generated by parser. Code generator will be invoked with generated parse tree and semantic table',
      cardButtonText: 'Try Project',
      cardButtonHref: '',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref:
        'https://github.com/BekzodTolipov/Program-Translation',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },

    {
      cardPhoto: '/images/kotlin.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Simon Says',
      cardTextClassName: 'card-text ',
      cardText:
        "Replicated the 'Simon Says' game by practicing to create three different pages and set up transition between to keep consistency in tracking scores of the player locally",
      cardButtonText: 'Try Project',
      cardButtonHref: '',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref: 'https://github.com/BekzodTolipov/Simon-Game',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/raspberry-pi.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Listener with Raspberry Pi',
      cardTextClassName: 'card-text ',
      cardText:
        'Demonstrated it is possible to run open source in Raspberry Pi locally without being connected to the internet and be able to recognize and count specified words',
      cardButtonText: 'Try Project',
      cardButtonHref: '',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref: 'https://github.com/BekzodTolipov/JalapenoHotties',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
    {
      cardPhoto: '/images/c-programming.PNG',
      cardClassName: 'card-container',
      cardBodyClassName: 'card-body',
      cardTitleClassName: 'card-title',
      cardTitle: 'Operating System Simulator',
      cardTextClassName: 'card-text ',
      cardText:
        'Designed and implemented modules of a generic OS using system calls such as fork, exec, shared memory, message queues and semaphores. Goal of the project was to show how OS managed inter-process communications, process scheduling, resource management and memory management',
      cardButtonText: 'Try Project',
      cardButtonHref: '',
      cardButtonClass: 'simulator-btn',
      cardGithubButtonHref: 'https://github.com/BekzodTolipov/OS',
      cardGithubButtonClass: 'github-btn',
      cardGithubButtonText: 'GitHub',
    },
  ];

  return listOfCardDetails;
};

export default DataScienceProjects;
