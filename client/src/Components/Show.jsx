import { Helmet } from 'react-helmet';
import InputLabel from '@material-ui/core/InputLabel';
import './Loader.css';
import {useHistory} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';
import './Sc.css';
import React, {useState} from 'react';
import Navbar from './Navbar';
const moment = require('moment');

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Show = props => {
  const categories = [
    'Announcements',
    'Data-Structures',
    'Algorithms',
    'Chill ⏸',
  ];
  let history = useHistory();
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [postID, setPostID] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [now, setNow] = useState('');
  const [postName, setPostName] = useState('');
  const [spin, isSpinning] = useState(false);
  const [isUser, checkUser] = useState(false);

  const fetchUser = async () => {
    const resp = await fetch('/auth/checkStat');
    const data = await resp.json();
    checkUser(data.scs);
  };

  const openPost = (id, name) => {
    setPostID(id);
    name = name.replace(' ', '-').replace('/', '-');
    setPostName(name);
  };

  const handleChange = event => {
    if (event.target.value === 'All') {
      setPosts(allPosts);
      setNow(event.target.value);
      return;
    } else {
      setPosts(allPosts.filter(pt => pt.category === event.target.value));
      setNow(event.target.value);
    }
  };

  const fetchData = async () => {
    const resp = await fetch('/blog/show-posts');
    let data = await resp.json();
    data = data.posts;
    setPosts(data);
    setAllPosts(data);
    isSpinning(false);
  };

  React.useEffect(() => {
    isSpinning(true);
    fetchData();
    fetchUser();
  }, []);

  if (postID) {
    history.push(`/post/${postID}/${postName}`, {
      postID: postID,
    });
  }

  return (
    <>
    <Helmet>
        <title>Mano Sriram</title>
        <meta name="description" content="Mano Sriram" />
    </Helmet>

      <Navbar name="Show Posts" createPost={isUser} />
      {spin ? (
        <div className="loader"></div>
      ) : (
        <>
          <div id="inCont">
            <div id="contn">
              <br />
              <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Category
                  </InputLabel>
                <Select
                  id="slct2"
                  value={now}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}>
                  <MenuItem value="All" id="slct">
                    All
                  </MenuItem>
                  {categories.map((el, ind) => {
                    return (
                      <MenuItem id="slct" value={el} key={ind+1}>
                        {el}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <br />
            <br />
            {!posts.length ? (
              <div id="oops">
                <p>Oops! Nothing here...</p>
              </div>
            ) : (
              posts.map((el, ind) => {
                return (
                  <>
                    <div id="two" key={ind}>
                      <div id="when" key={ind + 1}>
                        <time>
                          {moment(el.createdOn).format('MMMM D, YYYY')}
                        </time>
                        &nbsp;
                        <span id="arrow">»</span>
                        &nbsp;
                        <a id="tle" key={ind+1} onClick={() => openPost(el._id, el.title)}>
                          {el.title}
                        </a>
                        <span>[{el.category}]</span>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Show;
