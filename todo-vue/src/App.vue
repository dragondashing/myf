<template>
  <div id="app">
    <h1>我的任务清单</h1>
    <ul>
      <li>
        <to-do-item label="我的任务清单"></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
