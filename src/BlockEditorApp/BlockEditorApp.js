import disableAutoCorrect from "lib/x/attrs/disableAutoCorrect"
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

					{/* Search */}
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pointer-events-none">
							<div className="flex flex-row items-center h-full">
								<ApplyTransition>
									<Apply className="mx-4 text-gray-400 transform scale-90" style={{ color: focused && "var(--blue-500)" }}>
										<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
										{/* <svg viewBox="0 0 20 20" fill="currentColor" className="document-search w-6 h-6"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" /><path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" /></svg> */}
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
									{...disableAutoCorrect}
								/>
							</Apply>
						</ApplyTransition>
					</div>

					{/* Title */}
					<div className="h-8" />
					<p className="flex flex-row items-center font-medium text-xs tracking-wider leading-none uppercase truncate text-gray-400">
						<Apply className="mr-1.5 transform scale-90">
							<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
							{/* <svg viewBox="0 0 20 20" fill="currentColor" className="menu-alt2 w-4 h-4"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg> */}
						</Apply>
						Adele – Hello
					</p>

					{/* Contents */}
					<div className="h-4" />
					<ul className="space-y-3">
						<li className="font-medium text-sm truncate text-gray-500">
							Hello, it's me
						</li>
						<ul className="space-y-3 pl-3 pb-1.5">
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									I was wondering if after all these years you'd like to meet
								</p>
							</li>
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									To go over everything
								</p>
							</li>
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									They say that time's supposed to heal ya
								</p>
							</li>
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									But I ain't done much healing
								</p>
							</li>
						</ul>
						<li>
							<p className="font-medium text-sm truncate text-gray-500">
								Hello, can you hear me?
							</p>
						</li>
						<ul className="space-y-3 pl-3 pb-1.5">
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									I'm in California dreaming about who we used to be
								</p>
							</li>
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									When we were younger and free
								</p>
							</li>
							<li>
								<p className="font-medium text-sm truncate text-gray-500">
									I've forgotten how it felt before the world fell at our feet
								</p>
							</li>
						</ul>
					</ul>

				</aside>
			</Apply>

			{/* Main */}
			<div className="flex-shrink-0 hidden lg:block w-16" />
			<main className="w-full max-w-2xl bg-red-100">
				hello
			</main>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-16" />
			<aside className="hidden xl:block w-64 bg-blue-100" />

		</div>
	)
}

export default BlockEditorApp
