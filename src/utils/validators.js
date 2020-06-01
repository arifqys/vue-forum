import firebase from 'firebase'
import {helpers as vuelidateHelpers} from 'vuelidate/lib/validators'

const uniqueUsername = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }
  return new Promise((resolve, reject) => {
    firebase.database().ref('users').orderByChild('usernameLower').equalTo(value.toLowerCase())
      .once('value', snapshot => resolve(!snapshot.exists()))
  })
}

const uniqueEmail = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }
  return new Promise((resolve, reject) => {
    firebase.database().ref('users').orderByChild('email').equalTo(value.toLowerCase())
      .once('value', snapshot => resolve(!snapshot.exists()))
  })
}

const supportedImageFile = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }
  const supported = ['jpg', 'jpeg', 'gif', 'png', 'svg']
  const suffix = value.split('.').pop()
  return supported.includes(suffix)
}

const responseOk = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }
  return new Promise((resolve, reject) => {
    fetch(value)
      .then(response => resolve(response.ok))
      .catch(() => resolve(false))
  })
}

export {
  uniqueUsername,
  uniqueEmail,
  supportedImageFile,
  responseOk
}
