import Apply from "lib/x/Apply"
import ApplyTransition from "lib/x/ApplyTransition"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
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

const SearchBar = ({ searchBarText, setSearchBarText }) => (
	<Transition
		on={searchBarText}
		className="transition duration-200 ease-in-out"
		from="bg-gray-100 shadow-none cursor-text"
		to="bg-white shadow-hero cursor-auto"
	>
		<div className="relative flex flex-row w-64 h-12 rounded-full">

			{/* LHS */}
			<div className="absolute inset-y-0 left-0 pointer-events-none">
				<div className="flex flex-row justify-center items-center w-12 h-12 rounded-full">
					<ApplyTransition>
						<Apply
							className="text-gray-300"
							style={{ color: searchBarText && "hsl(200, 100%, 50%)" }}
						>
							<svg viewBox="0 0 20 20" fill="currentColor" className="filter w-5 h-5"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
						</Apply>
					</ApplyTransition>
				</div>
			</div>

			<ApplyTransition>
				<Apply className="appearance-none w-full h-full bg-transparent">
					<input
						id="search"
						className="pl-12 text-gray-800 rounded-full focus:outline-none"
						style={{ fontSize: tw(4.25) }}
						type="text"
						placeholder="Filter"
						value={searchBarText}
						onChange={e => setSearchBarText(e.target.value)}
						{...disableAutoCorrect}
					/>
				</Apply>
			</ApplyTransition>

			{/* LHS */}
			<div className="absolute inset-y-0 right-0 pointer-events-none">
				<Transition
					on={searchBarText}
					className="transition duration-200 ease-in-out"
					from="opacity-0 transform -rotate-180 scale-50 pointer-events-none"
					to="opacity-100 transform rotate-0 scale-100 pointer-events-auto"
				>
					<button
						className="flex flex-row justify-center items-center w-12 h-12 rounded-full focus:outline-none"
						onClick={e => {
							const search = document.getElementById("search")
							search.focus()
							setSearchBarText("")
						}}
						aria-label="Clear filter"
					>
						<Apply className="text-gray-800">
							<svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
							{/* <svg viewBox="0 0 20 20" fill="currentColor" className="x w-4 h-4"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg> */}
						</Apply>
					</button>
				</Transition>
			</div>

		</div>
	</Transition>
)

const BlockEditorApp = () => {
	// const [state, dispatch] = useImmerReducer(BlockEditorReducer, initialState)

	const [scrollYBeforeSearchBarChange, setScrollYBeforeSearchBarChange] = React.useState(0)
	const [searchBarText, setSearchBarText] = React.useState("")

	// Effect for auto-scrolling on searchBarText.
	React.useEffect(() => {
		if ([...searchBarText].length <= 1 && window.scrollY) {
			setScrollYBeforeSearchBarChange(window.scrollY)
		}

		const id = setTimeout(() => {
			if (!searchBarText) {
				window.scrollTo(0, scrollYBeforeSearchBarChange)
			} else {
				window.scrollTo(0, 0)
			}
		}, 200)
		return () => {
			clearTimeout(id)
		}
	}, [searchBarText])

	return (
		<div className="px-4 sm:px-6 py-32 flex flex-row justify-center items-start">

			{/* LHS */}
			<Apply className="-mt-32 pt-32 sticky top-0">
				<aside className="flex-shrink-0 hidden md:block w-64">

					<SearchBar
						searchBarText={searchBarText}
						setSearchBarText={setSearchBarText}
					/>

				</aside>
			</Apply>

			{/* <main> */}
			<div className="flex-shrink-0 hidden md:block w-12" />
			<DocumentTitle title={!searchBarText ? "TODO" : `Searching “${searchBarText}”`}>
				<main>
					<FakeContent />
				</main>
			</DocumentTitle>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-12" />
			<aside className="flex-shrink-0 hidden xl:block w-64" />

		</div>
	)
}

