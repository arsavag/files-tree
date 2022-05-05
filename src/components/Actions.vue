<template>
  <div class="label-input">
    <input v-model="inputValue" class="input" />
    <button @click="$emit('handleActionsHide')">Cancel</button>
    <button @click="$emit('handleItemEdit', inputValue)">Save</button>
    <button @click="$emit('handleItemRemove')">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'LabelInput',
  props: {
    labelValue: String,
    labelId: String,
  },
  data() {
    return {
      inputValue: this.labelValue || null,
    }
  },
}
</script>