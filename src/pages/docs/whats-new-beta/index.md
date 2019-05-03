---
title: What's new in Hyperspace Beta
path: /docs/whats-new-beta
description: 'Read about the latest features, improvements, changes, and bug fixes coming to Hyperspace (currently in beta).'
priority: 0
---
# 1.0.0beta3 (May 3, 2019)

What's new:

- Login screen changes include a new version string and a fixed Authorize button (fixes #24).
  - Changes login text from "If you are from X" to "Not from X?".
- Enforce stricter rules on when an instance is defederated in config.json (fixes #28):
  - Default visibility changes from public to unlisted and cannot be changed to public in settings.
  - Login page only allows to log in to instance from `registerBase`.
- Makes updates to CSS and themes:
  - Fix narrow margins on mobile devices (fixes #27).
  - Remove the Royal II (King) theme and replace with Classic theme.
  - Update colors for Attract theme to prevent CSS collisions (fixes #26).
  - Settings menu includes new icons for clarity and ease-of-discoverability (fix #30).
- Brand name is applied to more places in Hyperspace and changes Hyperspace app name in login process (fixes #34).
- Addresses issue where media upload snackbars didn't dismiss properly (fixes #32).
- Adds a Settings menu for editing profiles within Hyperspace and a new page at `/you` to edit a user's avatar, header, display name, and bio (fixes #14).


-----

# 1.0.0beta2u2 (April 26, 2019)

What's new:

* Changes the login function in the emergency mode from `createHyperspaceApp` to `Mastodon.registerApp` (pulled from [@gopherdonapp/app](https://github.com/gopherdonapp/app)).
* Fixes the `createHyperspaceApp` function so that when it calls the `createApp` function, it passes the base URL from the parameters (required to make an app on the server with base URL) (fixes #8, noted by @GidiKroon).
* Fixes the bug where the app crashes when clicking "Load more posts" on a profile with no posts (fixes #13).
* Makes avatars in applicable areas clickable, redirecting to the profile page of an account.
* Adds a 'View profile' button as an action in a notification (fixes #15).
* Changes the default profile icon to `AssignmentIndIcon` for consistency.
* Adds streaming to notification page so new notifications are loaded in while on the page (fixes #19)
* Adds a reply button to notifications that are of the type mention (eg. messages, replies to existing posts, new posts with a mention, etc.)
* Fixes bug where boosting/unboosting a post doesn't update its state
* updates version to `1.0.0beta2u2`

-----

# 1.0.0beta2u1 (April 24, 2019)

What's new:

* A backup method for authenticating has been implemented that works similar to the `hyperspace-classic` method.
* The view thread button now corresponds to the actual post if it's a reblog.

-----

> Note: This document covers the latest features, bug fixes, and improvements deployed to the beta versions of Hyperspace, available at [https://hyperspacepapp-net.herokuapp.com](https://hyperspaceapp-net.herokuapp.com) and other instances that are deployed on the beta channel.

# 1.0.0beta2 (April 22, 2019)

> Update: this beta has been re-released due to an infinite state error that cause the 404 page to not work properly. The 404 page in question has been disabled for this release.

What's new:

* A new `location` field in the config file should help mitigate redirect URL issues that cause client authentication errors. (#8)
* The notification badge will now be displayed on mobile devices in the menu and should no longer disappear and lose count with the setting "Notification badge counts all notifications'' turned on (fixes #7).
* The theme chooser has been slightly redesigned to include a new theme preview before applying the theme.
* A new setting is available to set the default visibility when composing new posts.
* The drawer menu on mobile devices has been reorganized in a logical manner.
* A new setting that allows the app to follow the browser's/platform's light mode/dark mode preference has been added.
* A few changes have been made to themes in general:
  * The 'Brother' and 'Scientist' themes have been removed.
  * Most existing themes have been renamed.
  * Two new themes, Bliss and Attract, have been added.
* The 'Who to follow' page link has been enabled.
* A new recommendations page is available to follow suggested accounts and manage follow requests.
* ~~A new '404' page has been added.~~

-----

# 1.0.0beta1u1 (April 21, 2019)

* The notifications toggle bug where it switches states after reloading because the user denied permission to display notifications has been fixed. (fixes #2)
* A new notification setting lets you display all notifications in the badge or just the new ones during that session (fixes #3).
* The app and website icons for Hyperspace have been reinstated (fixes #5).
* Padding for posts and content has been better optimized for smaller devices and the toolbar has been simplified so that it only shows 'Favorite', 'Boost', and 'Reply' on mobile. (fixes #4).
  * This change also puts the 'View thread' and 'Open in Web' buttons in the menu when on a mobile device.

-----

# 1.0.0beta1 (April 12?, 2018)

* First release of the `1.x` series of Hyperspace.