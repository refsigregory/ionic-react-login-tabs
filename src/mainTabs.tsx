import React, { useState } from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import Profile from "./profile";
import History from "./history";
import { personCircleOutline, documentTextOutline } from "ionicons/icons";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/profile" />
        <Route path="/profile" render={() => <Profile />} exact={true} />
        <Route path="history" render={() => <History />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" href="/history">
          <IonIcon icon={documentTextOutline} />
          <IonLabel>History</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
