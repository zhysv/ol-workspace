<script setup lang="js">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import routerList from './router/router.list.js'

const router = useRouter()
const clickMenu = (routerItem) => {
  const { path, name } = routerItem
  console.log('routerItem -----------> ', routerItem)
  router.push({
    path,
    name
  })
}
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item
          v-for="(item, index) in routerList"
          :index="index.toString()"
          :key="`menu-item-${index}`"
          @click="clickMenu(item)"
        >
          <span>{{ item.routerName }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped></style>
