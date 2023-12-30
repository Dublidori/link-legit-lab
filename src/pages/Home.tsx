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
  const handleSearchClick = async () => {
    
    try{
      const response = await fetch(`https://api.trustpilot.com/v1/business-units/find`)

      if(response.ok){
        const data = await response.json();

        console.log("API:", data);
      }else{
        console.log("error og ythe nirgbeui");
      }

    }catch(err){
      console.log(err);
    }
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
