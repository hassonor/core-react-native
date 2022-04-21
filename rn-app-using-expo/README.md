## React Native Applications Using Expo
___
### Expo - Intro
#### Why Use Expo?
* __Expo API__: Provides access to the hardware of the device
* __Expo Client__: Android/iOS app used to run Expo projects
* __Build apps with Expo service__: Does not require Android or iOS development
* __OTA Updated and Release Channels__: Quickly distribute updated and host different versions of your app
#### Limitations of Expo:
* __All APis not supported__: All Android and iOS APIs ar not available
* __App size__: Larger file size due to addition APIs
* __Queued builds__: Builds with the free service are sometimes queued

#### Install Expo CLI
1. `npm install -g expo-cli`

#### Configure IOS Simulator
1. Installing Xcode (Install most recent version of command line tools)
2. Launch Simulator (Start simulator from command line interface or browser
based UI)

#### Starting expo Project
1. `npx expo login`
2. `npx expo init`