import { registerRootComponent } from 'expo';
import App from './src/app/App';

/**
 * registerRootComponent ensures:
 * - App is correctly registered on Android & iOS
 * - App works in Expo Go and production builds (APK)
 * - No manual AppRegistry setup required
 */
registerRootComponent(App);
