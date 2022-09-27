import React from 'react'
import Styles from './survey-item-styles.scss'
import { Icon, IconName } from '@/presentation/components'

const SurveyItem: React.FC = () => {
  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={IconName.thumbDown} />
        <time>
          <span className={Styles.day}>24</span>
          <span className={Styles.month}>09</span>
          <span className={Styles.year}>2022</span>
        </time>
        <p>Qual é o seu framework web favorito?</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export default SurveyItem
