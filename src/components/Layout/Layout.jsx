import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import { Fragment } from 'react';

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <Navbar/>
          </header>
          <main>
              {props.children}
          </main>
          <footer>
            <Footer />
          </footer>
    </Fragment>
  )
}

export default Layout