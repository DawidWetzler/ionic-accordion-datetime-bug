<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Bug when using ion-datetime within ion-accordion</strong>
        <p>This occurs only on iOS devices</p>
        <h6>Reproduction steps</h6>
        <ul>
          <ol>
            <li>Open accordion</li>
            <li>Click Next / Previous arrow</li>
          </ol>
        </ul>

        <div>
          <ion-accordion-group>
            <ion-accordion>
              <ion-item slot="header">
                <ion-label>Open Datetime</ion-label>
              </ion-item>

              <ion-datetime slot="content" size="cover" />
            </ion-accordion>
          </ion-accordion-group>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonAccordion,
  IonAccordionGroup,
  IonLabel,
  IonItem,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    IonDatetime,
    IonLabel,
    IonItem,
  },
});
</script>
