import {FaTrash, FaPencilAlt} from "react-icons/fa";
import {Card, Modal} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const BookShow = ({book}) => {

    return (<>
            <Card style={{width: '16rem'}} className="book-show">
                <span style={{position: "absolute", top: "2px", right: "2px"}}>
                     <LinkContainer to={`/books/update/${book.id}`}>
                         <a href="">
                            <FaPencilAlt/>
                         </a>

                     </LinkContainer>
                    &nbsp;
                         <a href="">
                            <FaTrash/>
                         </a>

                </span>
                <br/>
                <Card.Title>{book.title}</Card.Title>
            </Card>

        </>)
}

export default BookShow;
