import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
	  .then((responses) => {
		  console.log(responses[0].body, responses[1].firstName, responses[1].lastName);
		}) .catch (() => console.log('Signup system offline'));
}