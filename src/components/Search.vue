<template>
<<<<<<< HEAD
  <div>
      <input type="text" name="">
=======
  <div class="page-search">
    <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
>>>>>>> bd167d3b292912d27217397bd6ede7e425c9510d
  </div>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
</style>