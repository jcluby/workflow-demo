# Github Actions

## Cycle Development

### Gitflow Workflow

Packages for git-flow are available on multiple operating systems. On OSX systems, you can execute brew install git-flow. On windows you will need to [download and install]([https://link](https://git-scm.com/download/win)) git-flow. After installing git-flow you can use it in your project by executing git flow init.

### Getting Started

**The first step is to complement the default main with a develop branch.**

``` bash
    git branch develop
    git push -u origin develop
```


When using the git-flow extension library, executing git flow init on an existing repo will create the develop branch.

```bash
    $ git flow init


    Initialized empty Git repository in ~/project/.git/
    No branches exist yet. Base branches must be created now.
    Branch name for production releases: [main]
    Branch name for "next release" development: [develop]

    How to name your supporting branch prefixes?
    Feature branches? [feature/]
    Release branches? [release/]
    Hotfix branches? [hotfix/]
    Support branches? [support/]
    Version tag prefix? []


    $ git branch
    * develop
    main
```


### Feature branches

To start collaborating with the project run the command below.

![feature example](screenshots/features.jpg)

*To start the feature*

Without the git-flow extensions
```bash
    git checkout develop
    git checkout -b feature/feature_branch
```
When using the git-flow extension:
```bash
    git flow feature start feature_branch
```

*To publish on the remote and not finish the feature*

Without the git-flow extensions
```bash
    git push feature/feature_branch
```
When using the git-flow extension:
```bash
    git flow feature publish feature_branch
```

*To finish the feature*

Without the git-flow extensions
```bash
    git checkout develop
    git merge feature/feature_branch
```
When using the git-flow extension:
```bash
    git flow feature finish feature_branch
```

#### Release branches

Once develop has acquired enough features for a release (or a predetermined release date is approaching), you fork a release branch off of develop.

*To start the release*

Without the git-flow extensions:
```bash
    git checkout develop
    git checkout -b release/0.1.0
```
When using the git-flow extension:
```bash
    git flow release start 0.1.0
```

*To publish on the remote and not finish the release*

Without the git-flow extensions:
```bash
    git push release/0.1.0
```
When using the git-flow extensions:
```bash
    git flow release publish 0.1.0
```

*To finish the release*

Without the git-flow extensions:
```bash
    git checkout main
    git merge release/0.1.0
```
When using the git-flow extensions:
```bash
    git flow release finish 0.1.0
```

*Send tags from remote*
```bash
    git push --tags
```

### Hotfix branches

Maintenance or “hotfix” branches are used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.

![feature example](screenshots/hotfixes.jpg)

*To start the hotfix*

Without the git-flow extensions:
```bash
    git checkout main
    git checkout -b hotfix/hotfix_branch
```
When using the git-flow extensions:
```bash
    git flow hotfix start hotfix_branch
```

*To publish on the remote and not finish the hotfix*

Without the git-flow extensions:
```bash
    git push hotfix/hotfix_branch
```
When using the git-flow extensions:
```bash
    git flow hotfix publish hotfix_branch
```

*To finish the hotfix*

Without the git-flow extensions:
```bash
    git checkout main
    git merge hotfix/hotfix_branch
    git checkout develop
    git merge hotfix/hotfix_branch
    git branch -D hotfix/hotfix_branch
```
When using the git-flow extensions:
```bash
    git flow hotfix finish hotfix_branch
```


Credits: [atlassian gitflow-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
