import * as React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext, Link } from "react-router-dom";
import Select from 'react-select'


function Printer_select({ ...props }) {

	const OPTIONS = [
		{ label: 'A04 - 301', value: '1' },
		{ label: 'A04 - 302', value: '2' },
		{ label: 'A04 - 501', value: '3' },
		{ label: 'B01 - 201', value: '4' },
		{ label: 'B03 - 201', value: '5' },
		{ label: 'B04 - 201', value: '6' },
		{ label: 'B04 - 202', value: '7' },
		{ label: 'B04 - 501', value: '8' }
	];

	const handleButtonClick = () => {
		console.log("Button clicked"); // Debugging
	};


	const [sidebarToggle] = useOutletContext();

	return (
		<>
			<main className="h-full">
				<Navbar toggle={sidebarToggle} />

				<main className="h-full">
					<div className="px-2 mx-auto mainCard h-full overflow-hidden">
						<div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-6 h-full overflow-hidden">
							<div className="h-auto md:col-start-1 md:col-span-3 flex flex-col justify-top overflow-hidden">
								<b>Chọn máy in</b>
								<Select className="md:pt-3 rounded-lg focus:outline-none focus:border-emerald-400"
									options={OPTIONS}
									getOptionLabel={(OPTIONS) => OPTIONS.label}
									placeholder="Chọn máy in"
									components={{
										IndicatorSeparator: () => null
									}} />
								<div className="md:pt-7 md:col-start-3 flex flex-col overflow-hidden items-end">
									<Link to="/user/printQueue">
										<button onClick={handleButtonClick} className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
											In ngay
										</button>
									</Link>
								</div>
							</div>

							{/* <div className="md:col-start-5 md:col-span-2 h-full overflow-hidden">
								<AchievementWidget className="md:row-span-2" />
							</div> */}
						</div>
					</div>
				</main>

			</main>
		</>
	);
}

export default Printer_select;