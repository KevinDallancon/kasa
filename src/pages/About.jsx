import Collapse from '../components/Collapse/Collapse'
import Data from '../data/dataAbout.json'
import Banner from '../components/Banner/Banner';


function About() {

  const dataAbout = Data;

  return (
      <main className="aboutStyle">
          <Banner />
          <section>
            {dataAbout.map( data => {
              return (
                <div key={data.id}>
                  <Collapse title={data.title} content={data.content} />
                </div>
              )}
            )}
          </section>
      </main>
  )
}

export default About