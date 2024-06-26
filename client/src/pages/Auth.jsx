import React from 'react';
// import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'utils/rout_consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
          <Row className="mt-3 pl-3 d-flex justify-content-between">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink className="ml-3" to={REGISTRATION_ROUTE}>
                  Зарегестрируйся!
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink className="ml-3" to={LOGIN_ROUTE}>
                  Войдите!
                </NavLink>
              </div>
            )}

            <Button variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
export default Auth;
