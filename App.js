import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'react-native'
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

