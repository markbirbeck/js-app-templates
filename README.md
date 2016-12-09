For background see the blog post [Setting Up a Default App Template With Git](http://markbirbeck.com/2016/12/07/setting-up-a-default-app-template-with-git/).

If you want to just use this repo as a starter for your own projects with all of the history, but without any connection to this repo, do the following:

```shell
# set a project name
#
export PROJECT_NAME=my-new-project

# set the type of project you want to create:
#
export APP_TYPE=node

# change directory to wherever your projects are located:
#
cd ~/Documents/workspace

# clone just the branch for the project type
#
git clone \
  -b ${APP_TYPE} \
  --single-branch \
  git@github.com:markbirbeck/js-app-templates.git \
  ${PROJECT_NAME}
cd ${PROJECT_NAME}

# rename the branch to master:
#
git branch -m ${APP_TYPE} master

# finally, remove any connection between the new repo and the
# template one:
#
git branch -d -r origin/${APP_TYPE}
git branch --unset-upstream
git remote remove origin
```
