import React from "react"
// import uuid from "uuid/v4"
// import { useImmerReducer } from "use-immer"

// const initialState = {
// 	form: {
// 		done: false,
// 		text: "",
// 	},
// 	todos: [],
// }

// const actions = state => ({
// 	toggleNextTodo() {
// 		state.form.done = !state.form.done
// 	},
// 	updateNextTodo(text) {
// 		state.form.text = text
// 	},
// 	appendNextTodo() {
// 		if (!state.form.text) {
// 			return
// 		}
// 		state.todos.unshift({
// 			id: uuid(),
// 			...state.form,
// 		})
// 		state.form.text = ""
// 	},
// 	toggleTodoByID(id) {
// 		const todo = state.todos.find(each => each.id === id)
// 		todo.done = !todo.done
// 	},
// 	updateTodoByID(id, text) {
// 		const todo = state.todos.find(each => each.id === id)
// 		todo.text = text
// 	},
// 	deleteTodoByID(id) {
// 		const x = state.todos.findIndex(each => each.id === id)
// 		state.todos.splice(x, 1)
// 	},
// })

// function TodoAppReducer(state, action) {
// 	switch (action.type) {
// 	case "TOGGLE_NEXT_TODO":
// 		actions(state).toggleNextTodo()
// 		return
// 	case "UPDATE_NEXT_TODO":
// 		actions(state).updateNextTodo(action.text)
// 		return
// 	case "APPEND_NEXT_TODO":
// 		actions(state).appendNextTodo()
// 		return
// 	case "TOGGLE_TODO_BY_ID":
// 		actions(state).toggleTodoByID(action.id)
// 		return
// 	case "UPDATE_TODO_BY_ID":
// 		actions(state).updateTodoByID(action.id, action.text)
// 		return
// 	case "DELETE_TODO_BY_ID":
// 		actions(state).deleteTodoByID(action.id)
// 		return
// 	default:
// 		throw new Error(`TodoAppReducer: action mismatch; action=${action}`)
// 	}
// }

// const MemoTodoItem = React.memo(({ todo, dispatch }) => (
// 	<div id={todo.id}>
// 		<input
// 			type="checkbox"
// 			checked={todo.done}
// 			onChange={e => {
// 				dispatch({
// 					type: "TOGGLE_TODO_BY_ID",
// 					id: todo.id,
// 				})
// 			}}
// 		/>
// 		<input
// 			type="text"
// 			value={todo.text}
// 			onChange={e => {
// 				dispatch({
// 					type: "UPDATE_TODO_BY_ID",
// 					id: todo.id,
// 					text: e.target.value,
// 				})
// 			}}
// 		/>
// 		<button
// 			onClick={e => {
// 				dispatch({
// 					type: "DELETE_TODO_BY_ID",
// 					id: todo.id,
// 				})
// 			}}
// 		>
// 			Delete
// 		</button>
// 	</div>
// ))

const Apply = ({ className, children }) => (
	React.cloneElement(children, {
		...children.props,
		className: className +	(!children.props.className ? "" : " " + children.props.className),
	})
)

const BlockEditorApp = () => {
	// const [state, dispatch] = useImmerReducer(TodoAppReducer, initialState)

	return (
		<div className="px-4 py-24 flex flex-row justify-center">

			{/* LHS */}
			<Apply className="flex-shrink-0">
				<div className="hidden lg:block w-48 bg-red-100">
					hello
				</div>
			</Apply>

			{/* Main */}
			<div className="flex-shrink-0 hidden lg:block w-16" />
			<main className="w-full max-w-3xl bg-red-100">
				hello
			</main>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-16" />
			<div className="hidden xl:block w-48 bg-blue-100" />

		</div>
	)
}

export default BlockEditorApp
