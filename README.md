# Netlify Plugin Get Env Vars 

> ⚠️ **This plugin is meant for local development only**

This plugin was created as a way to streamline local build plugin development. Currently when running a plugin locally, there is no way to grab and use environment variables from the UI. This plugin fixes that.

## Usage
Add this plugin to a project's yml file like so:

```yml
plugins:
  - package: netlify-plugin-get-env-vars
```

This plugin will not work unless you update the CLIENT_ID with a Netlify CLI client id in the `auth.js` file.

At the moment, this plugin simply prints the env variables to console, the goal is to be able to pipe them to another build plugin.

