import Apply from "lib/x/Apply"
import ApplyTransition from "lib/x/ApplyTransition"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import noopTextContent from "./noopTextContent"
import React from "react"
import ReactDOM from "react-dom"
import Transition from "lib/x/Transition"
import tw from "./tw"
import useBlockEditor from "./useBlockEditor"

import "./index.css"

const FilterBar = ({ state, dispatch }) => {
	const [filter, setFilter] = React.useState("")

	// Debounces filter -> state.filter.
	React.useEffect(() => {
		const id = setTimeout(() => {
			dispatch({
				type: "UPDATE_FILTER",
				filter,
			})
		}, 200)
		return () => {
			clearTimeout(id)
		}
	}, [dispatch, filter])

	return (
		<Transition
			on={filter}
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
								style={{ color: filter && "hsl(200, 100%, 50%)" }}
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
							value={filter}
							onChange={e => setFilter(e.target.value)}
							{...disableAutoCorrect}
						/>
					</Apply>
				</ApplyTransition>

				{/* LHS */}
				<div className="absolute inset-y-0 right-0 pointer-events-none">
					<Transition
						on={filter}
						className="transition duration-200 ease-in-out"
						from="opacity-0 transform scale-50 pointer-events-none"
						to="opacity-100 transform scale-100 pointer-events-auto"
					>
						<button
							className="flex flex-row justify-center items-center w-12 h-12 text-gray-300 hover:text-gray-800 focus:text-gray-800 rounded-full focus:outline-none"
							onClick={e => {
								const search = document.getElementById("search")
								search.focus()
								setFilter("")
							}}
							aria-label="Clear filter"
						>
							<svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
							{/* <svg viewBox="0 0 20 20" fill="currentColor" className="x w-4 h-4"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg> */}
						</button>
					</Transition>
				</div>

			</div>
		</Transition>
	)
}

// Ascends to the nearest element.
function ascendElement(node) {
	if (node.nodeType === Node.TEXT_NODE && node.parentElement) {
		return node.parentElement
	}
	return node
}

// Descends to the deepest text node.
function descendTextNode(node) {
	while (node && node.nodeType !== Node.TEXT_NODE && node.childNodes.length) {
		node = node.childNodes[0]
	}
	return node
}

// Converts a DOM range fragment.
function convFragment([node, offset]) {
	const key = ascendElement(node).closest("[id][data-node]").id
	return { key, offset }
}

// Gets the current from the DOM range.
function getCurrentRange() {
	const s = document.getSelection()
	if (!s.rangeCount) {
		return null
	}
	const r = s.getRangeAt(0)
	const start = convFragment([r.startContainer, r.startOffset])
	let end = start
	if (!r.collapsed) {
		end = convFragment([r.endContainer, r.endOffset])
	}
	return { start, end }
}

// const [scrollYBeforeSearchBarChange, setScrollYBeforeSearchBarChange] = React.useState(0)
// const [searchBarText, setSearchBarText] = React.useState("")
//
// // Effect for auto-scrolling on searchBarText.
// React.useEffect(() => {
// 	if ([...searchBarText].length <= 1 && window.scrollY) {
// 		setScrollYBeforeSearchBarChange(window.scrollY)
// 	}
// 	const id = setTimeout(() => {
// 		if (!searchBarText) {
// 			window.scrollTo(0, scrollYBeforeSearchBarChange)
// 		} else {
// 			window.scrollTo(0, 0)
// 		}
// 	}, 200)
// 	return () => {
// 		clearTimeout(id)
// 	}
// }, [searchBarText])

;(() => {
	noopTextContent()
})()

const ReactDocument = ({ state, dispatch }) => (
	// TODO: Add support for each.type.
	state.document.map(each => (
		<p
			key={each.key}
			id={each.key}
			className="leading-relaxed text-gray-800 border"
			style={{
				minHeight: "1em",
				fontSize: tw(4.25),
			}}
			data-node
		>
			{each.props.children}
		</p>
	))
)

