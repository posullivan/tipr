import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { 
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from @aws-amplify/ui-react;


function App({SignOut}) {
  return (

    <View className="App">
      <Card>
        <Image src={logo} alt="logo" />
        <Heading>We now have authenication</Heading>  
      </Card>
      <Button onClick={SignOut}>Sign Out</Button>     
    </View>

  );
}
//import { a } from '@aws-amplify/backend';

export default withAuthenticator(App);
