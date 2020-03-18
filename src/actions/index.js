import firebase from "../firebase";
import {
  SET_PAGE,
  FETCH_EVENTS,
  FETCH_SINGLE_EVENT,
  FETCH_BLOG_POSTS,
  FETCH_SINGLE_BLOG_POST,
  FETCH_CREW_MEMBERS,
  FETCH_CAMP_APPLICATIONS,
  ADD_APPLICATION_COMMENT,
  FETCH_APPLICATIONS_COMMENTS,
  ADD_APPLICATION_REPLY,
  FETCH_APPLICATIONS_REPLIES
} from "./types";

const db = firebase.firestore();
const storageRef = firebase.storage().ref();

export const logIn = (email, password) => () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = "#";
    });
};

export const logOut = () => () => {
  firebase.auth().signOut();
};

export const signUp = (email, password, setSubmitting, setFormError) => () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      result.user.sendEmailVerification();
      setSubmitting(2);
    })
    .catch(err => {
      if (err.code === "auth/email-already-in-use") {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setSubmitting(3);
          })
          .catch(err => {
            console.log("login error:", err);

            if(err.code === "auth/wrong-password"){
              setSubmitting(0);
              setFormError("Wrong password")
            }
          });
      } else {
        console.log("signup error:", err);
        setSubmitting(4);
      }
    });
};

export const resendVerification = () => () => {
  firebase.auth().currentUser.sendEmailVerification();
};

export const providerSignIn = provider => () => {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var facebookProvider = new firebase.auth.FacebookAuthProvider();
  switch (provider) {
    case "google":
      firebase.auth().signInWithPopup(googleProvider);
      break;
    case "facebook":
      firebase.auth().signInWithPopup(facebookProvider);
      break;
  }
};

export const updateProfile = (values, user, imageObj, setSubmitting) => () => {
  db.collection("users")
    .doc(user.uid)
    .set(values, { merge: true })
    .then(() => {
      if (imageObj)
        storageRef.child(`images/user_avatars/${user.uid}`).put(imageObj);
      setSubmitting(2);
    });
};

export const setCurrentPage = value => {
  return {
    type: SET_PAGE,
    payload: value
  };
};

export const applyToCamp = (values, setSubmitting) => () => {
  const newDoc = db.collection("applications").doc();

  newDoc.set({ ...values, status: 1, id: newDoc.id }).then(() => {
    setSubmitting(2);
  });
};

export const newEvent = (values, image, setPosted) => () => {
  const newDoc = db.collection("events").doc();

  newDoc.set({ ...values, id: newDoc.id }).then(() => {
    storageRef
      .child(`images/events/${newDoc.id}`)
      .put(image)
      .then(() => {
        setPosted(true);
      });
  });
};

