---
title: Configure Hyperspace with config.json
path: /docs/configure-hyperspace
description: "Learn how to use Hyperspace's config.json to configure Hyperspace."
priority: 3
---
Newer versions of Hyperspace, starting from 1.0, come with a `config.json` file in the build folder to configure various parts of Hyperspace without digging into the source code. This config file includes branding, licenses, federation support, and a few other configurations.

## Change Hyperspace's branding

The branding background, logo, and name is controlled under the `branding` key:

```json
 "branding": {
    "name": "Hyperspace",
    "logo": "logo.svg",
    "background": "background.png"
},
```

This key is not particularly required for Hyperspace, though it is generally recommended to keep this key in the file. This key has three subkeys:

| Subkey | Default value | Description |
| -- | -- | -- |
| `name` | "Hyperspace" | The name of the app or of the brand. Affects the app name in the title bar, About page, and other parts what use Hyperspace as the name. |
| `logo` | "logo.svg" | The location, (relative to the build files), of the logo used on the login screen. |
| `background` | "background.png" | The location, (relative to the build files), of the background used on the login screen. |

## Manage instance information

There are some extra keys for handling actions such as federation, registrations, and instance administrators. There are a few keys in the config file to handle this:

| Key | Default value | Description |
| -- | -- | -- |
| `federated` | "true" | Whether the instance of Mastodon is federated or not. This is used to disable access to public fediverse features in Hyperspace for local instances. |
| `registration` | n/a | Information regarding registration of the instance. See below for more information |
| `admin` | n/a | The administrator that installed Hyperspace. |

### Registration information

| Subkey | Default value | Description |
| -- | -- | -- |
| `defaultInstance` | "mastodon.social" | The domain name associated with the Mastodon instance that Hyperspace will connect to by default. This is used to handle well-known logins and direct users to the correct registration page. |

### Admin information

| Subkey | Default value | Description |
| -- | -- | -- |
| `name` | n/a | The name of the administator. This can be a display name or real name. |
| `account` | n/a | The account ID number on the Mastodon network. |

### Example

```json
"federated": "true",
"registration": {
    "defaultInstance": "mastodon.social"
},
"admin": {
    "name": "Eugen",
    "account": "1"
},
```

## Configure app information

There are other fields responsible for handling app information such as version, developer mode, licensing, and source code.

| Key | Default value | Description |
| -- | -- | -- |
| `developer` | "false" | Whether the app should be run in developer mode or not. This helps distinguish between a stable release and a beta release for users. |
| `version` | Hyperspace version as a string | The version of the application. |
| `license` | n/a | The license information for the app, if it falls under a different license than what Hyperspace includes. |
| `repository` | "https&#58;//github.com/hyperspacedev/hyperspace" | The URL to the repository containing the source code if it is open-source. |

### License information
| Subkey | Default value | Description |
| -- | -- | -- |
| `name` | "Apache 2.0 License" | The name of the license the app is under. |
| `url` | "https&#58;//www.apache.org/licenses/LICENSE-2.0" | The URL to the license online. |

### Example

```json
{
    "version": "1.0.0beta1",
    "developer": "true",
    "license": {
        "name": "Apache 2.0 License",
        "url": "https://www.apache.org/licenses/LICENSE-2.0"
    },
    "repository": "https://github.com/hyperspacedev/hyperspace",
}
```

## An example of `config.json`

```json
{
    "version": "1.0.0beta1",
    "branding": {
        "name": "Hyperspace",
        "logo": "logo.svg",
        "background": "background.png"
    },
    "developer": "true",
    "federated": "true",
    "registration": {
        "defaultInstance": "mastodon.social"
    },
    "admin": {
        "name": "Eugen",
        "account": "1"
    },
    "license": {
        "name": "Apache 2.0 License",
        "url": "https://www.apache.org/licenses/LICENSE-2.0"
    },
    "repository": "https://github.com/hyperspacedev/hyperspace"
}
```