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
          about='Accusam hendrerit ea blandit sanctus magna diam nostrud qui enim et eum magna eos dolore veniam molestie zzril adipiscing no et invidunt invidunt labore eirmod stet mazim dolor stet stet tempor magna vulputate velit sadipscing diam voluptua clita diam sadipscing sanctus dolores dolor ut illum elitr sed justo gubergren ea dolor et clita diam facilisis vel ex magna adipiscing in ut consetetur sit tation' />
      </div>

      <div className='left'>
        <Section title='Section title'>
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
      </div>

      <div className='right'>
        <Section title='Section title'>
          <ExperienceList />
        </Section>
      </div>

    </div>
  )
}

export default App
