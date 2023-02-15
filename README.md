# BookList
App used to show list of book and its details.
Currently showing the list of demo data.

Steps to projectInstallation:

1)Install node and watchman by running below commands
brew install node
brew install watchman

2)Run JDK Setup
brew tap homebrew/cask-versions
brew install --cask zulu11

3)Android Setup

a) Install Android Studio
b)Install the Android SDK
c)Configure the ANDROID_HOME environment variable by running below commands
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools

  Please follow below link for any issues: https://reactnative.dev/docs/environment-setup

Steps to run the project:

Clone/download the project from https://github.com/ashishumredkar/BookList.git
Checkout to master
Goto project directory by running  : cd BookList
Run => npm install (To add project dependencies)
After that run npm run android (To run on Android device)

goto iOS folder by running cd ios

run pod install
run npm run ios (To run iOS app)

