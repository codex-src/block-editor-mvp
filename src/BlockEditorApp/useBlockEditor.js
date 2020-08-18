import uuid from "uuid/v4"
import { useImmerReducer } from "use-immer"

const initialState = {
	filter: "",

	backend: [
		{
			type: "p",
			key: uuid(),
			props: {
				children: "",
			},
		},
		{
			type: "p",
			key: uuid(),
			props: {
				children: "",
			},
		},
	],
	frontend: [
		// ...
	],
	rerenderFrontend: 0,
	focused: false,
	range: {
		start: {
			key: "",
			offset: 0,
		},
		end: {
			key: "",
			offset: 0,
		},
	},
}

const actions = state => ({
	filter(filter) {
		state.filter = filter
	},

	// Focuses the editor.
	focus() {
		state.focused = true
	},
	// Blurs the editor.
	blur() {
		state.focused = false
	},
	// Selects the editor at a range.
	select(range) {
		state.range = range
	},

	backspace() {
		// TODO
	},
	delete() {
		// TODO
	},
	// tab() {
	// 	// TODO
	// },
	enter() {
		// TODO
	},

	// Uncontrolled input handler.
	uncontrolledInput(children, collapsedRange) {
		const node = state.backend.find(each => each.key === collapsedRange.start.key)
		// if (!node) {
		// 	throw new Error(`actions.uncontrolledInput: no such node; node=${node}`)
		// }
		node.props.children = children
		state.range = collapsedRange
		state.rerenderFrontend++
	},
})

// case "TOGGLE_NEXT_TODO":
// 	actions(state).toggleNextTodo()
// 	return
// case "UPDATE_NEXT_TODO":
// 	actions(state).updateNextTodo(action.text)
// 	return
// case "APPEND_NEXT_TODO":
// 	actions(state).appendNextTodo()
// 	return
// case "TOGGLE_TODO_BY_ID":
// 	actions(state).toggleTodoByID(action.id)
// 	return
// case "UPDATE_TODO_BY_ID":
// 	actions(state).updateTodoByID(action.id, action.text)
// 	return
// case "DELETE_TODO_BY_ID":
// 	actions(state).deleteTodoByID(action.id)
// 	return

function BlockEditorReducer(state, action) {
	switch (action.type) {
	case "FILTER":
		actions(state).filter(action.filter)
		return

	case "FOCUS":
		actions(state).focus()
		return
	case "BLUR":
		actions(state).blur()
		return
	case "SELECT":
		actions(state).select(action.range)
		return
	case "UNCONTROLLED_INPUT":
		actions(state).uncontrolledInput(action.children, action.collapsedRange)
		return

	default:
		throw new Error(`BlockEditorReducer: action mismatch; action=${action.type}`)
	}
}

function useBlockEditor() {
	return useImmerReducer(BlockEditorReducer, initialState)
}

export default useBlockEditor
