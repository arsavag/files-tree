import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tree: {
			nodes: [
				{
					label: "Dir 1",
					type: "direction",
					id: "dir1",
					nodes: [
						{
							label: "Dir 1-1",
							type: "direction",
							id: "dir11",
							nodes: [
								{
									label: "File 1-1-1",
									type: "file",
									id: "file111",
								},
							],
						},
						{
							label: "File 1-2",
							type: "file",
							id: "file12",
						},
					],
				},
				{
					label: "Dir 2",
					type: "direction",
					id: "dir2",
					nodes: [
						{
							label: "Dir 2-1",
							type: "direction",
							id: "dir21",
						},
						{
							label: "File 2-2",
							type: "file",
							id: "dir22",
						},
					],
				},
				{
					label: "File 2",
					type: "file",
					id: "file2",
				},
			],
		},
		selectedID: undefined,
	},
	getters: {},
	mutations: {
		SELECTED_ID: (state, selectedID) => (state.selectedID = selectedID),
	},
	actions: {
		handleSelectedId: ({ commit }, id) => {
			commit("SELECTED_ID", id);
		},
		handleRemove: ({ state }, id) => {
			function removeNode(node, nodeId) {
				const children = node.nodes;
				if (!children?.length) return;

				for (let i = 0; i < children.length; ++i) {
					const child = children[i];
					if (child.id === nodeId) {
						node.nodes.splice(i, 1);
						return;
					}

					removeNode(child, nodeId);
				}
			}
			removeNode(state.tree, id);
		},
    handleEdit: ({state}, { id, editedLabel}) => {
      function editNode(node, nodeId) {
				const children = node.nodes;
				if (!children?.length) return;

				for (let i = 0; i < children.length; ++i) {
					const child = children[i];
					if (child.id === nodeId) {
						child.label = editedLabel;
						return;
					}

					editNode(child, nodeId);
				}
			}
			editNode(state.tree, id);
    } 
	},
	modules: {},
});
