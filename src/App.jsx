import Profile from "./components/profile";
import UserList from "./components/users";
import UserState from "./context/user/user_state";
import { Container, Row, Column, Grid } from '@material-ui/core'

function App() {
  return (
    <UserState>
      <Grid container>
        <Grid item xs={6}>
          <UserList />
        </Grid>
        <Grid item xs={6}>
          <Profile />
        </Grid>
      </Grid>
    </UserState>
  );
}

export default App;
