<template>
    <TopNav/>
    <div
    :class="route.fullPath === '/' || route.fullPath === '/np' ? 'max-w-[1140px]' :''"
    class="flex justify-between mx-auto w-full lg:px-2.5 px-0"
    >
    <div>
        <SideNavMain/>
    </div>
<slot />
    </div>
</template>

<script setup>
import SideNavMain from '~/components/SideNavMain.vue';
import TopNav from '~/components/TopNav.vue';

const route = useRoute()
</script>