import Apply from "lib/x/Apply"
import ApplyTransition from "lib/x/ApplyTransition"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import React from "react"
import Transition from "lib/x/Transition"
import tw from "./tw"
import uuid from "uuid/v4"
import { useImmerReducer } from "use-immer"

import "./index.css"

const initialState = {
	// form: {
	// 	done: false,
	// 	text: "",
	// },
	// todos: [],
}

const actions = state => ({
	// toggleNextTodo() {
	// 	state.form.done = !state.form.done
	// },
	// updateNextTodo(text) {
	// 	state.form.text = text
	// },
	// appendNextTodo() {
	// 	if (!state.form.text) {
	// 		return
	// 	}
	// 	state.todos.unshift({
	// 		id: uuid(),
	// 		...state.form,
	// 	})
	// 	state.form.text = ""
	// },
	// toggleTodoByID(id) {
	// 	const todo = state.todos.find(each => each.id === id)
	// 	todo.done = !todo.done
	// },
	// updateTodoByID(id, text) {
	// 	const todo = state.todos.find(each => each.id === id)
	// 	todo.text = text
	// },
	// deleteTodoByID(id) {
	// 	const x = state.todos.findIndex(each => each.id === id)
	// 	state.todos.splice(x, 1)
	// },
})

function BlockEditorReducer(state, action) {
	// switch (action.type) {
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
	// default:
	// 	throw new Error(`BlockEditorReducer: action mismatch; action=${action}`)
	// }
}

const BlockEditorApp = () => {
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			setMounted(true)
		}, 200)
	}, [])

	const [state, dispatch] = useImmerReducer(BlockEditorReducer, initialState)

	// TODO: Move to reducer or use local state?
	const [searchText, setSearchText] = React.useState("")

	return (
		<Transition
			on={mounted}
			className="transition duration-700g ease-out"
			from="opacity-0 transform -translate-y-4"
			to="opacity-100 transform translate-y-0"
		>
			<div className="px-4 sm:px-6 py-24 flex flex-row justify-center">

				{/* LHS */}
				<aside className="flex-shrink-0 hidden lg:block w-64">

					{/* Search bar */}
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pointer-events-none">
							<div className="flex flex-row items-center h-full">
								<ApplyTransition>
									<Apply className="mx-4 text-gray-400 transform scale-90" style={{ color: searchText && "var(--gray-800)" }}>
										<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
									</Apply>
								</ApplyTransition>
							</div>
						</div>
						<ApplyTransition>
							<Apply className="bg-gray-100 focus:outline-none">
								<input
									id="search-bar"
									className="px-6 w-full h-12 text-lg text-gray-800 rounded-full"
									style={{ paddingLeft: tw(4 + 6 + 2) }}
									type="text"
									placeholder="Search"
									onChange={e => setSearchText(e.target.value)}
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

					{/* Subheaders */}
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
		</Transition>
	)
}

export default BlockEditorApp
