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

// const SearchBar = ({ searchBarText, setSearchBarText }) => (
// 	// <div className="relative">
//
// 	<Transition
// 		on={searchBarText}
// 		className="transition duration-200 ease-in-out"
// 		from="bg-gray-100"
// 		to="bg-white"
// 	>
// 		<div className="flex flex-row w-64 h-10 rounded-full">
//
// 			{/* LHS */}
// 			{/* */}
// 			{/* NOTE: Uses w-full because of relative indirection. */}
// 			<div className="relative w-full">
//
// 				<div className="absolute inset-y-0 left-0 pointer-events-none">
// 					<div className="flex flex-row justify-center items-center w-10 h-10 rounded-full">
// 						<ApplyTransition>
// 							<Apply
// 								className="text-gray-300"
// 								style={{ color: searchBarText && "var(--teal-400)" }}
// 							>
// 								<svg viewBox="0 0 20 20" fill="currentColor" className="filter w-5 h-5"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
// 							</Apply>
// 						</ApplyTransition>
// 					</div>
// 				</div>
//
// 				{/* Search bar */}
// 				<ApplyTransition>
// 					<Apply className="w-full h-full">
// 						<input
// 							className="text-gray-800 bg-transparent rounded-full focus:outline-none"
// 							style={{
// 								padding: `0 ${tw(8.5)}`,
// 								// paddingLeft: tw(8.5),
// 								backgroundColor: searchBarText && "var(--teal-50)", // searchBarText && "hsl(200, 100%, 95%)",
// 							}}
// 							type="text"
// 							placeholder="Filter"
// 							value={searchBarText}
// 							onChange={e => setSearchBarText(e.target.value)}
// 							{...disableAutoCorrect}
// 						/>
// 					</Apply>
// 				</ApplyTransition>
//
// 				{/* RHS */}
// 				<Transition
// 					on={searchBarText}
// 					className="transition duration-200 ease-in-out"
// 					from="opacity-0 transform scale-90 pointer-events-none"
// 					to="opacity-100 transform scale-100 pointer-events-auto"
// 				>
// 					<div className="absolute inset-y-0 right-0">
// 						<div className="relative">
// 							<button
// 								className="flex flex-row justify-center items-center w-10 h-10 rounded-full focus:outline-none"
// 								onClick={e => setSearchBarText("")}
// 								aria-label="Clear filter"
// 							>
// 								<Apply className="text-gray-700">
// 									<svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
// 								</Apply>
// 							</button>
// 							<div className="absolute inset-0" style={{ zIndex: -1 }}>
// 								<div className="flex flex-row justify-center items-center h-full">
// 									<div className="w-2 h-2 bg-white rounded-full" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</Transition>
//
// 			</div>
//
// 		</div>
// 	</Transition>
//
// 	// 	{/* Subtext */}
// 	// 	<div className="px-3 py-2 absolute top-full left-0">
// 	// 		<p className="font-medium text-xs text-gray-600">
// 	// 			Now filtering for “
// 	// 			<span className="underline" style={{ textDecorationColor: "hsl(200, 100%, 50%)" }}>
// 	// 				{searchBarText.trim()}
// 	// 			</span>”
// 	// 		</p>
// 	// 	</div>
// 	// </div>
// )

const SearchBar = ({ searchBarText, setSearchBarText }) => (
	// <div className="relative">

	<Transition
		on={searchBarText}
		className="transition duration-200 ease-in-out"
		from="bg-gray-100 shadow-none"
		to="bg-white shadow-hero"
	>
		<div className="p-1 flex flex-row w-64 h-10 rounded-full">

			{/* LHS */}
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pointer-events-none">
					<div className="flex flex-row justify-center items-center w-8 h-8 rounded-full">
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
			</div>

			<ApplyTransition>
				<Apply className="w-full h-full">
					<input
						className="pr-4 text-gray-800 bg-transparent rounded-full focus:outline-none"
						style={{
							paddingLeft: tw(8.5),
							backgroundColor: searchBarText && "hsl(200, 100%, 95%)",
						}}
						type="text"
						placeholder="Filter"
						value={searchBarText}
						onChange={e => setSearchBarText(e.target.value)}
						{...disableAutoCorrect}
					/>
				</Apply>
			</ApplyTransition>

			{/* RHS */}
			<Apply className="ml-1 flex-shrink-0">
				<Transition
					on={searchBarText}
					className="transition duration-200 ease-in-out"
					from="opacity-0 transform scale-75"
					to="opacity-100 transform scale-100"
				>
					<button
						className="flex flex-row justify-center items-center w-8 h-8 focus:outline-none"
						onClick={e => setSearchBarText("")}
						aria-label="Clear filter"
					>
						<Apply className="text-gray-800">
							<svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
							{/* <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="x w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg> */}
						</Apply>
					</button>
				</Transition>
			</Apply>

		</div>
	</Transition>

	// {/* Subtext */}
	// {/* <div className="px-3 py-2 absolute top-full left-0"> */}
	// {/* 	<p className="font-medium text-xs text-gray-600"> */}
	// {/* 		Now filtering for “ */}
	// {/* 		<span className="underline" style={{ textDecorationColor: "hsl(200, 100%, 50%)" }}> */}
	// {/* 			{searchBarText.trim()} */}
	// {/* 		</span>” */}
	// {/* 	</p> */}
	// {/* </div> */}
	//
	// </div>
)

