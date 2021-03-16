import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import CardService from "../../service/spring-service";
import {Button, Form} from "react-bootstrap";


export default function Profile() {
    const [redirect, setRedirect] = useState(null);
    const [user, setUser] = useState({});
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");

    useEffect(() => {
        CardService.getCurrentUser().then(response => {
            setUser(response.data);
        });

        if (!user) setRedirect("/");
    }, []);

    if (redirect) {
        return <Redirect to={this.state.redirect}/>;
    }

    const onNameChangeSubmit = event => {
        CardService.changeName(user).then(r => {
            setUser(r.data)
        });
        event.preventDefault();
    }

    const onChangeEmail = event => {
        setUser({...user, fullName: event.target.value});
    }

    const onChangeOldPassword = event => {
        setOldPassword(event.target.value);
    }

    const onChangeNewPassword = event => {
        setNewPassword(event.target.value);
    }

    const onChangeReNewPassword = event => {
        setReNewPassword(event.target.value);
    }

    const onPasswordChangeSubmit = event => {
        if (newPassword === reNewPassword) {
            var copy = Object.assign({}, user, {password: oldPassword})
            changePass(copy, newPassword);
        } else {
            alert("passwords do not match")
        }
        event.preventDefault();
    }

    function changePass(inputData, newPass) {
        CardService.changePassword(inputData, newPass).then(r => {
            setUser(r.data)
        }).catch(error => {
            alert(error.response.data.message);
        });
    }

    return (
        <div className="container">
            <div>
                <header className="jumbotron d-flex flex-column justify-content-center text-center" style={{width: '70%', margin: '0 auto', background: '#fff'}}>
                    <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" style={{width: '60%', margin: '0 auto 20px'}}/>
                    <h3>
                        <strong>{user.fullName}`s</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Email:</strong>{" "}
                    {user.username}
                </p>
                <Form onSubmit={onNameChangeSubmit}>
                    <Form.Group>
                        <Form.Control
                            type={"text"}
                            value={user.fullName}
                            onChange={onChangeEmail}/>
                    </Form.Group>
                    <Button variant={"info"} type={"submit"}>
                        Change
                    </Button>
                </Form>
                <Form onSubmit={onPasswordChangeSubmit} className="mt-5">
                    <Form.Group>
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                            type={"password"}
                            value={oldPassword}
                            onChange={onChangeOldPassword}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type={"password"}
                            value={newPassword}
                            onChange={onChangeNewPassword}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Re New password</Form.Label>
                        <Form.Control
                            type={"password"}
                            value={reNewPassword}
                            onChange={onChangeReNewPassword}
                        />
                    </Form.Group>
                    <Button variant={"info"} type={"submit"}>
                        Change
                    </Button>
                </Form>
            </div>
        </div>
    );
}