const BlockEditorApp = () => {
	const articleRef = React.useRef(null)

	const [state, dispatch] = useBlockEditor()

	// Rerenders the document and cursors.
	React.useLayoutEffect(
		React.useCallback(() => {
			const s = document.getSelection()
			s.removeAllRanges()
			ReactDOM.render(<ReactDocument state={state} dispatch={dispatch} />, articleRef.current, () => {
				if (!state.focused) {
					// No-op
					return
				}
				try {
					const [s, r] = [document.getSelection(), document.createRange()]
					r.setStart(descendTextNode(document.getElementById(state.range.start.key)), state.range.start.offset)
					r.setEnd(descendTextNode(document.getElementById(state.range.end.key)), state.range.end.offset)
					s.addRange(r)
				} catch (error) {
					console.error(`BlockEditorApp.ReactDOM.render: ${error}`)
				}
			})
		}, [state, dispatch]),
		[state.rerenderDocument],
	)

	return (
		<div className="px-4 sm:px-6 py-32 flex flex-row justify-center items-start">

			{/* LHS */}
			<Apply className="-mt-32 pt-32 sticky top-0">
				<aside className="flex-shrink-0 hidden md:block w-64">

					<FilterBar
						state={state}
						dispatch={dispatch}
					/>

				</aside>
			</Apply>

			{/* <article> */}
			<div className="flex-shrink-0 hidden md:block w-12" />
			<DocumentTitle title={!state.filter ? "TODO" : `Filtering for “${state.filter}”`}>
				<div>
					<article
						ref={articleRef}
						className="max-w-2xl w-full focus:outline-none"

						onFocus={e => {
							dispatch({
								type: "FOCUS",
							})
						}}

						onBlur={e => {
							dispatch({
								type: "BLUR",
							})
						}}

						onSelect={e => {
							const range = getCurrentRange()
							if (!range) {
								// No-op
								return
							}
							dispatch({
								type: "SELECT",
								range,
							})
						}}

						onKeyDown={e => {
							// console.log({ key: e.key })

							switch (true) {
							case e.key === "Backspace":
							case e.ctrlKey && e.key === "d":
								e.preventDefault()
								return
							case e.key === "Delete":
								e.preventDefault()
								return
							case e.key === "Enter":
								e.preventDefault()
								return
							default:
								// No-op
								break
							}
						}}

						onInput={e => {
							const range = getCurrentRange()
							// if (!range) {
							// 	throw new Error(`BlockEditorApp.onInput: no such range; range=${range}`)
							// }
							// if (range.start !== range.end) {
							// 	throw new Error(`BlockEditorApp.onInput: range not collapsed; range=${JSON.stringify(range)}`)
							// }
							const collapsedRange = range
							const children = document.getElementById(collapsedRange.start.key).innerText
							dispatch({
								type: "UNCONTROLLED_INPUT",
								children,
								collapsedRange,
							})
						}}

						contentEditable
						suppressContentEditableWarning
					/>

					{process.env.NODE_ENV !== "production" && (
						<div className="mt-6">
							<p className="whitespace-pre-wrap text-sm leading-tight font-mono" style={{ tabSize: 2 }}>
								{JSON.stringify(state, null, "\t")}
							</p>
						</div>
					)}

				</div>
			</DocumentTitle>

			{/* RHS */}
			<div className="flex-shrink-0 hidden xl:block w-12" />
			<aside className="flex-shrink-0 hidden xl:block w-64" />

		</div>
	)
}

