<template>
  <div>
    <Hero image="/assets/images/hero.jpg" />
    <v-container d-flex fluid>
      <v-layout
        justify-center
        align-center
      >
        <v-content>
          <v-container grid-list-md fluid text-xs-center class="homepage-container">
            <v-layout row wrap>
              <v-flex xs12 md4>
                <FeatureItem
                  title='Track Your Progress'
                  image='https://instagram.fbog2-2.fna.fbcdn.net/vp/e0eb00166e7467fc1d9219576deec7ed/5B896F19/t51.2885-15/e35/31953998_624306257956636_1886532005009555456_n.jpg?_nc_eui2=AeHQ-A8E2qF1B-hIdc1EVTKpz49-GG4TOo_kowGElK-9jzD8WooN5RcxKXsgC6RT9JAov3JiBgFuQme3CrJJoayI'
                  imageAsBg='true'
                  alt='CrossFit photo'
                  link='https://www.instagram.com/p/Bi8Eb0fhSGu/'
                  byline="Photo From @Crossfit"
                  description=''
                  className='feature-item--home'
                />
              </v-flex>
              <v-flex xs12 md4>
                <FeatureItem
                  title='Get Statistics'
                  image='https://instagram.fbog2-2.fna.fbcdn.net/vp/6f4f54b4eff9d6af0ff2099333f984de/5B7E1264/t51.2885-15/e35/31122576_1350024201765861_3108284148695957504_n.jpg?_nc_eui2=AeEqj4-h_nQMDQS4SODxDbiJ6ZdXGUDmr8dTiYiGCdxZyidCUrHKmpRUks8UYZgI9lsw_y4FA9JW91e3QdarOVyz'
                  imageAsBg='true'
                  alt='CrossFit photo'
                  link='https://www.instagram.com/p/BiangeUBAyY/'
                  byline="Photo From @Crossfit"
                  description=''
                  className='feature-item--home'
                />
              </v-flex>
              <v-flex xs12 md4>
                <FeatureItem
                  title='Be Better'
                  image='https://instagram.fbog2-2.fna.fbcdn.net/vp/efd28c209eae8d7ccb806fb2e60a32fa/5B8D5082/t51.2885-15/e35/31752525_1008097519346778_203793281912406016_n.jpg?_nc_eui2=AeEmRBEEFKud9TYTlIfiiPdqliV5T8TtQ6kaSyY7nmRWxPx5RU7nJd4ZPk6vwjuO1xuoTJ5JVEw7DeWY6IwSZ_rF'
                  imageAsBg='true'
                  alt='CrossFit photo'
                  link='https://www.instagram.com/p/Bi8P4MEBBex/'
                  byline="Photo From @Crossfit"
                  description=''
                  className='feature-item--home'
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./HomepageExample.js"></script>
<style lang="scss" scoped>
   @import './styles.scss';
</style>
