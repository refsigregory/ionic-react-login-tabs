import React, { useState, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonLoading
} from "@ionic/react";
import { UserContext } from "./App";

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const user = useContext(UserContext);

  const loginClick = () => {
    //Login Function
    // setBusy(true);
    if (userName === "a" && password === "a") {
      user.setIsLoggedIn(true);
    } else {
    }
    // setBusy(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">User Name</IonLabel>
            <IonInput
              value={userName}
              onIonChange={(e: any) => setUserName(e.target.value)}
              required
              clearInput
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              value={password}
              onIonChange={(e: any) => setPassword(e.target.value)}
              required
              type="password"
              clearInput
            />
          </IonItem>
          <p />
          <br />
          <IonButton
            shape="round"
            expand="full"
            routerLink="/profile"
            onClick={loginClick}
          >
            Login
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
