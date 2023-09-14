<template>
  <div id="app">
    <h1>我的任务清单</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>


<script>
import ToDoItem from "./components/ToDoItem.vue";
import uniqueId from "lodash.uniqueid";

export default {
        name: "app",
        components: {
          ToDoItem,
        },
        data() {
          return {
            ToDoItems: [
              { id: uniqueId("todo-"), label: "学习Vue", done: false },
              { id: uniqueId("todo-"), label: "使用CLI创建Vue项目",done:true},
              { id: uniqueId("todo-"), label: "放松", done: true },
              { id: uniqueId("todo-"), label: "创建一个任务清单", done: false },
            ],
          };
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
