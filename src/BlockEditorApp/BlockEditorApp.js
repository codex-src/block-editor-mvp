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

const BlockEditorApp = () => {
	// const [state, dispatch] = useImmerReducer(BlockEditorReducer, initialState)

	const searchInputRef = React.useRef(null)
	const searchHeaderRef = React.useRef(null)

	const [scrollYBeforeSearchText, setScrollYBeforeSearchText] = React.useState(0)
	const [searchText, setSearchText] = React.useState("")

	// Effect for simulating flex flex-row items-baseline.
	React.useLayoutEffect(() => {
		if (!searchText) {
			// No-op
			return
		}
		const nudge = (searchHeaderRef.current.offsetHeight - searchInputRef.current.offsetHeight) / 2
		searchHeaderRef.current.style.marginTop = (-searchInputRef.current.offsetHeight + -nudge) + "px"
	}, [searchText])

	// Effect for auto-scrolling on searchText.
	React.useEffect(() => {
		if ([...searchText].length <= 1 && window.scrollY) {
			setScrollYBeforeSearchText(window.scrollY)
		}

		const id = setTimeout(() => {
			if (!searchText) {
				window.scrollTo(0, scrollYBeforeSearchText)
			} else {
				window.scrollTo(0, 0)
			}
		}, 200)
		return () => {
			clearTimeout(id)
		}
	}, [searchText])

	// NOTE: Uses items-start because of sticky top-0.
	return (
		<div className="px-4 sm:px-6 py-48 flex flex-row justify-center items-start">

			{/* LHS */}
			<Apply className="-mt-48 sticky top-0" style={{ paddingTop: tw(30) }}>
				<aside className="flex-shrink-0 hidden md:block w-64">

					{/* Search bar */}
					<div className="relative">

						{/* Search bar LHS */}
						<div className="px-4 absolute inset-y-0 left-0 pointer-events-none">
							<div className="flex flex-row items-center h-full">
								<Apply className="text-gray-400" style={{ color: searchText && "var(--gray-800)" }}>
									<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
								</Apply>
							</div>
						</div>

						{/* <input type="text"> */}
						<ApplyTransition>
							<Apply className="bg-gray-100 focus:outline-none">
								<input
									id="search-bar"
									ref={searchInputRef}
									className="px-4 w-full h-10 text-gray-800 rounded-full"
									style={{ padding: `0 ${tw(4 + 5 + 2)}` }}
									type="text"
									placeholder="Search"
									value={searchText}
									onChange={e => setSearchText(e.target.value)}
									{...disableAutoCorrect}
								/>
							</Apply>
						</ApplyTransition>

						{/* Search bar RHS */}
						<Apply className="focus:outline-none">
							<button
								className="px-4 absolute inset-y-0 right-0 pointer-events-none"
								style={{ pointerEvents: searchText && "auto" }}
								onClick={e => {
									const el = document.getElementById("search-bar")
									el.focus()
									setSearchText("")
								}}
								aria-label="Clear search"
							>
								<div className="flex flex-row items-center h-full">
									<Apply className="text-transparent" style={{ color: searchText && "var(--gray-800)" }}>
										<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="x w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
									</Apply>
								</div>
							</button>
						</Apply>

					</div>

					{/* Contents */}
					<div className="h-8" />
					<ul className="space-y-3">

						{/* Header */}
						<Apply className="flex flex-row items-center">
							<li className="font-medium text-xs tracking-wider truncate text-gray-400">
								<Apply className="mr-2 transform scale-90">
									<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
								</Apply>
								{"Adele – Hello".toUpperCase()}
							</li>
						</Apply>

						{/* Subheaders */}
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
			</Apply>

			{/* <main> */}
			<div className="flex-shrink-0 hidden md:block w-12" />
			<main className="w-full max-w-2xl">

				{searchText && (
					<div className="relative">
						<div className="-mt-8 absolute top-0">
							<DocumentTitle title={`Searching “${searchText}”`}>
								<h1 ref={searchHeaderRef} className="font-bold text-3xl text-gray-800">
									Searching “{searchText}”
								</h1>
							</DocumentTitle>
						</div>
					</div>
				)}

				<FakeContent />
			</main>

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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
			style={{ fontSize: tw(4.25), lineHeight: 1 }}
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
