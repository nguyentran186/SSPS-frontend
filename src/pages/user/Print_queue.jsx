import * as React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext, Link } from "react-router-dom";
import TableCell from "../../components/Datatables/TableCell";
import Datatables from "../../components/Datatables/Table";


function Print_queue({ ...props }) {


	const [sidebarToggle] = useOutletContext();

	const [loading] = React.useState(false);
	const dataHeader = [
		{
			label: "Còn 1 phút nữa",
		}
	];
	const data = [
		{
			id: 1,
			content: "Đang đợi...",
			tag: 0
		},
		{
			id: 2,
			content: "Đang đợi...",
			tag: 0
		}, {
			id: 3,
			content: "Đang đợi...",
			tag: 0
		}, {
			id: 4,
			content: "Đang đợi...",
			tag: 0
		}, {
			id: 5,
			content: "Đang đợi...",
			tag: 0
		}, {
			id: 6,
			content: "Đang đợi...",
			tag: 0
		},
		{
			id: 7,
			content: "Các file của bạn ở đây",
			tag: 1
		},
		{
			id: 8,
			content: "Đang đợi...",
			tag: 0
		},
		{
			id: 9,
			content: "Đang đợi...",
			tag: 0
		},
		{
			id: 10,
			content: "Đang đợi...",
			tag: 0
		},
	];

	return (
		<>
			<main className="h-full">
				<Navbar toggle={sidebarToggle} />
				<main className="h-full">
					<div className="px-2 mx-auto mainCard h-full overflow-hidden">
						<div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-6 h-full overflow-hidden">
							<div className="h-auto md:col-start-1 md:col-span-2 flex flex-col justify-top overflow-hidden">
								<b className="md:pb-5">Danh sách đợi</b>
								<div className="border w-full">
									<Datatables dataHeader={dataHeader} className='bg-[#D9F99D]'>
									{data?.map((row, index) => (
										<tr
											key={index}
											className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5">
												<TableCell className={row.tag ? 'bg-[#D9F99D]' : 'bg-emerald-400'}>
													<p className="font-normal text-gray-900 ">{row.content}</p>
												</TableCell>
										</tr>
									))}
									</Datatables>

								</div>
							</div>

						</div>
					</div>
				</main>

			</main >
		</>
	);
}

export default Print_queue;