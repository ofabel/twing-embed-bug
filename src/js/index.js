const path = require('path');

const { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingLoaderFilesystem, TwingLoaderChain } = require('twing');

const twing = new TwingEnvironment(new TwingLoaderRelativeFilesystem());

const pathToIndex = './src/twig/index.twig';

twing.render(pathToIndex, {})
    .then(output => console.info(output))
    .catch(error => console.error(error));