<template>
  <q-layout q-layout view="lhr lpr lFr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- Header content -->
        <q-toolbar-title>
          <q-avatar>
          <img src="../assets/polaroid-svgrepo-com.svg" />
          </q-avatar>
            MOMENTO
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
<q-route-tab to="/home-page" icon="home" label="HOME" class="text-dark font-secondary" />
<q-route-tab to="/gallery-page" icon="photo_library" label="GALLERY" class="text-dark font-secondary" />
<q-route-tab to="/memories-page" icon="favorite" label="MEMORIES" class="text-dark font-secondary" />
<q-route-tab to="/milestone-page" icon="flag" label="MILESTONE" class="text-dark font-secondary" />
  </q-tabs>
</q-header>



    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-avatar class="q-mt-md">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- Footer content -->
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/polaroid-svgrepo-com.svg" />
          </q-avatar>
          <div>MOMENTO</div>
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
