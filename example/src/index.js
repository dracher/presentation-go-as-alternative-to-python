import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from '../../src';

import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import Loading from 'react-loading';

import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
import Interactive from '../assets/interactive';

require('normalize.css');
require('../../src/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  gopython: require('../assets/gopher-python.png'),
  boston: require('../assets/cities/boston.png'),
  chicago: require('../assets/cities/chicago.png'),
  losangeles: require('../assets/cities/losangeles.png'),
  miami: require('../assets/cities/miami.png'),
  phladelphia: require('../assets/cities/phladelphia.png'),
  sandiego: require('../assets/cities/sandiego.png'),
  bg01: require('../assets/bg01.jpg')
};

preloader(images);

const theme = createTheme({
  primary: '#90C3D4'
});

const skylineBg = city => {
  return {
    backgroundImage: `url(${city})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  };
};

const cursor = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide', 'fade', 'spin']}
        theme={theme}
        transitionDuration={500}
      >
        {/* Page 01 */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Golang in auto-testing
          </Heading>
          <Heading size={1} fit caps>
            as an alternative to python
          </Heading>
          <Image src={images.gopython} margin="100px auto 40px" />
        </Slide>

        {/* Page 02 */}
        <Slide transition={['spin']} style={skylineBg(images.boston)}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Disclaimers
          </Heading>
          <List>
            <Appear>
              <ListItem>Not talking about replace python with go</ListItem>
            </Appear>
            <Appear>
              <ListItem>In most case, python is still more efficiency</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Python's ecosystem is way more mature and rich than go
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                So let's focus on, under what circumstances go could be better
                choice or as an alternative to python
              </ListItem>
            </Appear>
          </List>
          <Notes>some notes here it is</Notes>
        </Slide>

        {/* Page03 */}
        <Slide style={skylineBg(images.chicago)} transition={['fade']}>
          <Heading>Things People Say</Heading>
          <BlockQuote margin="70px auto 40px">
            <Quote textSize={50} italic textColor={'grey'}>
              Go is like C and Python had a kid, who inherited Python’s good
              looks and pleasant demeanor, along with C’s confidence and
              athletic ability.
            </Quote>
            <Cite textColor={'grey'} textAlign={'right'}>
              Jason McVetta
            </Cite>
          </BlockQuote>
        </Slide>

        {/* Page04 */}
        <Slide style={skylineBg(images.losangeles)} transition={['spin']}>
          <Heading>Go's Features</Heading>
          <Table margin="60px auto 40px">
            <TableBody>
              <TableRow>
                <TableItem>1. Opinionated</TableItem>
                <TableItem textSize={30}>one right way to do things</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>2. Minimalist</TableItem>
                <TableItem textSize={30}>
                  minimalist approach to language design
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>3. Fast</TableItem>
                <TableItem textSize={30}>
                  Go is blazing fast, especially lighting-fast compilation
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>4. Batteries Included</TableItem>
                <TableItem textSize={30}>
                  Go’s standard library provides a solid foundation for many
                  modern programming tasks
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        {/* Page05 */}
        <Slide
          style={skylineBg(images.miami)}
          transition={['spin']}
          align="center top"
        >
          <Layout>
            <Text textColor="white" textSize={80}>
              Hello World
            </Text>
          </Layout>
          <Layout>
            <Appear>
              <Fit>
                <Text>hello_world.py</Text>
                <CodePane
                  lang="python"
                  source={require('raw-loader!../assets/code/helloworld.py')}
                  margin="20px"
                />
              </Fit>
            </Appear>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Appear>
              <Fill>
                <Text>hello_world.go</Text>
                <CodePane
                  lang="go"
                  source={require('raw-loader!../assets/code/helloworld.go')}
                  margin="20px"
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>

        {/* Page06 */}
        <Slide
          style={skylineBg(images.phladelphia)}
          transition={['spin']}
          align="center top"
        >
          <Text caps textColor="tertiary">
            How to Run or Compile?
          </Text>
          <br />
          <Terminal
            title="1. dracher@zsh: ~(zsh)"
            output={[
              <Typist cursor={cursor}>$ python hello.py</Typist>,
              <div style={{ color: '#33B969' }}>
                Hello world, the time is: Sat Jul 13 12:49:14 2017
              </div>,
              <Typist cursor={cursor}>$ go run hello.go</Typist>,
              <div style={{ color: '#33B969' }}>
                Hello world, the time is: 2017-07-13 13:01:23.837155926 -0700
                PDT
              </div>,
              <Typist cursor={cursor}>$ ls</Typist>,
              <div style={{ color: '#33B969' }}>helloworld.go</div>,
              <Typist cursor={cursor}>$ go build -v .</Typist>,
              [
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                  <span style={{ marginLeft: '1rem' }} />
                </div>,
                <Typist cursor={cursor}>$ ls</Typist>
              ],
              <div style={{ color: '#33B969' }}>helloworld</div>,
              <Typist cursor={cursor}>$ ./helloworld</Typist>,
              <div style={{ color: '#33B969' }}>
                Hello world, the time is: 2017-07-13 13:01:23.837155926 -0700
                PDT
              </div>,
              <Typist cursor={cursor}>
                $ go install -v . && ls $GOPATH/bin
              </Typist>,
              <div style={{ color: '#33B969' }}>helloworld*</div>
            ]}
          />
        </Slide>

        {/* Page07 */}
        <Slide transition={['spin']} style={skylineBg(images.bg01)}>
          <Heading size={4} caps textColor="white" lineHeight={1.2}>
            how do we use go in automation testing in our practical work
          </Heading>
        </Slide>

        <Slide style={skylineBg(images.miami)} align="center top">
          <Heading size={4} lineHeight={1.2}>
            Golang produce stand-alone, portable executable
          </Heading>
          <Heading size={6} lineHeight={1.2} textColor="white">
            That's gonna give a few advantages
          </Heading>
          <List>
            <ListItem>No dependency in most cases</ListItem>
            <ListItem>easy deployment</ListItem>
            <ListItem>no contamination to test environment</ListItem>
            <ListItem>perfect for agent based auto-testing model</ListItem>
          </List>
        </Slide>

        {/* Page08 */}
        <Slide>
          <Heading size={4} caps textColor="white" lineHeight={1.2}>
            TODO: a example
          </Heading>
        </Slide>

        <Slide style={skylineBg(images.chicago)}>
          <Heading size={4} lineHeight={1.2}>
            Go self-contained, relatively rich supporting library
          </Heading>
          <Heading size={6} lineHeight={1.2} textColor="white">
            make it's a good choice to act as api proxy or wrapper layer
          </Heading>
        </Slide>

        {/* Page09 */}
        <Slide style={skylineBg(images.boston)}>
          <Heading size={4} lineHeight={1.2}>
            Golang as sidekick
          </Heading>
          <Heading size={6} lineHeight={1.2} textColor="white">
            Integration With Existing Project
          </Heading>
        </Slide>

        {/* Page10 */}
        <Slide>
          <Heading size={4} caps textColor="white" lineHeight={1.2}>
            TODO: a example
          </Heading>
        </Slide>

        {/* Page11 */}
        <Slide style={skylineBg(images.chicago)}>
          <Heading size={4} lineHeight={1.2}>
            Tools picked from go echo system
          </Heading>
          <br />
          <Heading size={6} lineHeight={1.2} textColor="white">
            Helpful for automation testing
          </Heading>
        </Slide>

        {/* Page12 */}
        <Slide>
          <Heading size={4} caps textColor="white" lineHeight={1.2}>
            TODO: a example
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
