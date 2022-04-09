import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

import { items } from './components/Menu/MenuState';

import { RecoilRoot } from 'recoil';
import { Post } from './components/Post/Post';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Menu items={items} />
      <Post />
    </RecoilRoot>
  );
}

export default App;
