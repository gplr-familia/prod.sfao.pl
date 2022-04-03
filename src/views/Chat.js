import React, {PureComponent} from 'react';
import {OTPublisher, OTSubscriber, createSession, preloadScript} from 'opentok-react';
import axios from '../providers/axios';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class Chat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
      token: undefined,
      sessionId: undefined,
      sessionHelper: undefined,
      streams: []
    };
  }

  componentWillMount() {
    axios().post('chat/token', {
      user: this.state.userId
    }).then(({data}) => {
      this.setState({token: data.token, sessionId: data.session}, () => {
        this.createSession();
      });
    }).catch(e => console.log(e));
  }

  componentWillUnmount() {
    this.state.sessionHelper.disconnect();
  }

  createSession() {
    const sessionHelper = createSession({
      apiKey: '46418702',
      sessionId: this.state.sessionId,
      token: this.state.token,
      onStreamsUpdated: streams => {
        this.setState({streams});
      }
    });

    this.setState({sessionHelper});
  }

  render() {
    if (!this.state.sessionHelper) {
      return (<div></div>);
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Card style={{width: '50%', marginRight: '1em'}}>
          <CardContent>
            <OTPublisher properties={{
              width: '100%',
              height: '600px'
            }} session={this.state.sessionHelper.session}/>
          </CardContent>
        </Card>

        <Card style={{width: '50%', marginLeft: '1em'}}>
          <CardContent>
            {this.state.streams.map(stream => {
              return (
                <OTSubscriber
                  properties={{
                    width: '100%',
                    height: '600px'
                  }}
                  key={stream.id}
                  session={this.state.sessionHelper.session}
                  stream={stream}
                />
              );
            })}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default preloadScript(Chat);
