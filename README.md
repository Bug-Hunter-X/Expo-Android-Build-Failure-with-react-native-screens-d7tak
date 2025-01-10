# Expo Android Build Failure with react-native-screens

This repository demonstrates a bug and its solution related to Android builds in Expo CLI when using the `react-native-screens` library. The build process fails, typically during the Gradle build step, resulting in vague error messages.  This issue is not consistently reproducible across all projects or environments.

## Bug
The primary issue lies in the interaction between Expo's build system, the `react-native-screens` library, and the Android native environment.  The exact error message varies, but it often indicates problems with native module linking or conflicts within the build process.  The `bug.js` file contains a minimal reproducible example (although the bug may not always manifest in the same way).

## Solution
The solution often involves a combination of strategies that re-evaluate native modules, clean the build caches, and potentially re-link native libraries.
The `bugSolution.js` file demonstrates the use of these strategies with explanations in the comments.

## Reproduction
1. Clone this repository.
2. Install the dependencies using `npm install` or `yarn install`.
3. Attempt to build the Android APK using Expo CLI (`expo build:android`).
4. Observe the build failure.
5. Apply the solution steps in `bugSolution.js`.
6. Attempt to build again and verify successful completion.

## Note
This bug's reproduction is not fully guaranteed due to its inconsistent nature.  The solution strategies provided aim to address the underlying causes and improve the likelihood of a successful build.