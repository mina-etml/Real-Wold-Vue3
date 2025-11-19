<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../../services/EventService'

const { id } = defineProps(['id'])
const event = ref(null)

onMounted(() => {
  //get events from mock db when component is created
  EventService.getEvent(id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>|
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>|
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
