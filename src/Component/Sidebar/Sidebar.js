import React, {useState} from 'react'

import plus from '../../Assets/plus.png'

import './Sidebar.css'

function Sidebar(props) {
	const colors = ["#715EF8", "#A185F5", "#CAB7FD", "#F4ECFF", "#E3D3EF"];

	const [listOpen, setListOpen] = useState(false);

	return (
		<div className='sidebar'>
			<img src={plus} alt='plus' onClick={()=>setListOpen(!listOpen)}/>
			<ul className={`sidebar_list ${listOpen?"sidebar_list_active":''}`}>
				{
					colors.map((item, index)=><li key={index} className="sidebar_list_item" style={{backgroundColor:item}} onClick={()=>props.addNote(item)}/>)
				}
				
			</ul>
			
		</div>
	)
}

export default Sidebar
