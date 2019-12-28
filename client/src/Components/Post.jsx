import './Loader.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useHistory, useLocation} from 'react-router-dom';
import React, {useState, useEffect, useCallback} from 'react';
import Navbar from './Navbar';
import './Sc2.css';
const DOMPurify = require('dompurify');
const Markdown = require('react-markdown');
const moment = require('moment');
const userStat = require('./GetStat');

const Post = props => {
  const [open, setOpen] = React.useState(false);
  const [logStat, setLogStat] = useState(false);

  let location = useLocation();
  let history = useHistory();
  const [content, setContent] = useState({});
  const [realContent, setRContent] = useState('');
  const [spin, isSpinning] = useState(false);
  const [postID, setPostID] = useState('');

  const fetchUser = async () => {
    const resp = await userStat();
    setLogStat(resp.scs);
  };

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const deletePost = async () => {
    const resp = await fetch('/blog/delete-post', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({postID: postID}),
    });
    const rec = await resp.json();
    if (rec.scs) history.push('/showPosts');
  };

  const fetchPost = async () => {
    try {
      const resp = await fetch('/blog/get-post', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({postID: location.state.postID}),
      });
      const postContent = await resp.json();

      setRContent(postContent.postContent.content);
      setContent(postContent.postContent);
      isSpinning(false);
    } catch (er) {
      history.push('/showPosts');
    }
  };

  const memorizeFetchPost = useCallback(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    try {
      isSpinning(true);
      setPostID(location.state.postID);
      fetchUser();
      memorizeFetchPost();
    } catch (er) {
      history.push('/showPosts');
    }
  }, []);

  if (logStat) {
    return (
      <>
        <Navbar showPosts={true} about={true} Git={true} />
        <div id="container">
          {spin ? (
            <div className="loader"></div>
          ) : (
            <>
              <h1 id="contentTitle">{content.title}</h1>{' '}
              <span>
                <a id="tle" onClick={handleClickOpen}>
                  delete
                </a>
              </span>
              <br />
              <span>
                {moment(content.createdOn).format('MMMM D, YYYY, hh:mm a')}
              </span>
              <br />
              <br />
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                  {'Are you Sure?'}
                </DialogTitle>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    No
                  </Button>
                  <Button onClick={deletePost} color="primary">
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
              <div id="editorContent">
                <Markdown source={realContent.toString()} escapeHtml={false} />
              </div>
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar showPosts={true} about={true} Git={true} />
        <div id="container">
          {spin ? (
            <div className="loader"></div>
          ) : (
            <>
              <h1 id="contentTitle">{content.title}</h1>
              <br />
              <span>
                {moment(content.createdOn).format('MMMM D, YYYY, hh:mm a')}
              </span>
              <br />
              <br />
              <div id="editorContent">
                <Markdown source={realContent.toString()} escapeHtml={false} />
              </div>
            </>
          )}
        </div>
      </>
    );
  }
};

export default Post;
