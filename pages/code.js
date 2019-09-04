import React, {useEffect, useRef, useState } from 'react';
import { Input } from 'antd';


const initUsers = [
	{
		id: 1,
		name: 'kjt',
		email: 'kjt@naver.com'
	},
	{
		id: 2,
		name: 'kjt2',
		email: 'kjt@naver.com'
	}
];


const UserList = ({ users }) => {
	return (
		<div>
			<h1>
				UserList
			</h1>
			{users && users.map(user => <User user={user}/>)}
		</div>
	);
};


const User = ({ user }) => {
	return (
		<div>
			Name: {user.name}
		</div>
	);
};


const UserListContainer = (props) => {
	const [users, setUsers] = useState([]);
	useEffect(()=>{

	})

	const ref = useRef();

	return (
		<React.Fragment>
			<Input placeholder="사용자명을 입력해주세요"
				   onchange={e => console.log(e)}
				   style={{marginTop: 32}}/>
			<UserList users={users}/>
		</React.Fragment>
	);
};

export default UserListContainer
0