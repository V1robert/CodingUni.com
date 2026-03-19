import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, InputGroup, Row, Spinner} from 'react-bootstrap';
import {useLoginMutation, useRegisterMutation} from '../../api/userApi';
import {useDispatch} from 'react-redux';
import {setUser} from '../../config/store/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {FaEnvelope, FaLock} from 'react-icons/fa';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('en');
    const [validated, setValidated] = useState(false);

    const [login, {isLoading: isLoginLoading, error: loginError}] = useLoginMutation();
    const [register, {isLoading: isRegisterLoading, error: registerError}] = useRegisterMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);

        try {
            if (isLogin) {
                const result = await login({email, password}).unwrap();
                dispatch(setUser(result));
                navigate('/');
            } else {
                const result = await register({email, password, preferredLanguage}).unwrap();
                dispatch(setUser(result));
                navigate('/');
            }
        } catch (err) {
            console.error('Failed to authenticate:', err);
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setValidated(false);
    };

    const isLoading = isLoginLoading || isRegisterLoading;
    const error = isLogin ? loginError : registerError;

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
            <Row className="w-100 justify-content-center">
                <Col md={8} lg={5} xl={4}>
                    <Card className="shadow-lg border-0 fade-in-item"
                          style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(15px)',
                              WebkitBackdropFilter: 'blur(15px)',
                              borderRadius: '1.5rem',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}>
                        <Card.Body className="p-5 text-center">
                            <div className="mb-4">
                                <div className="display-4 text-primary mb-2">
                                    <FaLock className="mb-3"/>
                                </div>
                                <h2 className="fw-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Join Us'}</h2>
                                <p className="text-white-50">{isLogin ? 'Please enter your login details' : 'Create an account to start learning'}</p>
                            </div>

                            <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="text-white-50">Email Address</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text className="bg-dark border-secondary text-white-50">
                                            <FaEnvelope/>
                                        </InputGroup.Text>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-dark border-secondary text-white"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPassword">
                                    <Form.Label className="text-white-50">Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text className="bg-dark border-secondary text-white-50">
                                            <FaLock/>
                                        </InputGroup.Text>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-dark border-secondary text-white"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password is required.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                {!isLogin && (
                                    <Form.Group className="mb-4" controlId="formLanguage">
                                        <Form.Label className="text-white-50">Preferred Language</Form.Label>
                                        <Form.Select
                                            value={preferredLanguage}
                                            onChange={(e) => setPreferredLanguage(e.target.value)}
                                            className="bg-dark border-secondary text-white"
                                        >
                                            <option value="en">English</option>
                                            <option value="it">Italian</option>
                                            <option value="fr">French</option>
                                        </Form.Select>
                                    </Form.Group>
                                )}

                                {error && (
                                    <div className="alert alert-danger py-2 mb-4" role="alert"
                                         style={{fontSize: '0.85rem'}}>
                                        {'Authentication failed. Please try again.'}
                                    </div>
                                )}

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 py-3 mb-4 fw-bold rounded-pill"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Spinner as="span" animation="border" size="sm" role="status"
                                                     aria-hidden="true" className="me-2"/>
                                            Please wait...
                                        </>
                                    ) : (
                                        isLogin ? 'Login' : 'Sign Up'
                                    )}
                                </Button>

                                <div className="text-center text-white-50">
                                    {isLogin ? (
                                        <>
                                            Don't have an account?{' '}
                                            <Button variant="link"
                                                    className="p-0 text-primary text-decoration-none fw-bold"
                                                    onClick={toggleMode}>
                                                Register
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            Already have an account?{' '}
                                            <Button variant="link"
                                                    className="p-0 text-primary text-decoration-none fw-bold"
                                                    onClick={toggleMode}>
                                                Log in
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;