export const updateEvent = (values, image, setEdited) => () => {
  db.collection("events")
    .doc(values.id)
    .set(values)
    .then(() => {
      if (!!image)
        storageRef
          .child(`images/events/${values.id}`)
          .put(image)
          .then(result => {
            setEdited(true);
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
    })
    .catch(err => {
      console.log(err);
    });
};

export const newBlogPost = (values, image, setPosted) => () => {
  const newDoc = db.collection("blog_posts").doc();

  newDoc.set({ ...values, id: newDoc.id }).then(() => {
    storageRef
      .child(`images/blog_posts/${newDoc.id}`)
      .put(image)
      .then(() => {
        setPosted(true);
      });
  });
};

export const updateBlogPost = (values, image, setEdited) => () => {
  console.log(image);
  db.collection("blog_posts")
    .doc(values.id)
    .set(values)
    .then(() => {
      if (!!image)
        storageRef
          .child(`images/blog_posts/${values.id}`)
          .put(image)
          .then(result => {
            setEdited(true);
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
    })

    .catch(err => {
      console.log(err);
    });
};

export const fetchEvents = () => async dispatch => {
  const data = await db.collection("events").get();

  dispatch({
    type: FETCH_EVENTS,
    payload: !!data.docs
      ? data.docs.map(doc => {
          return doc.data();
        })
      : []
  });
};

export const fetchSingleEvent = (id, setEvent) => async dispatch => {
  const data = await db
    .collection("events")
    .doc(id)
    .get();

  setEvent(data.data());

  if (!!data) {
    dispatch({
      type: FETCH_SINGLE_EVENT,
      payload: data.data()
    });
  }
};

export const fetchBlogPosts = () => async dispatch => {
  const data = await db.collection("blog_posts").get();

  if (data.docs !== undefined) {
    const docsData = [];
    data.docs.map(doc => {
      docsData.push(doc.data());
    });

    dispatch({
      type: FETCH_BLOG_POSTS,
      payload: docsData
    });
  } else {
    dispatch({
      type: FETCH_BLOG_POSTS,
      payload: []
    });
  }
};

export const fetchSingleBlogPost = (id, setEvent) => async dispatch => {
  const data = await db
    .collection("blog_posts")
    .doc(id)
    .get();

  setEvent(data.data());

  if (!!data) {
    dispatch({
      type: FETCH_SINGLE_BLOG_POST,
      payload: data.data()
    });
  }
};

export const fetchCrewMembers = () => async dispatch => {
  const data = await db
    .collection("users")
    .where("approved", "==", true)
    .get();

  if (data.docs !== undefined) {
    const docsData = [];
    data.docs.map(doc => {
      docsData.push(doc.data());
    });

    dispatch({
      type: FETCH_CREW_MEMBERS,
      payload: docsData
    });
  } else {
    dispatch({
      type: FETCH_CREW_MEMBERS,
      payload: []
    });
  }
};

export const fetchCampApplications = () => async dispatch => {
  const data = await db.collection("applications").get();

  if (data.docs !== undefined) {
    const docsData = [];
    data.docs.map(doc => {
      docsData.push(doc.data());
    });

    dispatch({
      type: FETCH_CAMP_APPLICATIONS,
      payload: docsData
    });
  } else {
    dispatch({
      type: FETCH_CAMP_APPLICATIONS,
      payload: []
    });
  }
};

export const newsletterSignup = (email, setEvent) => () => {
  db.collection("emails")
    .doc("list")
    .set(
      { list: firebase.firestore.FieldValue.arrayUnion(email) },
      { merge: true }
    )
    .then(() => {
      setEvent(true);
    });
};

export const newsletterRemove = email => () => {
  db.collection("emails")
    .doc("list")
    .set({ list: firebase.firestore.FieldValue.arrayRemove(email) });
};

export const addApplicationComment = (
  appplicationId,
  comment,
  profileUid,
  profileName,
  profileImage,
  clearForm
) => dispatch => {
  const newDoc = db.collection("applications_comments").doc();
  console.log(profileImage);
  const docObject = {
    id: newDoc.id,
    application_ID: appplicationId,
    content: comment,
    author_uid: profileUid,
    author_name: profileName,
    author_avatar: profileImage,
    timestamp: new Date()
  };
  newDoc.set(docObject).then(() => {
    clearForm("");
    dispatch({
      type: ADD_APPLICATION_COMMENT,
      payload: docObject
    });
  });
};

export const fetchApplicationsComments = () => async dispatch => {
  const data = await db.collection("applications_comments").get();

  dispatch({
    type: FETCH_APPLICATIONS_COMMENTS,
    payload: !!data.docs
      ? data.docs.map(doc => {
          return doc.data();
        })
      : []
  });
};

export const addApplicationReply = (
  reply,
  commentId,
  profileUid,
  profileName,
  profileImage,
  clearForm
) => dispatch => {
  const newDoc = db.collection("applications_replies").doc();

  const docObject = {
    id: newDoc.id,
    comment_ID: commentId,
    content: reply,
    author_uid: profileUid,
    author_name: profileName,
    author_avatar: profileImage,
    timestamp: new Date()
  };
  newDoc.set(docObject).then(() => {
    clearForm("");
    dispatch({
      type: ADD_APPLICATION_REPLY,
      payload: docObject
    });
  });
};

export const fetchApplicationsReplies = () => async dispatch => {
  const data = await db.collection("applications_replies").get();

  dispatch({
    type: FETCH_APPLICATIONS_REPLIES,
    payload: !!data.docs
      ? data.docs.map(doc => {
          return doc.data();
        })
      : []
  });
};

export const approveApplication = applicationID => async dispatch => {
  const data = await db
    .collection("applications")
    .doc(applicationID)
    .set({ status: 2 }, { merge: true });

  // dispatch({
  //   type: FETCH_APPLICATIONS_REPLIES,
  //   payload: !!data.docs
  //     ? data.docs.map(doc => {
  //         return doc.data();
  //       })
  //     : []
  // });
};

export const declineApplication = applicationID => async dispatch => {
  const data = await db
    .collection("applications")
    .doc(applicationID)
    .set({ status: 3 }, { merge: true });

  // dispatch({
  //   type: FETCH_APPLICATIONS_REPLIES,
  //   payload: !!data.docs
  //     ? data.docs.map(doc => {
  //         return doc.data();
  //       })
  //     : []
  // });
};
