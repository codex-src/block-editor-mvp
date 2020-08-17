import React from "react"
import tw from "./tw"

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

const Apply = ({ className, style, children }) => (
	React.cloneElement(children, {
		...children.props,
		className: className + (!children.props.className ? "" : " " + children.props.className),
		style: {
			...style,
			...children.props.style,
		},
	})
)

const ApplyTransition = ({ children }) => (
	<Apply className="transition duration-200 ease-in-out">
		{children}
	</Apply>
)

const BlockEditorApp = () => {
	const [focused, setFocused] = React.useState(false)

	// const [state, dispatch] = useImmerReducer(TodoAppReducer, initialState)

	return (
		<div className="px-4 py-24 flex flex-row justify-center">

			{/* LHS */}
			<Apply className="flex-shrink-0">
				<aside className="hidden lg:block w-64">

					<div className="relative">
						<div className="absolute inset-y-0 left-0 pointer-events-none">
							<div className="flex flex-row items-center h-full">
								<ApplyTransition>
									<Apply className="mx-4 text-gray-400 transform scale-90" style={{ color: focused && "var(--blue-400)" }}>
										<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
									</Apply>
								</ApplyTransition>
							</div>
						</div>
						<ApplyTransition>
							<Apply className="bg-gray-100 focus:bg-white border border-transparent focus:border-blue-300 focus:outline-none" style={{ boxShadow: focused && "0 0 0 3px var(--blue-200)" }}>
								<input
									className="px-6 w-full h-12 text-lg text-gray-800 rounded-full"
									style={{ paddingLeft: tw(4 + 6 + 2) }}
									type="text"
									placeholder="Search"
									onFocus={e => setFocused(true)}
									onBlur={e => setFocused(false)}
								/>
							</Apply>
						</ApplyTransition>
					</div>

				</aside>
			</Apply>

			{/* Main */}
			<div className="flex-shrink-0 hidden lg:block w-8" />
			<main className="w-full max-w-2xl bg-red-100">
				hello
			</main>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-8" />
			<aside className="hidden xl:block w-64 bg-blue-100" />

		</div>
	)
}

export default BlockEditorApp
