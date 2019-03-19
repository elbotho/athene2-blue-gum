import * as React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Anchor } from 'grommet'
import { getColor } from '../provider.component'
import { Button } from '../button.component'

import Logo from '../logo.component'
const participateSrc = require('../img/footer_participate.svg')
const donateSrc = require('../img/footer_donate.svg')

export interface AboutProps {
  slogan: string
}

export function About(props: AboutProps) {
  return (
    <AboutGrid fluid>
      <AboutWrap>
        <ColBrand xs={12} md={8}>
          <Logo subline={props.slogan} />
          <TopButton
            href="#top"
            title="Mit Serlo ganz nach oben ;)"
            iconName="chevron-up"
            backgroundColor="transparent"
            activeBackgroundColor={getColor('lightblue')}
          />
        </ColBrand>

        <Col xs={12} md={4}>
          <RowSummary>
            <Col xs={12}>
              <h2>
                <Anchor href="#" color="#fff">
                  Serlo.org
                </Anchor>{' '}
                ist die Wikipedia fürs Lernen.
              </h2>
              <p>
                Wir sind eine engagierte Gemeinschaft, die daran arbeitet,
                hochwertige Bildung weltweit frei verfügbar zu machen.
              </p>
              <p>
                <Button
                  label="Mehr erfahren"
                  iconName="chevron-circle-right"
                  backgroundColor="transparent"
                />
              </p>
            </Col>
          </RowSummary>

          <RowSupport>
            <Col xs>
              <ImageLink href="#">
                <img alt="Icon: Participate" src={participateSrc} />
                <StyledButton label="Mitmachen" />
              </ImageLink>
            </Col>
            <Col xs>
              <ImageLink href="#">
                <img alt="Icon: Spenden" src={donateSrc} />
                <StyledButton label="Spenden" />
              </ImageLink>
            </Col>
          </RowSupport>
        </Col>
      </AboutWrap>
    </AboutGrid>
  )
}

const AboutGrid = styled(Grid)`
  padding: 0;
`
const ImageLink = styled.a`
  > img {
    display: block;
    margin: 0 auto;
    max-width: 5rem;
  }
`

const StyledButton = styled(Button)`
  margin-top: 0.3rem;

  ${ImageLink}:hover & {
    background-color: ${getColor('brand')};
  }
` as typeof Button

const TopButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  > svg {
    vertical-align: -1em;
  }
` as typeof Button

const ColBrand = styled(Col)`
  background-color: ${getColor('brand')};
  position: relative;
`

const RowSummary = styled(Row)`
  background-color: ${getColor('lightblue')};
  color: #fff;
  padding-top: 2.5rem;

  @media (max-width: ${props => props.theme.md}) {
    padding-left: 3rem;
  }

  > div > h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  > div > p {
    margin: 2rem 0;
  }
`

const RowSupport = styled(Row)`
  padding: 1rem 0;
  background-color: ${getColor('brandGreen')};
  color: #fff;
  text-align: center;
`

const AboutWrap = styled(Row)`
  margin-right: 0;
`
