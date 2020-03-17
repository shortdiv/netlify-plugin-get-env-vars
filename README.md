# Netlify Plugin Get Env Vars 

> ⚠️ **This plugin is meant for local development only**

This plugin was created as a way to streamline local build plugin development. Currently when running a plugin locally, there is no way to grab and use environment variables from the UI. This plugin fixes that.

## Usage
Add this plugin to a project's yml file like so:

```yml
plugins:
  - package: netlify-plugin-get-env-vars
```

For this plugin to work you will need to update the CLIENT_ID in the `auth.js` file. Here are the steps to get your client id from your netlify account:

- Step 1: Go to user settings
- Step 2: Under applications, create a new oauth app
- Step 3: Name your oAuth app and add any other attributes like redirects etc
- Step 4: If you click on your newly created oAuth app, you'll be able to easily grab your client id

![Diagram for getting client id](./workflow-diagram.png "")


At the moment, this plugin simply prints the env variables to console, the goal is to be able to pipe them to another build plugin.

