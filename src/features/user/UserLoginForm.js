import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import defaultAvatar from '../../app/assets/img/unicorn.png';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const handleLogin = (values, { resetForm }) => {
        const user = {
            id: new Date(Date.now()).toISOString(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password,
        };
        dispatch(setCurrentUser(user));
        setLoginModalOpen(false);
        resetForm();
    };
    const initialValues = {
        username: '',
        password: '',
    };
    return (
        <>
            <span className="navbar-text ml-auto">
                {currentUser ? (
                    <div style={{ width: '4rem', height: '4rem' }}>
                        <img src={currentUser.avatar} alt="user" style={{ width: '100%', height: '100%' }} />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => {
                            return setLoginModalOpen(true);
                        }}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className="fa fa-sign-in fa-lg" /> Login
                    </Button>
                )}
            </span>
            <Modal isOpen={loginModalOpen}>
                <ModalHeader
                    toggle={() => {
                        return setLoginModalOpen(false);
                    }}
                >
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik initialVlaues={initialValues} onSubmit={handleLogin} validate={validateUserLoginForm}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Field id="username" name="username" placeholder="Username" className="form-control" />
                                <ErrorMessage name="username">
                                    {(msg) => {
                                        return <p className="text-danger">{msg}</p>;
                                    }}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Field id="password" name="password" placeholder="Password" className="form-control" />
                                <ErrorMessage name="password">
                                    {(msg) => {
                                        return <p className="text-danger">{msg}</p>;
                                    }}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type="submit" and color="primary">
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};
export default UserLoginForm;
