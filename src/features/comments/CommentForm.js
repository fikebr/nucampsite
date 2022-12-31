import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';
import { addComment } from './commentsSlice';

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const initialValues = {
        rating: '',
        author: '',
        commentText: '',
        campsiteId: parseInt(campsiteId),
    };
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(values.campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString(),
        };
        console.log(comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button
                outline
                onClick={() => {
                    return setModalOpen(true);
                }}
            >
                <i className="fa fa-pencil fa-lg" /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader
                    toggle={() => {
                        return setModalOpen(false);
                    }}
                >
                    Add Comment
                </ModalHeader>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateCommentForm}>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Field name="rating" as="select" className="form-control">
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                            <ErrorMessage name="rating">
                                {(msg) => {
                                    return <p className="text-danger">{msg}</p>;
                                }}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="author">Your Name</Label>
                            <Field name="author" placeholder="Your Name" className="form-control" />
                            <ErrorMessage name="author">
                                {(msg) => {
                                    return <p className="text-danger">{msg}</p>;
                                }}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="commentText">Comment</Label>
                            <Field name="commentText" as="textarea" rows="12" className="form-control" />
                        </FormGroup>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};

export default CommentForm;
