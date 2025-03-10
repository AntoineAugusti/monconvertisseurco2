import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'utils/DataContext'
import Button from 'components/base/Button'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto 2rem;
`
const Text = styled.p`
  font-weight: 300;
  text-align: center;
`
export default function Categories() {
  const { categories } = useContext(DataContext)
  return (
    <Wrapper>
      <Text>En panne d’inspiration ? Naviguez par catégories :</Text>
      <Button.Wrapper>
        {categories.map((category) => (
          <Button
            key={category.slug}
            to={`/categories/${category.slug}`}
            small
            onClick={() =>
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Suggestion',
                category.name.fr,
              ])
            }
          >
            <Emoji>{category.emoji}</Emoji>
            {category.name.fr}
          </Button>
        ))}
      </Button.Wrapper>
    </Wrapper>
  )
}
