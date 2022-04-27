import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddBookModal extends React.Component {
	formRef = React.createRef();
	state = {
		visible: false,
	};

	onFinish = (values) => {
		const url = "api/v1/books/";
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				if (data.ok) {
					this.handleCancel();

					return data.json();
				}
				throw new Error("Network error.");
			})
			.then(() => {
				this.props.reloadBooks();
			})
			.catch((err) => console.error("Error: " + err));
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New Book ..."
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="name"
							label="Title"
							rules={[
								{ required: true, message: "Please input book title" },
							]}
						>
							<Input placeholder="Input book's title" />
						</Form.Item>

						<Form.Item
							name="author"
							label="Author"
							rules={[
								{ required: true, message: "Please input book author" },
							]}
						>
							<Input placeholder="Input book author" />
						</Form.Item>

						<Form.Item
							name="rating"
							label="Rating"
							rules={[
								{
									required: true,
									message: "Please input book rating!",
								},
							]}
						>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default AddBookModal;