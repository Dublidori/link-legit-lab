import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const handleSearchClick = () => {
    
    console.log('Search clicked!');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonInput placeholder="Put here your store"></IonInput>

        <IonButton expand="full" onClick={handleSearchClick}>
          Search
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
