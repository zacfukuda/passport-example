// Not a best practice,
// but get the idea
export default function isAuthenticated() {
  return ( localStorage.getItem('token') )
}
