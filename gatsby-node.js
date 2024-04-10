exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript") {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
