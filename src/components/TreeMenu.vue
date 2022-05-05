<template>
	<div class="tree-menu" :style="{ 'margin-left': `${depth * 20}px` }">
		<div class="label">
      <Actions
        v-if="editMode && selectedID === id"
        :labelValue="label"
        @handleActionsHide="handleActionsHide"
        @handleItemEdit="handleItemEdit"
        @handleItemRemove="handleItemRemove"
      />
			<span v-else @click="onLabelClick">
				{{ label }}
			</span>
		</div>
		<TreeMenu
			v-for="node in nodes"
			:key="node.label"
			:nodes="node.nodes"
			:label="node.label"
			:id="node.id"
			:depth="depth + 1"
		>
		</TreeMenu>
	</div>
</template>
<script>
import { mapState } from "vuex";
import Actions from './Actions.vue'
export default {
	name: "TreeMenu",
  components: {
    Actions
  },
	props: {
		label: String,
		id: String,
		nodes: {
			type: Array,
		},
		depth: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			editMode: false,
		};
	},
	computed: {
		...mapState(["selectedID"]),
	},
	methods: {
		handleActionsHide() {
			this.editMode = false;
			this.$store.dispatch("handleSelectedId", undefined);
		},
		onLabelClick() {
			this.editMode = true;
			this.$store.dispatch("handleSelectedId", this.id);
		},
		handleItemRemove() {
			this.$store.dispatch("handleRemove", this.id);
		},
		handleItemEdit(editedLabel) {
			this.$store.dispatch("handleEdit", {
				id: this.id,
				editedLabel
			});
		},
	},
};
</script>

<style scoped>
.label {
	display: flex;
	align-items: center;
}
</style>
