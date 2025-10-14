<template>
  <q-layout view="hHh LpR lFr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <!-- Header content -->
        <q-toolbar-title>
          <q-avatar>
          <img src="../assets/polaroid-svgrepo-com.svg" />
          </q-avatar>
          Title ss
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page-one" label="Page One" />
        <q-route-tab to="/page-two" label="Page Two" />
        <q-route-tab to="/page-three" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-avatar class="q-mt-md">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <!-- Footer content -->
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/polaroid-svgrepo-com.svg" />
          </q-avatar>
          <div>Title FOOTER</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
