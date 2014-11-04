# Balanced Dashboard Changelog

### master

* Fixed error handling for create bank account modal

### 1.0.3

* Fixed images in import payouts page.
* Fixed duplicate "Logs" tab in search results
* Fixed csv import flow.
* Fixed funding instrument title in disputes page.

### 1.0.2

* Fixed bug where new marketplaces would not link to the user after being created.
* Fixed bug where dispute documentation could not be uploaded.
* Fixed bug with displaying hold information on capture hold modal.
* Fixed bug where changing password was failing on validation.
* Fixed bug where the lastLoginUri was overriden after log-in.
* Using latest version of phantomjs on CI through npm.

### 1.0.1

* Fix for blinking "Upload dispute document" banner.
* Uploading assets directory into production deployment (#1512)
* Specifying hard version numbers on packages (#1512)

### 1.0.0

* Converted application to ember-cli (version 0.1.2)
* Upgraded ember to 1.8.0-beta.1
* Added coffeescript support through `ember-cli-coffeescript`