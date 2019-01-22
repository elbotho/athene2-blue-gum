import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Topnav } from '../src/topnav.component'
import { FooterNav } from '../src/footernav.component'
import { FooterBranding } from '../src/footerbranding.component'
import { Provider, GlobalStyle } from '../src/provider.component'
import { Normalize } from 'styled-normalize'

import { articleContent,topNavLinks,footerNavLinks, serloSlogan } from './dummycontent';

storiesOf('Footer', module).add('complete', () => {
  return (
    <Provider>
      <Normalize/>
      <GlobalStyle/>
      <footer>
        <FooterBranding serloSlogan = {serloSlogan} />
        <FooterNav links = {footerNavLinks} />
      </footer>
    </Provider>
  )
}).add('only nav', () => {
  return(
    <Provider>
      <footer>
        <FooterNav links = {footerNavLinks} />
      </footer>
    </Provider>
  )
});

// storiesOf('Topnav', module).add('default', () => {
//     return (
//       <Provider>  
//         <Topnav
//           links={topNavLinks}
//         />
//       </Provider>
//     )
//   })