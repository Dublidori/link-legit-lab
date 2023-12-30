import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  
  const handleSearchClick = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("PokeAPI response:", data);
        setPokemonData(data);
      } else {
        console.error("PokeAPI error:", response.statusText);
        setPokemonData(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setPokemonData(null);
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
        <IonInput
          placeholder="Enter a Pokemon name"
          value={pokemonName}
          onIonChange={(e) => setPokemonName(e.detail.value!)}
        ></IonInput>
        <IonButton expand="full" onClick={handleSearchClick}>
          Search
        </IonButton>

        {pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            {pokemonData.sprites && (
              <img
                src={pokemonData.sprites.front_default}
                alt={`Sprite of ${pokemonData.name}`}
              />
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
