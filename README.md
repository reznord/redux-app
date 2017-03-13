This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

A simple react application built for fetching the details of the github user.

```
  yarn install
  yarnpkg start
```

Fetched data will be stored in the redux store.

- API calls for the same request will not be fired again.
- Instead it will fetch the same data from the store.
- API request will be made with the latest input which you enter in the text field.
