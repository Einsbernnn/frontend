<template>
  <div class="q-pa-md q-gutter-sm" v-if="!isOnline">
    <!-- Red offline banner -->
    <q-banner dense inline-actions class="text-white bg-red">
      You have lost connection to the internet. This app is offline.
      <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi" />
      </template>
    </q-banner>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isOnline = ref(navigator.onLine);

function updateOnlineStatus() {
  isOnline.value = navigator.onLine;
}

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onBeforeUnmount(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});
</script>

<style scoped></style>
