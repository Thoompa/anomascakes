<template>
  <div class="menu">
    <v-row>
      <v-col v-for="(item, i) in images" :key="i" class="d-flex flex-column align-center">
        <img
          :src="item.img"
          class="w-[400px] h-[400px] object-cover object-center rounded-lg mb-2"
          :class="item.class"
        />
        <div class="text-h6 text-center">
          {{ item.name }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const images = [
  { name: 'Cupcakes', img: '/src/assets/images/cupcakes-square.jpg', class: 'square' },
  { name: 'Small Cakes', img: '/src/assets/images/small-cakes-square.jpg', class: 'square' },
  { name: 'Bento Cake Box', img: '/src/assets/images/bento-cake-box-square.jpg', class: 'square' },
  { name: 'Sri Lankan Speciality Cakes', img: '/src/assets/images/sri-lankan-speciality-cakes-square.jpg', class: 'square' }
]
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  margin-block: var(--default-margin-block);
  align-items: center;
  height: 589px;
}

.images {
  width: 400px;
}

.top-row {
  height: 311px;
  width: 467px;
}

.btm-row {
  height: 700px;
  width: 467px;
}

.square {
  height: 311px;
  width: 311px;
}
</style>
