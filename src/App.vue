<template>
    <transition enter-active-class="router-animated-app fadeIn">
        <router-view ref="/"></router-view>
    </transition>
</template>
<script>
export default {
  name: 'App'
}
</script>