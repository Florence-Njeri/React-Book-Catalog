import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddBookModal from "./AddBookModal";

class Books extends React.Component {
    columns = [
		{
			title: "Title",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Author",
			dataIndex: "author",
			key: "author",
		},
		{
			title: "Rating",
			dataIndex: "rating",
			key: "rating",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this book?"
					onConfirm={() => this.deleteBook(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];
    state = {
		books: [],
	};
    componentDidMount() {
		this.loadBooks();
	}

    loadBooks = () => {
        const url = "api/v1/books/index";
        fetch(url)
          .then((data) => {
            if (data.ok) {
              return data.json();
            }
            throw new Error("Network error.");
          })
          .then((data) => {
            data.forEach((book) => {
              const newEl = {
                key: book.id,
                id: book.id,
                name: book.name,
                author: book.author,
                rating: beer.rating
              };
      
              this.setState((prevState) => ({
                books: [...prevState.books, newEl],
              }));
            });
          })
          .catch((err) => message.error("Error: " + err));
      };

      reloadBooks = () => {
        this.setState({ books: [] });
        this.loadBooks();
      };

      deleteBook = (id) => {
        const url = `api/v1/books/${id}`;
      
        fetch(url, {
          method: "delete",
        })
          .then((data) => {
            if (data.ok) {
              this.reloadBooks();
              return data.json();
            }
            throw new Error("Network error.");
          })
          .catch((err) => message.error("Error: " + err));
      };
      render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.books}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddBookModal reloadBeers={this.reloadBooks} />
			</>
		);
	}
}
export default Books;