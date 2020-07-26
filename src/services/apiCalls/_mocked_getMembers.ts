import MembersData from '../../data/members.json';

export default () => {
  return new Promise(resolve => {
    resolve(MembersData);
  });
};