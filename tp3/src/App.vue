<template>
  <div>
    <h1>Task List</h1>
    <button @click="filterTasks('all')">All</button>
    <button @click="filterTasks('completed')">Completed</button>
    <button @click="filterTasks('incomplete')">Incomplete</button>
    <p>Total tasks: {{ totalTasks }}</p>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <button v-show="!task.completed" @click="markAsCompleted(task)">Mark as Completed</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "completed": false
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description of Task 2",
    "completed": true
  }
],
      filter: 'all',
    };
  },
  computed: {
    totalTasks() {
      return this.tasks.length;
    },
    filteredTasks() {
      if (this.filter === 'completed') {
        return this.tasks.filter(task => task.completed);
      } else if (this.filter === 'incomplete') {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks;
      }
    }
  },
  mounted() {
    fetch('tasks.json')
      .then(response => response.json())
      .then(data => {
        this.tasks = data;
      });
  },
  methods: {
    filterTasks(status) {
      this.filter = status;
    },
    markAsCompleted(task) {
      task.completed = true;
    }
  }
};
</script>
