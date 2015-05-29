RMN-GP API docs
===============

This repository contains the documentation to use RMN-GP's API. It is
available in HTML form at http://api.art.rmngp.fr/, but if you need to
update the docs, read on. Your pull-requests and suggestions are welcome!

Getting Started
---------------

### Prerequisites

You're going to need:

 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't
   work, just run `gem install bundler` in a terminal.

### Getting Set Up

 1. Clone this repository on Github.
 2. `cd apidocs`
 3. Install all dependencies: `bundle install`
 4. Start the test server: `bundle exec middleman server`

You can now see the docs at <http://localhost:4567>. And as you edit
`source/index.md`, your server should automatically update!


Deploying
---------

After pushing your changes to Git, to deploy them to the *dev* environment, run:

```shell
bundle exec rake deploy:dev
```

If you are ready to deploy to the production environment:

```shell
bundle exec rake deploy:production
```
