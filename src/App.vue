<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test01">test01</router-link> |
      <router-link to="/Drag01">拖动测试</router-link> | 
      <router-link :to="{name: 'Route01', params: {newName: 'luoxiaowei'}}">路由测试</router-link> ||
      <!-- <router-link :to="{name: 'user', params: { userId: 123 }}">User</router-link> -->
      <router-link to="/user">User</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