const BlockEditorApp = () => {
	// const [state, dispatch] = useImmerReducer(BlockEditorReducer, initialState)

	// const searchInputRef = React.useRef(null)
	// const searchHeaderRef = React.useRef(null)

	const [scrollYBeforeSearchBarChange, setScrollYBeforeSearchBarChange] = React.useState(0)
	const [searchBarText, setSearchBarText] = React.useState("")

	// // Effect for simulating flex flex-row items-baseline.
	// React.useLayoutEffect(() => {
	// 	if (!searchBarText) {
	// 		// No-op
	// 		return
	// 	}
	// 	const nudge = (searchHeaderRef.current.offsetHeight - searchInputRef.current.offsetHeight) / 2
	// 	searchHeaderRef.current.style.marginTop = (-searchInputRef.current.offsetHeight + -nudge) + "px"
	// }, [searchBarText])

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

	// NOTE: Uses items-start because of sticky top-0.
	return (
		<div className="px-4 sm:px-6 py-32 flex flex-row justify-center items-start">

			{/* Search bar */}
			{/* <aside className="p-4 fixed top-0 left-auto md:left-0 z-30"> */}
			{/* 	<SearchBar */}
			{/* 		searchBarText={searchBarText} */}
			{/* 		setSearchBarText={setSearchBarText} */}
			{/* 	/> */}
			{/* </aside> */}

			{/* LHS */}
			<Apply className="-mt-32 pt-4 sticky top-0">
				<aside className="flex-shrink-0 hidden md:block w-64">

					<SearchBar
						searchBarText={searchBarText}
						setSearchBarText={setSearchBarText}
					/>

					{/* Contents */}
					<div style={{ height: tw(32 - 4 - 10) }} />
					<ul className="space-y-2">

						{/* Header */}
						<li>
							<Apply className="flex flex-row items-center">
								<p className="font-medium text-xs tracking-wider truncate text-gray-400">
									<Apply className="mr-1.5 transform scale-90 origin-left">
										<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
										{/* <svg viewBox="0 0 20 20" fill="currentColor" className="menu-alt2 w-4 h-4"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg> */}
									</Apply>
									{/* TABLE OF CONTENTS */}
									{"Adele – Hello".toUpperCase()}
								</p>
							</Apply>
						</li>

						{/* Subheaders */}
						{/* */}
						{/* NOTE: Uses pt-* because of space-y-*. */}
						<li className="pt-2">
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								Hello, it's me
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								I was wondering if after all these years you'd like to meet
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								To go over everything
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								They say that time's supposed to heal ya
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								But I ain't done much healing
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								Hello, can you hear me?
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								I'm in California dreaming about who we used to be
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								When we were younger and free
							</p>
						</li>
						<li>
							<p
								className="text-sm truncate text-gray-500"
								style={{
									// fontSize: tw(3.75),
									letterSpacing: "0.0125em",
								}}
							>
								I've forgotten how it felt before the world fell at our feet
							</p>
						</li>

					</ul>

				</aside>
			</Apply>

			{/* <main> */}
			<div className="flex-shrink-0 hidden md:block w-12" />
			<main className="w-full max-w-2xl">

				{searchBarText && (
					<DocumentTitle title={`Searching “${searchBarText}”`} />
				)}

				{/* {searchBarText && ( */}
				{/* 	<div className="relative"> */}
				{/* 		<div className="-mt-8 absolute top-0 inset-x-0"> */}
				{/* 			<DocumentTitle title={`Searching “${searchBarText}”`}> */}
				{/* 				<h1 ref={searchHeaderRef} className="font-bold text-4xl truncate text-gray-800"> */}
				{/* 					Searching “ */}
				{/* 					<span className="underline" style={{ textDecorationColor: "var(--teal-400)" }}> */}
				{/* 						{searchBarText.trim()} */}
				{/* 					</span> */}
				{/* 					” */}
				{/* 				</h1> */}
				{/* 			</DocumentTitle> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* )} */}

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
