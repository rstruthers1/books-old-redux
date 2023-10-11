import {FaTrash, FaPencilAlt} from "react-icons/fa";
import {Card, Modal} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import ConfirmModal from "../modals/ConfirmModal";
import {useState} from "react";
import {connect} from "react-redux";
import {deleteBook} from "../../actions/books";


const BookShow = ({book, deleteBook}) => {
    const [deleteConfirmModalShow, setDeleteConfirmModalShow] = useState(false);
    const handleDeleteClicked = (ev) => {
        ev.preventDefault()
        setDeleteConfirmModalShow(true)
    }

    const handleDeleteConfirmed = () => {
        deleteBook(book.id).then(result => {
            console.log("book deleted")
        }).catch(e => {
            console.log(e);
        });
    }

    const handleDeleteConfirmModalClose = () => {
        setDeleteConfirmModalShow(false);
    }


    return (<>
            <Card style={{width: '16rem'}} className="book-show">
                <span style={{position: "absolute", top: "2px", right: "2px"}}>
                     <LinkContainer to={`/books/update/${book.id}`}>
                         <a href="">
                            <FaPencilAlt/>
                         </a>

                     </LinkContainer>
                    &nbsp;
                    <a href="" onClick={handleDeleteClicked} style={{marginLeft: "5px"}}>
                            <FaTrash/>
                         </a>

                </span>
                <br/>
                <Card.Title>{book.title}</Card.Title>
            </Card>
            <ConfirmModal show={deleteConfirmModalShow}
                      onHide={handleDeleteConfirmModalClose}
                      title="Delete Warning"
                      message={`Are you sure you want to delete "${book.title}"?`}
                      yesButtonMessage="Yes, Delete"
                      yesAction={handleDeleteConfirmed}/>

        </>)
}

export default connect(null, { deleteBook })(BookShow);
