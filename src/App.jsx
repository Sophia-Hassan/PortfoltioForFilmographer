
import {lazy, Suspense} from 'react';
import Lazyload from 'react-lazyload'

const Hero = lazy(() => import('./components/hero/Hero'))
const Services = lazy(() => import('./components/services/Services')) 
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'))
const Contact = lazy(() => import('./components/contact/Contact'))

const App = () => {
  return (

    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}> 
      <Lazyload height={'100vh'} offset={-100}> 
      <section id='hero' className='viewport'>
      <Hero />
      </section>
      </Lazyload>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}> 
      <Lazyload height={'100vh'} offset={-100}> 
      <section id='services' className='viewport'>
      <Services />
      </section>
      </Lazyload>
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}> 
      <Lazyload height={'100vh'} offset={-100}> 
     <section  >
     <Portfolio />
     </section>
     </Lazyload>
     </Suspense>
      
     <Suspense fallback={<div>Loading...</div>}> 
     <Lazyload height={'100vh'} offset={-100}> 
      <section id='contact' className='viewport'>
        
      <Contact/>
      </section>
      </Lazyload>
      </Suspense>

      
      



    </div>
  )
}

export default App