# To run Angular WPA do you need to build and run in production?
Yes, in order to enable all the Progressive Web App (PWA) features for an Angular application, you need to build the app and serve it over HTTPS. The PWA features are enabled by registering a service worker, which is a script that runs in the background and intercepts network requests, caches the app's assets and data, and enables offline functionality.

## When you build an Angular PWA, the following features are enabled:

* Offline functionality: The app can still function even if the user loses internet connectivity, as the service worker will cache the app's assets and data, allowing the user to continue using the app.
* Add to Home Screen: The app can be added to the user's home screen on their mobile device, providing easy access to the app and a more app-like experience.
* Push Notifications: The app can send push notifications to the user even when the app is not currently in use.
* Background Sync: The app can synchronize data with the server in the background, even if the app is not currently open, improving the user experience.

## In order to enable these PWA features, you need to do the following:

1. Generate a service worker using the @angular/service-worker package.
2. Register the service worker in your app's main module.
3. Build your app using the --prod flag to enable production mode.
4. Serve your app over HTTPS to enable secure connections and allow the service worker to function properly.
Once you've enabled these PWA features, you can improve the user experience of your Angular app by providing offline functionality, fast loading times, and a more app-like experience for mobile users.

# How to best serve the app for WAP development? 
```bash
ng serve --configuration=production
```
when we  want to explicitly build the application in development mode and serve it using the ng serve command, you can use the command.

This will build the application in development mode and serve it using a local server. The server will watch for changes in the source code and automatically rebuild and reload the application when a change is detected.

# is there a way to preserve the original code structure and formatting while using the ng build command, in order to facilitate debugging in the browser's developer tools?
Yes
```bash
ng build --configuration=development
```

# Steps follow to reach the end

```bash
ng new mycoffeeapp
```

```bash
ng build
```

> --prod didn't work so I had to use the longer writing option

```bash
ng build --configuration=production
```

PWA needs to be run on production so some features are enable.

```bash
ng serve --configuration=production
```

WAP have to be serve in HTTPS. Local host is the only exception.

## Light house: PWA tester

![light house results](./readme-assets/lighthouse%20results.png)
