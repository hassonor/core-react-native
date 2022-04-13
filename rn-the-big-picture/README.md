## React Native: The Big Picture
___
#### Styling in React Native
___
* No CSS or special language
* Use JavaScript for styling
* Style names and values match CSS
* Everything is defined in camel-case
* Uses Flexbox for layout
* Each component can have its own corresponding stylesheet
* Platform-specific styling available for iOS and Android

```jsx
import {Stylesheet} from react-native;
export default Stylesheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        flexDirection: 'row'
    },
    textInput:{
        flex: 1,
        fontSize: 20
    }
});
```
____

#### React Native Core Features
* JavaScript and React
* Builds Native Mobile Apps
* Code is shared between iOS and Android
* Hot Reloading
* Superior Developer Experience
___
#### Why React Native?
* Code in JavaScript
* Uses React:
  * _Everything is a Component_
    * Component-based architecture
    * Reuse of components
    * One directional data flow
  * _Flexibility_
    * Offers lots of flexibility
    * Freedom to choose state management, navigation, server-side rendering and more
  * _Testing_
    * Ease of testing
    * Plenty of testing options like Jest, Detox testing, etc...
  * __Code Sharing__
    * Code sharing between web and mobile
    * Saves cost of development and maintenance
* Build Cross-platform Apps
* Superior Developer Experience
  * Hot Reloading 
  * React Native Debugger
    * Includes React Inspector
    * Includes Redux Dev tools
  * Over the Air (OTA) updates
    * CodePush
* Cost Effective
  * Smalled dev team working cross-platform
  * Faster development time
  * Faster testing and debugging
  * Save money with minimal training
* Excellent Community
___
### React Native Ecosystem
___
#### Getting Started Using Expo:
1. `npm install -g expo-cli`
2. `expo init MyNewProject`
3. `cd MyNewProject npm start`
#### Expo:
* Lets you build a React Native app without any build configuration
* No Xcode or Android Studio 
#### Expo - Features:
* Push Notification
* File System
* Location
* Camera
* Native Graphics
* Push OTA Updates
___
#### IGNITE:
* Boilerplate kit with best practices built-in
* No runtime and can get set up in minutes
* New developers of React Native benefit heavily
#### Ignite Starter Kit Features:
* Pattern Library
* API Testing
* Themes <br>
See More: [Ignite Repo](https://github.com/infinitered/ignite)
___
#### Testing React Native
* Jest - Unit Tests
    * Written in JavaScript
    * Works out of the box
    * Powerful mocking library
    * Built-in code coverage report
    * Runs only test files related to changed files
* Supports Snapshot Testing
* Detox - End-to-End Testing
  * Emulates a user testing experience
  * Increases confidence in code
  * Automated UI tests
  * Written in JavaScript
___
#### Push Notification 
_Use Cases_ <br>
* Promoting products to increase sales
* Sending time-sensitive notification
  * Examples: Time left to catch a flight from travel app, clinical alerts from medical app
* Sending transactional receipts immediately 
#### Push Notification Services
* Expo
* One Signal
* Firebase Cloud Messaging
* AWS Amplify
___
### Third Party Libraries
#### Accessing The Camera
* Library: React Native Vision Camera: [repo link](https://github.com/mrousavy/react-native-vision-camera)
  * Comprehensive Camera module
  * Photos, videos, face detection, barcode scanning and text recognition
  * Supports iOS and Android <br> 

#### Biometric Authentication
Biometric Authentication to secure apps
* Library: React Native Fingerprint Scanner [repo link](https://github.com/hieuvp/react-native-fingerprint-scanner)
  * Supports Touch ID Authentication
  * Supports both iOS and Android

#### Video Streaming
* Library: react-native-video [repo link](https://github.com/react-native-video/react-native-video)
    * Local and Remote files playback
    * Selection of audio and text tracks
    * Audio playback when app is running in background

#### Routing and Navigation
* Library: React Navigation [repo link](https://github.com/react-navigation/react-navigation)
  * Easy to use
  * Supports iOS and Android
  * Customizable for your needs
___
### Deployments
* Over the Air Updates (OTA) using CODEPUSH
* Native Updates using FASTLANE to App Store and Google Play Store
#### Fastlane [docs](https://docs.fastlane.tools/getting-started/cross-platform/react-native/)
* Automated App Store Deployments
  * iOS and Android
  * Capture Screenshots
  * Code Signing
* Distributes Beta Builds
  * Facilitates Testing
  * Clarity on Beta Versions
* Tons of Hours Saved

#### Beta Deployments
* TestFlight (for iOS)
* Google Play or Crashlytics (for Android)