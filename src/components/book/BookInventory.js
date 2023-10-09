import {Container, Row} from "react-bootstrap";
import { connect } from "react-redux";
import {
    retrieveBooks
} from "../../actions/books";
import {useEffect} from "react";
import BookList from "./BookList";

function BookInventory(props) {


    useEffect(() => {
        props.retrieveBooks()
    }, []);

    return (
        <Container>
            <h1 className="text-center">Books</h1>
            <Row>
                <BookList books={props.books}/>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
};

export default connect(mapStateToProps, {
    retrieveBooks
})(BookInventory);
