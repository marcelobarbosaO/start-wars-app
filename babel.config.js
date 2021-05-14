module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '~/assets': ['./src/assets'],
          '~/components': ['./src/components'],
          '~/scenes': ['./src/scenes'],
          '~/config': ['./src/config'],
          '~/context': ['./src/context'],
          '~/services': ['./src/services'],
          '~/utils': ['./src/utils'],
        },
      },
    ],
  ],
};
