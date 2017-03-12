import React, { Component, PropTypes } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import * as storeSelector from './../../store/storeSelector';
import * as userApi from './../../api/userApi';
import './App.css';

class App extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func,
    getUserFollowers: PropTypes.func,
    getUserFollowing: PropTypes.func,
    userData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    followersData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    followingData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  }

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAPIRequest = debounce(this.handleAPIRequest.bind(this), 250);
  }

  componentWillReceiveProps(nextProps) {
    const { getUserFollowers, getUserFollowing } = this.props;
    getUserFollowers(nextProps.userData.login);
    getUserFollowing(nextProps.userData.login);
  }

  handleOnChange = (e) => {
    if (e.target.value !== '') {
      this.handleAPIRequest(e.target.value);
    }
  }

  handleAPIRequest = (value) => {
    const { getUserDetails } = this.props;
    getUserDetails(value);
  }

  render() {
    const { userData, followersData, followingData } = this.props;

    return (
      <div>
        <section className="user-input">
          <input
            autoFocus
            type="text"
            className="input-field"
            placeholder="please enter a username"
            onChange={e => this.handleOnChange(e)}
          />
        </section>
        <section className="user-data">
          <div className="user-image">
            {userData.avatar_url ?
              <img role="presentation" className="image" src={userData.avatar_url} />
              :
              null
            }
          </div>
          {!isEmpty(userData) === true ?
            <div className="user-details">
              <div className="data">
                Name: {userData.name ? userData.name : ''}
              </div>
              <div className="data">
                Username: {userData.login ? userData.login : ''}
              </div>
              <div className="data">
                Email: {userData.email !== '' ? userData.email : ''}
              </div>
              <div className="data">
                Company: {userData.company ? userData.company : ''}
              </div>
              <div className="data">
                <div className="followers-count">
                  Followers: {userData.followers ? userData.followers : 0}
                </div>
                {!isEmpty(followersData) === true ?
                  <div>
                    <div className="follower-text">Followers Details: </div>
                    <div className="followers-data">
                      {followersData && followersData.map(item => (
                        <div className="follower" key={item.id}> - {item.login}</div>
                      ))}
                    </div>
                  </div>
                :
                null
                }
              </div>
              <div className="data">
                <div className="followers-count">
                  Following: {userData.following ? userData.following : 0}
                </div>
                {!isEmpty(followingData) === true ?
                  <div>
                    <div className="follower-text">Followers Details: </div>
                    <div className="followers-data">
                      {followingData && followingData.map(item => (
                        <div className="follower" key={item.id}> - {item.login}</div>
                      ))}
                    </div>
                  </div>
                :
                null
                }
              </div>
            </div>
            :
            null
          }
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userData = storeSelector.getUserData(state);
  const followersData = storeSelector.getUserFollowers(state);
  const followingData = storeSelector.getUserFollowing(state);
  return {
    userData,
    followersData,
    followingData,
  };
}

export default connect(mapStateToProps, Object.assign({}, userApi, {}))(App);
