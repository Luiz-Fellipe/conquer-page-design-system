import React, { InputHTMLAttributes } from 'react'
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  InputWithIconStyled,
  InputContent,
  ErrorMessage,
  InputWithIconContainer,
  Label,
  Description,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IInputWithIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  disabled?: boolean
  full?: boolean
  error?: boolean
  errorMessage?: string
  label?: string
  description?: string
  Icon: IconProp | IconDefinition
}

export const InputWithIcon: React.FC<IInputWithIconProps> = ({
  placeholder,
  disabled,
  error,
  errorMessage,
  full,
  label,
  description,
  Icon,
  ...rest
}) => {
  return (
    <InputWithIconContainer data-testid="input-with-icon-container" full={full}>
      {!!label && <Label>{label}</Label>}
      {!!description && <Description>{description}</Description>}

      <InputContent
        data-testid="input-with-icon-content"
        error={error}
        disabled={disabled}
      >
        {Icon && <FontAwesomeIcon icon={Icon} />}
        <InputWithIconStyled
          data-testid="input-with-icon"
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </InputContent>

      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWithIconContainer>
  )
}
