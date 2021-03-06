
import { Component } from "react";
import { Navigate } from "react-router-dom";

export class Protected extends Component {

	render() {
		const Component = this.props.component;
		const navigate = this.props.navigate;

		let isAuth;
		if (this.props.historyToken) {
			const localItems = JSON.parse(localStorage.getItem('items'));
			if (localItems) {
				isAuth = Boolean(localItems.data.questions);
			}
		} else {
			isAuth = Boolean(localStorage.getItem(this.props.localItem))
		}

console.log('asdsad');
		return (
			<div>
				{isAuth ? <Component navigate={navigate} /> : <Navigate to={this.props.address} replace />}
			</div>
		)
	}
}
