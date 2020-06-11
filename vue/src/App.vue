<template>
  <div id="app">
    <MovingDiv></MovingDiv>
    <Calendar></Calendar>
    <MonthCalendar></MonthCalendar>
  </div>
</template>

<script>
import MovingDiv from './components/MovingDiv'
import Calendar from './components/Calendar'
import MonthCalendar from './components/MonthCalendar'
export default {
  name: 'App',
  components: {
    MovingDiv,
    Calendar,
    MonthCalendar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
