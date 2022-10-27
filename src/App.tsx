import reactLogo from './assets/react.svg'
import './App.css'
import { Section } from './components/Section/Section'
import { ExperienceList } from './components/Experience/ExperienceList'
import { Intro } from './components/Intro/Intro'

function App() {

  return (
    <div className="App">

      <div className='top'>
        <Intro
          name='Consecte Tempor Nulla'
          position='Invidunt sadipscing'
          about='Accusam hendrerit ea blandit sanctus magna diam nostrud qui enim et eum magna eos dolore veniam molestie zzril adipiscing no et invidunt invidunt labore eirmod stet mazim dolor stet stet tempor magna vulputate velit sadipscing.' />
      </div>

      <div className='left'>

        <Section title='Skills'>
          <ul>
            <li>
              Nibh rebum nibh
            </li>
            <li>
              Nibh rebum nibh
            </li>
            <li>
              Nibh rebum nibh
            </li>
            <li>
              Nibh rebum nibh
            </li>
          </ul>
        </Section>

        <Section title='Contact' border={true}>
          <ul>
            <li>
              mail@mail.com
            </li>
            <li>
              Address ###
            </li>
            <li>
              8110000000
            </li>
            <li>
              www.page.com
            </li>
          </ul>
        </Section>



      </div>

      <div className='right'>
        <Section title='Work Experience'>
          <ExperienceList />
        </Section>
      </div>

      <div className='bottom'>
        <Section title='Education'>
          <p>Accusam hendrerit ea blandit sanctus magna diam nostrud qui enim et eum magna eos dolore veniam molestie zzril adipiscing no et invidunt invidunt labore eirmod stet mazim dolor stet stet tempor magna vulputate velit sadipscing diam voluptua clita diam sadipscing.</p>
        </Section>
      </div>

    </div>
  )
}

export default App
