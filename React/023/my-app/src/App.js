import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'


function App() {
  const user = {
    login: true,
    id: 'heesu',
    email: 'jheesu033@gmail.com',
    img: 'https://festivallife.kr/common/img/default_profile.png'
  }
  return (
    <main>
      {
        user.login ? 
        <Homepage
          id = {user.id}
          email = {user.email}
          img = {user.img}
        /> : 
        <Login/>
      }
    </main>
  );
}

export default App;