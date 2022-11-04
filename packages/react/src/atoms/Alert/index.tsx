import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
  AlertContainer,
  AlertContentIcon,
  AlertContentTexts,
  AlertTitle,
  AlertDescription,
} from './styles'

type variants = 'success' | 'info' | 'warning' | 'error'

export interface IAlertProps {
  variant?: variants
  title: string
  description?: string
  full?: boolean
}

type IAlertIconProps = {
  [key in variants]: IconProp
}

export function Alert({
  variant = 'info',
  title,
  description,
  full = false,
}: IAlertProps) {
  const alertIcons: IAlertIconProps = {
    success: faCircleCheck,
    info: faCircleInfo,
    error: faCircleExclamation,
    warning: faTriangleExclamation,
  }

  return (
    <AlertContainer data-testid="alert-container" variant={variant} full={full}>
      <AlertContentIcon>
        <FontAwesomeIcon icon={alertIcons[variant]} />
      </AlertContentIcon>
      <AlertContentTexts>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </AlertContentTexts>
    </AlertContainer>
  )
}
