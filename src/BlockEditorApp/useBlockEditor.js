import * as immer from "use-immer"

const initialState = {
	filter: "",
}

const actions = state => ({
	updateFilter(filter) {
		state.filter = filter
	}
})

function BlockEditorReducer(state, action) {
	switch (action.type) {
	case "UPDATE_FILTER":
		actions(state).updateFilter(action.filter)
		return

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
	default:
		throw new Error(`BlockEditorReducer: action mismatch; action=${action}`)
	}
}

function useBlockEditor() {
	return immer.useImmerReducer(BlockEditorReducer, initialState)
}

export default useBlockEditor
