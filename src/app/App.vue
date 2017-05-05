<template>
  <div>
    <input v-model="msg">
    <input v-focus>
    <input type="text" @keyup.zero="method" value="abc">
    <p>prop: {{propMessage | filter1}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
    <h2>Todo Test</h2>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import User from './domain/model/user';

@Component({
  props: {
    propMessage: String
  },
  filters: {
    filterA: (value: String) => {
      return "a"
    }
  }
})

export default class App extends Vue {
  propMessage: string
  user: User = new User();

  // inital data
  msg: number = 123

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  todos: any = [
    { text: 'Vegetables' },
    { text: 'Cheese' },
    { text: 'Whatever else humans are supposed to eat' }
  ]

  beforeCreate() { console.log('beforeCreate.') }
  created() { console.log('created.') }
  beforeMount() { console.log('beforeMount.') }
  mounted() { console.log('mounted.') }
  beforeUpdate() { console.log('beforeUpdate.') }
  updated() { console.log('updated.') }
  activated() { console.log('activated.') }
  deactivated() { console.log('deactivated.') }
  beforeDestroy() { console.log('beforeDestroy.') }
  destroyed() { console.log('destroyed.') }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.user.name())
  }

  method() {
    alert(0)
  }

}
</script>
