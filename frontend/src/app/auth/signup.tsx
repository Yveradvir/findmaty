import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FForm, FormikHelpers } from "formik";
import Danger from "@modules/components/danger";
import Layout from "@modules/components/layout";
import SpinnerButton from "@modules/components/submitspinner";
import { useNavigate } from "react-router-dom";
import { SignUpValidation, SignUpValues } from "@modules/validation/auth.yup";
import FindmatyApi from "@modules/utils/api.u";
import { AxiosError } from "axios";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [error, setErrors] = useState("");
    const initialValues: SignUpValues = {
        username: "",
        password: "",
        confirm_password: "",
        email: "",
    };

    const onSubmitHandler = async (values: SignUpValues, actions: FormikHelpers<SignUpValues>) => {
        actions.setSubmitting(true);        
        const _ = async () => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { confirm_password, ...body } = values;
                const response = await FindmatyApi.post("/auth/signup", body);
    
                if (response.status === 201) {
                    navigate("/home");
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response?.data.detail) {
                        setErrors(error.response.data.detail)
                    } else {
                        setErrors("Something went wrong . . .")
                    }
                }
            }
        };
        _();
        actions.setSubmitting(false);
    };

    return (
        <Layout>
            <div className="d-flex justify-content-center align-items-center h-100">
                <Card className="w-75">
                    <Card.Body>
                        <Card.Title className="text-center">Sign Up</Card.Title>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUpValidation}
                            onSubmit={onSubmitHandler}
                        >
                            {({ isSubmitting }) => (
                                <FForm noValidate>
                                    <Form.Group controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Enter username"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage name="username">
                                            {(msg) => <Danger text={msg} />}
                                        </ErrorMessage>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage name="password">
                                            {(msg) => <Danger text={msg} />}
                                        </ErrorMessage>
                                    </Form.Group>

                                    <Form.Group controlId="confirm_password">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Field
                                            type="password"
                                            name="confirm_password"
                                            placeholder="Confirm password"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage name="confirm_password">
                                            {(msg) => <Danger text={msg} />}
                                        </ErrorMessage>
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage name="email">
                                            {(msg) => <Danger text={msg} />}
                                        </ErrorMessage>
                                    </Form.Group>
                                    
                                    <SpinnerButton
                                        className="mt-2 w-100"
                                        text="Sign Up"
                                        type="submit"
                                        isSubmitting={isSubmitting}
                                    />
                                    {error && (<Danger text={error}/>)}
                                </FForm>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    );
};

export default SignUp;
