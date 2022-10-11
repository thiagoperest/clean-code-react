import React from 'react'
import Styles from './survey-result-styles.scss'
import { Header, Footer, Loading, Calendar } from '@/presentation/components'
import FlipMove from 'react-flip-move'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        {false &&
        <>
          <hgroup>
            <Calendar date={new Date()} className={Styles.calendarWrap} />
            <h2>Qual é o seu framework web favorito? Qual é o seu framework web favorito?</h2>
          </hgroup><FlipMove className={Styles.answersList}>
            <li>
              <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" alt="Logo React" />
              <span className={Styles.answer}>ReactJS</span>
              <span className={Styles.percent}>50%</span>
            </li>
          </FlipMove>
          <button>Voltar</button>
        </>
        }
        { false && <Loading /> }
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
