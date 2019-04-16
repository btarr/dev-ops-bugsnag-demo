import React, { PureComponent } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import FullCalendar from 'fullcalendar-reactwrapper';
import LoadingState from '../common/LoadingState';

export default class CalendarPage extends PureComponent {
  componentWillMount() {
    this.fetchEvents();
  }
  
  fetchEvents() {
    this.setState({
      eventsFetching: true,
    })
    // use mock data
    this.eventsFetched([
      {
        title: 'dev ops presentation',
        start: '2019-04-16'
      },
    ]);
  }

  eventsFetched(events) {
    this.setState({
      eventsFetching: false,
      events: events
    })
  }

  render() {
    if (this.state.eventsFetching) {
      return <LoadingState />;
    }
    return (
      <Container>
        <Grid
          columns={1}
          stretched={true}
        >
          <Grid.Column>
            <FullCalendar
              id="main-calendar"
              header={{
                left: 'prev, next today myCustomButton',
                center: 'title',
                right: 'month,basicWeek,basicDay'
              }}
              navLinks={true}
              editable={true}
              eventLimit={true}
              events={this.state.events}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
