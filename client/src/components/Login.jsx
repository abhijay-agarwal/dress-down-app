/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { IconAlertCircle } from '@tabler/icons-react';
// import the rubik font
import '@fontsource/rubik';
import {
  Container,
  Title,
  TextInput,
  PasswordInput,
  Paper,
  Text,
  Button,
  Alert,
  Space,
  Image,
  Center,
  Stack,
  Group,
  Checkbox
} from '@mantine/core';


function Login() {
  const [loginError, setLoginError] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6
        ? 'Password should include at least 6 characters'
        : null),
    },
  });

  return (
    <Container size={420} my={100}>
      <Title
        color="white"
        align="center"
        size={60}
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to
      </Title>
      <Title
        color="white"
        align="center"
        size={30}
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Dress Down (placeholder)
      </Title>

      <Paper withBorder shadow="md" p={30} mt={100} radius="md">

        <form onSubmit={null}>
          <TextInput
            size="sm"
            label="Email"
            placeholder="you@upenn.edu"
            variant="filled"
            required
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />
          <PasswordInput
            size="sm"
            label="Password"
            placeholder="Your password"
            variant="filled"
            required
            mt="md"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={
              form.errors.password
              && 'Password should include at least 6 characters'
            }
            radius="md"
          />
          {/* {<Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Link
              component={Link}
              to="/home"
              style={{
                fontFamily: 'Rubik',
                fontSize: 14,
                fontWeight: 400,
                color: '#288CE4',
              }}
            >
              Forgot password?
            </Link>
          </Group>} */}
          <Button size="md" type="submit" fullWidth mt="lg" radius="md">
            Sign in
          </Button>
        </form>
        <Text fz={14} align="center" mt={20}>
          Don&#39;t have an account yet?
          {' '}
          <Link
            component={Link}
            to="/register"
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#288CE4',
            }}
          >
            Create account.
          </Link>
        </Text>
        {loginError
          && (
            <>
              <Space h="md" />
              <Alert icon={<IconAlertCircle size="1rem" />} title="Invalid Login!" color="red">
                Please try again
              </Alert>
            </>
          )}
      </Paper>

    </Container>
  );
}

export default Login;