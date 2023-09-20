import Collapse from '../components/Collapse/Collapse'
import Data from '../data/dataAbout.json'
import Banner from '../components/Banner/Banner';


function About() {

  const dataAbout = Data;

  return (
      <div className="aboutStyle">
          <Banner />
          <main>
            {dataAbout.map( data => {
              return (
                <div key={data.id}>
                  <Collapse title={data.title} content={data.content} />
                </div>
              )}
            )}
          </main>
      </div>
  )
}

export default About