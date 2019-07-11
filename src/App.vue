<template>
  <div id="app">
        <main class="main">
            <router-view></router-view>
        </main>
        <footer class="footer">
          <ul class="lists">
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/list">列表</router-link>
                </li>
                <li>
                    <router-link to="/shopcar">购物车</router-link>
                </li>
                <li>
                    <router-link to="/login">我的</router-link>
                </li>
                <li>
                    <router-link to="/more">更多</router-link>
                </li>
          </ul>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./common/sass/style.scss');
</style>
