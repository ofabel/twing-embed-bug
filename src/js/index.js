const path = require('path');

const { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingLoaderFilesystem, TwingLoaderChain } = require('twing');

const chain = new TwingLoaderChain();

chain.addLoader(new TwingLoaderRelativeFilesystem());

const twing = new TwingEnvironment(chain);

const pathToIndex = path.resolve(__dirname, '..', 'twig', 'index.twig');

twing.render(pathToIndex, {})
    .then(output => console.info(output))
    .catch(error => console.error(error));