import React from 'react';

import SubItem from './SubItem';

const SubMenu = (props) => {
	const menu = props.data.find((item) => item.name === props.match.params.name);
	console.log(menu);

	return (
		<div className={`sub-menu ${menu.name}`}>
			<SubItem subLinks={menu.subLinks} />
		</div>
	);
};

export default SubMenu;
