import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw2b3X8IzIAo-e7nlSvZvYG0&ust=1692826485966000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDznp2c8YADFQAAAAAdAAAAABAE"
                alt=""
              />
              <span>Sample User 01</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw2b3X8IzIAo-e7nlSvZvYG0&ust=1692826485966000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDznp2c8YADFQAAAAAdAAAAABAE"
                alt=""
              />
              <span>Sample User 02</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw2b3X8IzIAo-e7nlSvZvYG0&ust=1692826485966000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDznp2c8YADFQAAAAAdAAAAABAE"
                alt=""
              />
              <p>
                <span>Demo User </span> changed their cover picture
              </p>
            </div>
            <span>few min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw2b3X8IzIAo-e7nlSvZvYG0&ust=1692826485966000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDznp2c8YADFQAAAAAdAAAAABAE"
                alt=""
              />
              <p>
                <span>Demo User</span> changed their cover picture
              </p>
            </div>
            <span>few min ago</span>
          </div>
          
        </div>
        <div className="item">
          <span>Online Friends</span>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw2b3X8IzIAo-e7nlSvZvYG0&ust=1692826485966000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDznp2c8YADFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="online" />
              <span>Sample User 1</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Sample User 2</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.vecteezy.com/png/20911737-user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon"
                alt=""
              />
              <div className="online" />
              <span>Sample User 3</span>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default RightBar;