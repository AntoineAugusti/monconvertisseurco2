import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Button from 'components/base/Button'

const hover = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const StyledButtonWrapper = styled(Button.Wrapper)`
  align-items: flex-start;
  margin-top: ${(props) => (props.title ? '0.25rem' : 0)};

  ${(props) => props.theme.mq.medium} {
    margin: 0;
  }
`
const StyledButton = styled(Button)`
  padding: 0.375rem 1rem;

  &:hover {
    .outline {
      animation-name: ${hover};
      animation-duration: 400ms;
    }
  }
`
const Svg = styled.svg`
  display: block;
  width: 1.125rem;
  height: auto;

  path {
    &.outline1 {
      animation-delay: 200ms;
    }
    &.outline2 {
      animation-delay: 400ms;
    }
  }
`
export default function ShareButton(props) {
  const { setShare } = useContext(ModalContext)
  return (
    <StyledButtonWrapper title={props.title}>
      <StyledButton hollow small onClick={() => setShare(true)}>
        <Svg
          width='512'
          height='512'
          viewBox='0 0 512 512'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M474.332 85.332C474.332 123.625 443.293 154.668 405 154.668C366.707 154.668 335.668 123.625 335.668 85.332C335.668 47.043 366.707 16 405 16C443.293 16 474.332 47.043 474.332 85.332V85.332Z' />
          <path
            d='M405 170.668C357.938 170.668 319.668 132.395 319.668 85.332C319.668 38.2734 357.938 0 405 0C452.062 0 490.332 38.2734 490.332 85.332C490.332 132.395 452.062 170.668 405 170.668ZM405 32C375.582 32 351.668 55.9375 351.668 85.332C351.668 114.73 375.582 138.668 405 138.668C434.418 138.668 458.332 114.73 458.332 85.332C458.332 55.9375 434.418 32 405 32Z'
            className='outline'
          />
          <path d='M474.332 426.668C474.332 464.957 443.293 496 405 496C366.707 496 335.668 464.957 335.668 426.668C335.668 388.375 366.707 357.332 405 357.332C443.293 357.332 474.332 388.375 474.332 426.668V426.668Z' />
          <path
            d='M405 512C357.938 512 319.668 473.727 319.668 426.668C319.668 379.605 357.938 341.332 405 341.332C452.062 341.332 490.332 379.605 490.332 426.668C490.332 473.727 452.062 512 405 512ZM405 373.332C375.582 373.332 351.668 397.27 351.668 426.668C351.668 456.062 375.582 480 405 480C434.418 480 458.332 456.062 458.332 426.668C458.332 397.27 434.418 373.332 405 373.332V373.332Z'
            className='outline outline2'
          />
          <path d='M175.668 256C175.668 294.293 144.625 325.332 106.332 325.332C68.043 325.332 37 294.293 37 256C37 217.707 68.043 186.668 106.332 186.668C144.625 186.668 175.668 217.707 175.668 256Z' />
          <path
            d='M106.332 341.332C59.2734 341.332 21 303.062 21 256C21 208.938 59.2734 170.668 106.332 170.668C153.395 170.668 191.668 208.938 191.668 256C191.668 303.062 153.395 341.332 106.332 341.332ZM106.332 202.668C76.9141 202.668 53 226.602 53 256C53 285.398 76.9141 309.332 106.332 309.332C135.754 309.332 159.668 285.398 159.668 256C159.668 226.602 135.754 202.668 106.332 202.668Z'
            className='outline outline1'
          />
          <path d='M421.708 108.657C433.407 101.912 435.734 84.0317 426.906 68.7216C418.078 53.4115 401.437 46.4686 389.739 53.2144L93.1826 224.215C81.4838 230.961 79.1567 248.841 87.9848 264.151C96.813 279.461 113.454 286.404 125.152 279.658L421.708 108.657Z' />
          <path d='M396.357 461.275C408.062 468.011 424.696 461.054 433.511 445.736C442.326 430.418 439.984 412.54 428.279 405.805L131.576 235.059C119.871 228.324 103.237 235.281 94.4218 250.599C85.6069 265.916 87.9494 283.794 99.6539 290.53L396.357 461.275Z' />
        </Svg>
        <span>Partager</span>
      </StyledButton>
    </StyledButtonWrapper>
  )
}