// const FakeContent = () => (
// 	<>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales dolor, rutrum gravida dolor. Cras molestie ornare nisl, ac lobortis neque condimentum a. Integer eu purus magna. Morbi nec congue ipsum. Vestibulum sed metus enim. Integer massa nulla, molestie in rutrum non, interdum ac nisl. Duis blandit rhoncus leo in volutpat. Donec placerat ante ut urna accumsan, nec egestas nulla faucibus.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Mauris pellentesque sodales ex, ut commodo diam rhoncus a. Proin quis velit risus. Praesent est elit, cursus vitae enim ac, volutpat cursus odio. Nulla vehicula nisi nec diam rhoncus lacinia. Pellentesque mattis nunc at sollicitudin viverra. Ut semper mi nec mauris malesuada lacinia eget id mauris. Quisque condimentum lorem purus. Ut purus nulla, pretium at mi at, porta rhoncus neque. Mauris fermentum diam a lectus sagittis, a ultricies diam pharetra. Integer vulputate arcu porta viverra pretium. Nullam mattis fermentum nisi, in pellentesque lorem suscipit quis.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Phasellus sit amet libero lorem. Vivamus non dignissim erat. Duis vel orci ultrices, laoreet mi id, ultrices nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam interdum diam aliquam tortor molestie pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tristique turpis at placerat porta. Phasellus faucibus odio diam, a bibendum neque volutpat ut. Morbi dictum rhoncus malesuada. Donec commodo nec sapien ut auctor. Ut eget eros sit amet massa egestas commodo a vel erat. Aliquam erat volutpat. Praesent non sodales orci. Suspendisse potenti.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Nam vitae tellus malesuada, aliquet elit ut, auctor sapien. Praesent at mi vel metus laoreet sodales. Ut vehicula, odio bibendum mollis imperdiet, nisl tellus iaculis purus, eu ultricies nisi augue a dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper enim cursus, consectetur erat nec, viverra dolor. Duis eget commodo ligula, nec finibus massa. Aliquam sed ante in eros fermentum vehicula id vel est. Duis massa turpis, vehicula et neque vitae, laoreet placerat justo. Vivamus id eleifend velit. Nam semper risus ac nunc condimentum commodo. Proin placerat metus a imperdiet convallis. Duis eu quam non nunc condimentum elementum sit amet eget purus. Duis dictum turpis ligula, in pellentesque enim ullamcorper facilisis. Nullam dapibus metus nec metus consectetur, quis sagittis purus eleifend.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Pellentesque vestibulum, erat eu facilisis pulvinar, magna diam consequat sem, in bibendum quam ex ac tellus. Vivamus rutrum arcu sem, vestibulum tristique urna porttitor sit amet. Aliquam id consequat ex. Morbi dignissim dolor sit amet justo dapibus, ac lacinia elit mattis. Quisque varius imperdiet massa ac molestie. Cras sed eros odio. Duis vulputate scelerisque est vulputate sollicitudin. Duis tincidunt, quam quis feugiat porta, quam ipsum malesuada nisi, in posuere orci enim sed purus.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales dolor, rutrum gravida dolor. Cras molestie ornare nisl, ac lobortis neque condimentum a. Integer eu purus magna. Morbi nec congue ipsum. Vestibulum sed metus enim. Integer massa nulla, molestie in rutrum non, interdum ac nisl. Duis blandit rhoncus leo in volutpat. Donec placerat ante ut urna accumsan, nec egestas nulla faucibus.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Mauris pellentesque sodales ex, ut commodo diam rhoncus a. Proin quis velit risus. Praesent est elit, cursus vitae enim ac, volutpat cursus odio. Nulla vehicula nisi nec diam rhoncus lacinia. Pellentesque mattis nunc at sollicitudin viverra. Ut semper mi nec mauris malesuada lacinia eget id mauris. Quisque condimentum lorem purus. Ut purus nulla, pretium at mi at, porta rhoncus neque. Mauris fermentum diam a lectus sagittis, a ultricies diam pharetra. Integer vulputate arcu porta viverra pretium. Nullam mattis fermentum nisi, in pellentesque lorem suscipit quis.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Phasellus sit amet libero lorem. Vivamus non dignissim erat. Duis vel orci ultrices, laoreet mi id, ultrices nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam interdum diam aliquam tortor molestie pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tristique turpis at placerat porta. Phasellus faucibus odio diam, a bibendum neque volutpat ut. Morbi dictum rhoncus malesuada. Donec commodo nec sapien ut auctor. Ut eget eros sit amet massa egestas commodo a vel erat. Aliquam erat volutpat. Praesent non sodales orci. Suspendisse potenti.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Nam vitae tellus malesuada, aliquet elit ut, auctor sapien. Praesent at mi vel metus laoreet sodales. Ut vehicula, odio bibendum mollis imperdiet, nisl tellus iaculis purus, eu ultricies nisi augue a dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper enim cursus, consectetur erat nec, viverra dolor. Duis eget commodo ligula, nec finibus massa. Aliquam sed ante in eros fermentum vehicula id vel est. Duis massa turpis, vehicula et neque vitae, laoreet placerat justo. Vivamus id eleifend velit. Nam semper risus ac nunc condimentum commodo. Proin placerat metus a imperdiet convallis. Duis eu quam non nunc condimentum elementum sit amet eget purus. Duis dictum turpis ligula, in pellentesque enim ullamcorper facilisis. Nullam dapibus metus nec metus consectetur, quis sagittis purus eleifend.
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{
// 				fontSize: tw(4.25),
// 				lineHeight: 1,
// 			}}
// 		>
// 			<br />
// 		</p>
// 		<p
// 			className="leading-relaxed text-gray-800"
// 			style={{ fontSize: tw(4.25) }}
// 		>
// 			Pellentesque vestibulum, erat eu facilisis pulvinar, magna diam consequat sem, in bibendum quam ex ac tellus. Vivamus rutrum arcu sem, vestibulum tristique urna porttitor sit amet. Aliquam id consequat ex. Morbi dignissim dolor sit amet justo dapibus, ac lacinia elit mattis. Quisque varius imperdiet massa ac molestie. Cras sed eros odio. Duis vulputate scelerisque est vulputate sollicitudin. Duis tincidunt, quam quis feugiat porta, quam ipsum malesuada nisi, in posuere orci enim sed purus.
// 		</p>
// 	</>
// )

export default BlockEditorApp