const FakeContent = () => (
	<>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales dolor, rutrum gravida dolor. Cras molestie ornare nisl, ac lobortis neque condimentum a. Integer eu purus magna. Morbi nec congue ipsum. Vestibulum sed metus enim. Integer massa nulla, molestie in rutrum non, interdum ac nisl. Duis blandit rhoncus leo in volutpat. Donec placerat ante ut urna accumsan, nec egestas nulla faucibus.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Mauris pellentesque sodales ex, ut commodo diam rhoncus a. Proin quis velit risus. Praesent est elit, cursus vitae enim ac, volutpat cursus odio. Nulla vehicula nisi nec diam rhoncus lacinia. Pellentesque mattis nunc at sollicitudin viverra. Ut semper mi nec mauris malesuada lacinia eget id mauris. Quisque condimentum lorem purus. Ut purus nulla, pretium at mi at, porta rhoncus neque. Mauris fermentum diam a lectus sagittis, a ultricies diam pharetra. Integer vulputate arcu porta viverra pretium. Nullam mattis fermentum nisi, in pellentesque lorem suscipit quis.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Phasellus sit amet libero lorem. Vivamus non dignissim erat. Duis vel orci ultrices, laoreet mi id, ultrices nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam interdum diam aliquam tortor molestie pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tristique turpis at placerat porta. Phasellus faucibus odio diam, a bibendum neque volutpat ut. Morbi dictum rhoncus malesuada. Donec commodo nec sapien ut auctor. Ut eget eros sit amet massa egestas commodo a vel erat. Aliquam erat volutpat. Praesent non sodales orci. Suspendisse potenti.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Nam vitae tellus malesuada, aliquet elit ut, auctor sapien. Praesent at mi vel metus laoreet sodales. Ut vehicula, odio bibendum mollis imperdiet, nisl tellus iaculis purus, eu ultricies nisi augue a dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper enim cursus, consectetur erat nec, viverra dolor. Duis eget commodo ligula, nec finibus massa. Aliquam sed ante in eros fermentum vehicula id vel est. Duis massa turpis, vehicula et neque vitae, laoreet placerat justo. Vivamus id eleifend velit. Nam semper risus ac nunc condimentum commodo. Proin placerat metus a imperdiet convallis. Duis eu quam non nunc condimentum elementum sit amet eget purus. Duis dictum turpis ligula, in pellentesque enim ullamcorper facilisis. Nullam dapibus metus nec metus consectetur, quis sagittis purus eleifend.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Pellentesque vestibulum, erat eu facilisis pulvinar, magna diam consequat sem, in bibendum quam ex ac tellus. Vivamus rutrum arcu sem, vestibulum tristique urna porttitor sit amet. Aliquam id consequat ex. Morbi dignissim dolor sit amet justo dapibus, ac lacinia elit mattis. Quisque varius imperdiet massa ac molestie. Cras sed eros odio. Duis vulputate scelerisque est vulputate sollicitudin. Duis tincidunt, quam quis feugiat porta, quam ipsum malesuada nisi, in posuere orci enim sed purus.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales dolor, rutrum gravida dolor. Cras molestie ornare nisl, ac lobortis neque condimentum a. Integer eu purus magna. Morbi nec congue ipsum. Vestibulum sed metus enim. Integer massa nulla, molestie in rutrum non, interdum ac nisl. Duis blandit rhoncus leo in volutpat. Donec placerat ante ut urna accumsan, nec egestas nulla faucibus.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Mauris pellentesque sodales ex, ut commodo diam rhoncus a. Proin quis velit risus. Praesent est elit, cursus vitae enim ac, volutpat cursus odio. Nulla vehicula nisi nec diam rhoncus lacinia. Pellentesque mattis nunc at sollicitudin viverra. Ut semper mi nec mauris malesuada lacinia eget id mauris. Quisque condimentum lorem purus. Ut purus nulla, pretium at mi at, porta rhoncus neque. Mauris fermentum diam a lectus sagittis, a ultricies diam pharetra. Integer vulputate arcu porta viverra pretium. Nullam mattis fermentum nisi, in pellentesque lorem suscipit quis.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Phasellus sit amet libero lorem. Vivamus non dignissim erat. Duis vel orci ultrices, laoreet mi id, ultrices nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam interdum diam aliquam tortor molestie pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tristique turpis at placerat porta. Phasellus faucibus odio diam, a bibendum neque volutpat ut. Morbi dictum rhoncus malesuada. Donec commodo nec sapien ut auctor. Ut eget eros sit amet massa egestas commodo a vel erat. Aliquam erat volutpat. Praesent non sodales orci. Suspendisse potenti.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Nam vitae tellus malesuada, aliquet elit ut, auctor sapien. Praesent at mi vel metus laoreet sodales. Ut vehicula, odio bibendum mollis imperdiet, nisl tellus iaculis purus, eu ultricies nisi augue a dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper enim cursus, consectetur erat nec, viverra dolor. Duis eget commodo ligula, nec finibus massa. Aliquam sed ante in eros fermentum vehicula id vel est. Duis massa turpis, vehicula et neque vitae, laoreet placerat justo. Vivamus id eleifend velit. Nam semper risus ac nunc condimentum commodo. Proin placerat metus a imperdiet convallis. Duis eu quam non nunc condimentum elementum sit amet eget purus. Duis dictum turpis ligula, in pellentesque enim ullamcorper facilisis. Nullam dapibus metus nec metus consectetur, quis sagittis purus eleifend.
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{
				fontSize: tw(4.25),
				lineHeight: 1,
			}}
		>
			<br />
		</p>
		<p
			className="leading-relaxed text-gray-800"
			style={{ fontSize: tw(4.25) }}
		>
			Pellentesque vestibulum, erat eu facilisis pulvinar, magna diam consequat sem, in bibendum quam ex ac tellus. Vivamus rutrum arcu sem, vestibulum tristique urna porttitor sit amet. Aliquam id consequat ex. Morbi dignissim dolor sit amet justo dapibus, ac lacinia elit mattis. Quisque varius imperdiet massa ac molestie. Cras sed eros odio. Duis vulputate scelerisque est vulputate sollicitudin. Duis tincidunt, quam quis feugiat porta, quam ipsum malesuada nisi, in posuere orci enim sed purus.
		</p>
	</>
)

export default BlockEditorApp
