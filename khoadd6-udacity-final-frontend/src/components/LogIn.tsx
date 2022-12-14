import * as React from 'react'
import Auth from '../auth/Auth'
import {Button, Container, Header, Icon} from 'semantic-ui-react'

interface LogInProps {
    auth: Auth
}

interface LogInState {
}

export class LogIn extends React.PureComponent<LogInProps, LogInState> {
    onLogin = () => {
        this.props.auth.login()
    }

    render() {
        return (
            <div>
                <Container text>
                    <Header
                        as='h1' color='orange'
                        content='Wellcom to TODO Management'
                        inverted
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '1em',
                        }}
                    />
                    <Header
                        as='h2' color='brown'
                        content='Please login to start TODO Tasks'
                        inverted
                        style={{
                            fontSize: '1.5em',
                            fontWeight: 'normal',
                            marginTop: '1.5em',
                        }}
                    />
                    <Button primary size='huge' onClick={this.onLogin}>
                        Log in
                        <Icon name='arrow right'/>
                    </Button>
                </Container>
            </div>
        )
    }
}
