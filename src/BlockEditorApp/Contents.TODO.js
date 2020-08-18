const Contents = () => (
	false && (
		<>
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
		</>
	)
)
