import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByStatus, FilterStatus } from '../../filters.slice';
import './StatusFilter.styles.scss';
const StatusFilter = () => {
	const dispatch = useDispatch();
	const currentStatus = useSelector((state) => state.filters.status);
	const handleChangeStatus = (status) => {
		dispatch(filterByStatus(status));
	};
	const statusOptions = Object.entries(FilterStatus).map(([status, name]) => (
		<li key={status}>
			<button
				className={status === currentStatus ? 'is-active' : ''}
				onClick={() => handleChangeStatus(status)}
			>
				{name}
			</button>
		</li>
	));
	return (
		<div className="footer-widget footer-widget--status-filter">
			<h3 className="footer-widget__title">Filter By Status</h3>
			<ul>{statusOptions}</ul>
		</div>
	);
};

export default StatusFilter;
