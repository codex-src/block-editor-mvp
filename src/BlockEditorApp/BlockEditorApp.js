import disableAutoCorrect from "lib/x/attrs/disableAutoCorrect"
import React from "react"
import tw from "./tw"

import "./index.css"

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
	const [text, setText] = React.useState("")

	// const [state, dispatch] = useImmerReducer(TodoAppReducer, initialState)

	return (
		<div className="px-4 sm:px-6 py-24 flex flex-row justify-center">

			{/* LHS */}
			<aside className="flex-shrink-0 hidden lg:block w-64">

				{/* Search */}
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pointer-events-none">
						<div className="flex flex-row items-center h-full">
							<ApplyTransition>
								<Apply className="mx-4 text-gray-400 transform scale-90" style={{ color: text && "var(--gray-800)" }}>
									<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
								</Apply>
							</ApplyTransition>
						</div>
					</div>
					<ApplyTransition>
						<Apply className="bg-gray-100 focus:outline-none">
							<input
								id="search-input"
								className="px-6 w-full h-12 text-lg placeholder-gray-400 text-gray-800 rounded-full"
								style={{ paddingLeft: tw(4 + 6 + 2) }}
								type="text"
								placeholder="Search"
								onChange={e => setText(e.target.value)}
								{...disableAutoCorrect}
							/>
						</Apply>
					</ApplyTransition>
				</div>

				{/* Header */}
				<div className="h-8" />
				<Apply className="flex flex-row items-center">
					<p className="font-semibold text-xs tracking-wider truncate text-gray-400">
						<Apply className="mr-2 transform scale-90">
							<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
						</Apply>
						{"Adele – Hello".toUpperCase()}
					</p>
				</Apply>

				{/* Contents */}
				<div className="h-4" />
				<ul className="space-y-3">
					<li className="font-medium text-sm truncate text-gray-400">
						Hello, it's me
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							I was wondering if after all these years you'd like to meet
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							To go over everything
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							They say that time's supposed to heal ya
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							But I ain't done much healing
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							Hello, can you hear me?
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							I'm in California dreaming about who we used to be
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							When we were younger and free
						</p>
					</li>
					<li>
						<p className="font-medium text-sm truncate text-gray-400">
							I've forgotten how it felt before the world fell at our feet
						</p>
					</li>
				</ul>

			</aside>

			{/* <main> */}
			<div className="flex-shrink-0 hidden lg:block w-12" />
			<main className="w-full max-w-3xl xl:max-w-2xl !bg-red-100">
				hello
			</main>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-12" />
			<aside className="flex-shrink-0 hidden xl:block w-64 !bg-blue-100" />

		</div>
	)
}

export default BlockEditorApp
